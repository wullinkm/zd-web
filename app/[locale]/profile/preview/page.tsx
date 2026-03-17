import { redirect } from "next/navigation";
import { getLogtoContext, getAccessTokenRSC } from "@logto/next/server-actions";
import { getTranslations } from "next-intl/server";
import { logtoConfig } from "@/lib/logto";
import { getMyProfile } from "@/lib/api";
import { Profile } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { MapPin, Mail, Phone, Briefcase, GraduationCap, Tag, Pencil } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProfilePreviewPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("profile");

  const { isAuthenticated } = await getLogtoContext(logtoConfig);
  if (!isAuthenticated) redirect(`/${locale}`);

  let profile: Profile | null = null;
  try {
    const token = await getAccessTokenRSC(
      logtoConfig,
      process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app"
    );
    profile = await getMyProfile(token);
  } catch {
    // No profile yet
  }

  const availabilityLabels: Record<string, string> = {
    immediately: t("availabilityOptions.immediately"),
    "1_month": t("availabilityOptions.1_month"),
    "3_months": t("availabilityOptions.3_months"),
    not_looking: t("availabilityOptions.not_looking"),
  };

  const skills = profile?.tags.filter((tg) => tg.tag_type === "skill") || [];
  const roles = profile?.tags.filter((tg) => tg.tag_type === "role") || [];
  const industries = profile?.tags.filter((tg) => tg.tag_type === "industry") || [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t("previewProfile")}</h1>
          <p className="text-sm text-muted-foreground">This is how employers see your profile after reveal.</p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href={`/${locale}/profile/edit`}>
            <Pencil className="mr-2 h-4 w-4" />
            {t("editProfile")}
          </Link>
        </Button>
      </div>

      {!profile || profile.id === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center py-16 text-center">
            <p className="text-muted-foreground">No profile yet. Start by editing your profile.</p>
            <Button asChild className="mt-4">
              <Link href={`/${locale}/profile/edit`}>{t("editProfile")}</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Header */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">{profile.full_name || "—"}</h2>
              {profile.availability && (
                <Badge variant="outline" className="mt-2">
                  {availabilityLabels[profile.availability] || profile.availability}
                </Badge>
              )}
              <div className="mt-4 space-y-2">
                {profile.location && (
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {profile.location}
                  </p>
                )}
                {profile.email && (
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    {profile.email}
                  </p>
                )}
                {profile.phone && (
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    {profile.phone}
                  </p>
                )}
              </div>
              {profile.bio && (
                <>
                  <Separator className="my-4" />
                  <p className="text-sm leading-relaxed">{profile.bio}</p>
                </>
              )}
              {profile.languages && (
                <p className="mt-3 text-sm text-muted-foreground">
                  <strong>Languages:</strong> {profile.languages}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Tags */}
          {(skills.length > 0 || roles.length > 0 || industries.length > 0) && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  {t("skillsAndTags")}
                </h3>
                {roles.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-2">{t("tagTypes.role")}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {roles.map((r) => <Badge key={r.id}>{r.tag}</Badge>)}
                    </div>
                  </div>
                )}
                {skills.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-2">{t("tagTypes.skill")}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((s) => <Badge key={s.id} variant="secondary">{s.tag}</Badge>)}
                    </div>
                  </div>
                )}
                {industries.length > 0 && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">{t("tagTypes.industry")}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {industries.map((i) => <Badge key={i.id} variant="outline">{i.tag}</Badge>)}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Work History */}
          {profile.work_history.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  {t("workHistory")}
                </h3>
                <div className="space-y-4">
                  {profile.work_history.map((job) => (
                    <div key={job.id}>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">{job.title}</p>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {job.start_date?.slice(0, 7)} — {job.end_date ? job.end_date.slice(0, 7) : "Present"}
                        </p>
                      </div>
                      {job.description && (
                        <p className="mt-1 text-sm text-muted-foreground">{job.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Education */}
          {profile.education.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  {t("education")}
                </h3>
                <div className="space-y-4">
                  {profile.education.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">{edu.institution}</p>
                          {edu.degree && <p className="text-sm text-muted-foreground">{edu.degree}</p>}
                          {edu.field_of_study && <p className="text-sm text-muted-foreground">{edu.field_of_study}</p>}
                        </div>
                        {(edu.start_year || edu.end_year) && (
                          <p className="text-xs text-muted-foreground">
                            {edu.start_year} — {edu.end_year || "Present"}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
