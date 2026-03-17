import { redirect } from "next/navigation";
import { getLogtoContext, getAccessTokenRSC } from "@logto/next/server-actions";
import { getTranslations } from "next-intl/server";
import { logtoConfig } from "@/lib/logto";
import { getMyVacancies, getVacancyApplications } from "@/lib/api";
import { Vacancy, ApplicationWithProfile } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { FileText } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const statusVariants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  applied: "secondary",
  reviewed: "outline",
  rejected: "destructive",
  accepted: "default",
};

export default async function ApplicationsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("applications");
  const td = await getTranslations("dashboard");

  const { isAuthenticated, claims, userInfo } = await getLogtoContext(logtoConfig, {
    fetchUserInfo: true,
  });

  if (!isAuthenticated) redirect(`/${locale}`);

  const roles = (userInfo?.roles as string[] | undefined) ?? (claims?.roles as string[] | undefined) ?? [];
  if (!roles.includes("employer")) redirect(`/${locale}/dashboard`);

  let token = "";
  let vacancies: Vacancy[] = [];
  const vacancyApplications: Array<{ vacancy: Vacancy; applications: ApplicationWithProfile[] }> = [];

  try {
    token = await getAccessTokenRSC(
      logtoConfig,
      process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app"
    );
    vacancies = await getMyVacancies(token);

    for (const vacancy of vacancies) {
      try {
        const apps = await getVacancyApplications(vacancy.id, token);
        if (apps.length > 0) {
          vacancyApplications.push({ vacancy, applications: apps });
        }
      } catch {
        // Skip vacancies where applications fail to load
      }
    }
  } catch {
    // Token fetch failed
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>

      {vacancyApplications.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center py-16 text-center">
            <FileText className="mb-4 h-12 w-12 text-muted-foreground/40" />
            <h2 className="text-lg font-semibold">{t("noApplications")}</h2>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {vacancyApplications.map(({ vacancy, applications }) => (
            <div key={vacancy.id}>
              <h2 className="mb-3 text-lg font-semibold">
                {vacancy.title}
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  {vacancy.company}
                </span>
              </h2>
              <div className="space-y-3">
                {applications.map((app) => (
                  <Card key={app.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge variant={statusVariants[app.status] || "secondary"}>
                              {t(`status.${app.status as "applied" | "reviewed" | "rejected" | "accepted"}`)}
                            </Badge>
                            {app.applied_at && (
                              <span className="text-xs text-muted-foreground">
                                {t("appliedOn", { date: new Date(app.applied_at).toLocaleDateString() })}
                              </span>
                            )}
                          </div>
                          {app.profile && (
                            <div className="mt-2 space-y-1">
                              {app.profile.location && (
                                <p className="text-xs text-muted-foreground">{app.profile.location}</p>
                              )}
                              {app.profile.tags.filter((tg) => tg.tag_type === "role").length > 0 && (
                                <div className="flex gap-1 flex-wrap">
                                  {app.profile.tags
                                    .filter((tg) => tg.tag_type === "role")
                                    .map((tg) => (
                                      <Badge key={tg.id} variant="outline" className="text-xs">{tg.tag}</Badge>
                                    ))}
                                </div>
                              )}
                            </div>
                          )}
                          {app.cover_letter && (
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                              {app.cover_letter}
                            </p>
                          )}
                        </div>
                        <Link
                          href={`/${locale}/dashboard/candidates/${app.user_id}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {t("viewCandidate")}
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
