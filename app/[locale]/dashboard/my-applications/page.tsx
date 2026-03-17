import { redirect } from "next/navigation";
import { getLogtoContext, getAccessTokenRSC } from "@logto/next/server-actions";
import { getTranslations } from "next-intl/server";
import { logtoConfig } from "@/lib/logto";
import { getMyApplications, getVacancy } from "@/lib/api";
import { Application, Vacancy } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Briefcase } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const statusVariants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  applied: "secondary",
  reviewed: "outline",
  rejected: "destructive",
  accepted: "default",
};

export default async function MyApplicationsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("applications");
  const td = await getTranslations("dashboard");

  const { isAuthenticated } = await getLogtoContext(logtoConfig);
  if (!isAuthenticated) redirect(`/${locale}`);

  let applications: Application[] = [];
  const vacancyMap: Record<number, Vacancy> = {};

  try {
    const token = await getAccessTokenRSC(
      logtoConfig,
      process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app"
    );
    applications = await getMyApplications(token);

    // Load vacancy details for each application
    await Promise.allSettled(
      applications.map(async (app) => {
        try {
          const vacancy = await getVacancy(app.vacancy_id);
          vacancyMap[app.vacancy_id] = vacancy;
        } catch {
          // Vacancy might be gone
        }
      })
    );
  } catch {
    // Token fetch failed
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t("myTitle")}</h1>
        <p className="text-sm text-muted-foreground">{t("mySubtitle")}</p>
      </div>

      {applications.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center py-16 text-center">
            <Briefcase className="mb-4 h-12 w-12 text-muted-foreground/40" />
            <h2 className="text-lg font-semibold">{td("noApplications")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{td("noApplicationsDesc")}</p>
            <Button asChild className="mt-6">
              <Link href={`/vacancies`}>{td("browseJobs")}</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => {
            const vacancy = vacancyMap[app.vacancy_id];
            return (
              <Card key={app.id}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      {vacancy ? (
                        <>
                          <Link
                            href={`/vacancies/${app.vacancy_id}`}
                            className="font-semibold hover:underline"
                          >
                            {vacancy.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            {vacancy.company}
                            {vacancy.location ? ` · ${vacancy.location}` : ""}
                          </p>
                        </>
                      ) : (
                        <p className="font-semibold">Vacancy #{app.vacancy_id}</p>
                      )}
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
                    </div>
                    {vacancy && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/vacancies/${app.vacancy_id}`}>
                          View Job
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
