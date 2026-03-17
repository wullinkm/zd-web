import { redirect } from "next/navigation";
import { getLogtoContext, getAccessTokenRSC } from "@logto/next/server-actions";
import { getTranslations } from "next-intl/server";
import { logtoConfig } from "@/lib/logto";
import { searchCandidates } from "@/lib/api";
import { AnonymousProfile } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { MapPin, Briefcase, GraduationCap, Users } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ availability?: string; location?: string; tag?: string }>;
}

export default async function CandidatesPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const filters = await searchParams;
  const t = await getTranslations("candidates");

  const { isAuthenticated, claims, userInfo } = await getLogtoContext(logtoConfig, {
    fetchUserInfo: true,
  });

  if (!isAuthenticated) {
    redirect(`/${locale}`);
  }

  const roles = (userInfo?.roles as string[] | undefined) ?? (claims?.roles as string[] | undefined) ?? [];
  if (!roles.includes("employer")) {
    redirect(`/${locale}/dashboard`);
  }

  let candidates: AnonymousProfile[] = [];
  let error = false;

  try {
    const token = await getAccessTokenRSC(
      logtoConfig,
      process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app"
    );
    candidates = await searchCandidates(token, {
      availability: filters.availability || undefined,
      location: filters.location || undefined,
      tag: filters.tag || undefined,
    });
  } catch {
    error = true;
  }

  const availabilityOptions = [
    { value: "immediately", label: t("availability.immediately") },
    { value: "1_month", label: t("availability.1_month") },
    { value: "3_months", label: t("availability.3_months") },
    { value: "not_looking", label: t("availability.not_looking") },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <form className="flex flex-wrap gap-3 items-end">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">{t("filterAvailability")}</label>
              <select
                name="availability"
                defaultValue={filters.availability || ""}
                className="rounded-md border border-input bg-background px-3 py-1.5 text-sm"
              >
                <option value="">{t("allAvailability")}</option>
                {availabilityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">{t("filterLocation")}</label>
              <input
                name="location"
                defaultValue={filters.location || ""}
                placeholder={t("filterLocationPlaceholder")}
                className="rounded-md border border-input bg-background px-3 py-1.5 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">{t("filterTag")}</label>
              <input
                name="tag"
                defaultValue={filters.tag || ""}
                placeholder={t("filterTagPlaceholder")}
                className="rounded-md border border-input bg-background px-3 py-1.5 text-sm"
              />
            </div>
            <Button type="submit" size="sm">{t("search")}</Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            Failed to load candidates. Please try again.
          </CardContent>
        </Card>
      )}

      {!error && candidates.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center py-16 text-center">
            <Users className="mb-4 h-12 w-12 text-muted-foreground/40" />
            <h2 className="text-lg font-semibold">{t("noResults")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("noResultsHint")}</p>
          </CardContent>
        </Card>
      )}

      {!error && candidates.length > 0 && (
        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            {t("results", { count: candidates.length })}
          </p>
          <div className="space-y-4">
            {candidates.map((candidate) => {
              const skills = candidate.tags.filter((t) => t.tag_type === "skill");
              const roles = candidate.tags.filter((t) => t.tag_type === "role");

              return (
                <Card key={candidate.user_id}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        {candidate.location && (
                          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" />
                            {candidate.location}
                          </p>
                        )}
                        {candidate.availability && (
                          <Badge variant="outline">
                            {availabilityOptions.find((o) => o.value === candidate.availability)?.label || candidate.availability}
                          </Badge>
                        )}
                        {candidate.bio && (
                          <p className="text-sm text-muted-foreground line-clamp-2 max-w-lg">
                            {candidate.bio}
                          </p>
                        )}
                        {roles.length > 0 && (
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                            {roles.map((r) => (
                              <Badge key={r.id} variant="secondary">{r.tag}</Badge>
                            ))}
                          </div>
                        )}
                        {skills.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {skills.slice(0, 6).map((s) => (
                              <Badge key={s.id} variant="outline" className="text-xs">{s.tag}</Badge>
                            ))}
                            {skills.length > 6 && (
                              <Badge variant="outline" className="text-xs">+{skills.length - 6}</Badge>
                            )}
                          </div>
                        )}
                        {candidate.work_history.length > 0 && (
                          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <GraduationCap className="h-3.5 w-3.5" />
                            {candidate.work_history.length} work experience entries
                          </p>
                        )}
                      </div>
                      <Button asChild size="sm">
                        <Link href={`/dashboard/candidates/${candidate.user_id}`}>
                          {t("viewProfile")}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
