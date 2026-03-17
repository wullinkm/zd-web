import { redirect } from "next/navigation";
import { getLogtoContext } from "@logto/next/server-actions";
import { getAccessTokenRSC } from "@logto/next/server-actions";
import { getTranslations } from "next-intl/server";
import { logtoConfig } from "@/lib/logto";
import { getMyVacancies } from "@/lib/api";
import { Vacancy } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { PlusCircle, Pencil, Users, User, Briefcase } from "lucide-react";
import { DeleteVacancyButton } from "@/components/dashboard/delete-vacancy-button";

interface DashboardPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { locale } = await params;
  const t = await getTranslations("dashboard");
  const { isAuthenticated, claims, userInfo } = await getLogtoContext(logtoConfig, {
    fetchUserInfo: true,
  });

  if (!isAuthenticated) {
    redirect(`/${locale}`);
  }

  const roles = (userInfo?.roles as string[] | undefined) ?? (claims?.roles as string[] | undefined) ?? [];
  const isEmployer = roles.includes("employer");

  // ── Job Seeker Dashboard ──────────────────────────────────────────────────
  if (!isEmployer) {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{t("jobSeekerWelcome")}</h1>
          <p className="mt-2 text-muted-foreground">{t("jobSeekerDesc")}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-semibold">{t("editProfile")}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Build your profile to get discovered by employers.
              </p>
              <Button asChild size="sm">
                <Link href={`/${locale}/profile/edit`}>{t("editProfile")}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-semibold">{t("myApplications")}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Track the status of your job applications.
              </p>
              <Button asChild size="sm" variant="outline">
                <Link href={`/${locale}/dashboard/my-applications`}>{t("viewMyApplications")}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Users className="h-5 w-5 text-secondary-foreground" />
                </div>
                <h2 className="font-semibold">{t("upgradeToEmployer")}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t("jobSeekerDesc")}
              </p>
              <Button asChild size="sm" variant="outline">
                <Link href="/contact">{t("upgradeToEmployer")}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ── Employer Dashboard ────────────────────────────────────────────────────
  let token = "";
  let vacancies: Vacancy[] = [];

  try {
    token = await getAccessTokenRSC(
      logtoConfig,
      process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app"
    );
    vacancies = await getMyVacancies(token);
  } catch {
    // Token fetch failed or no vacancies — show empty state
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t("myVacancies")}</h1>
          <p className="text-sm text-muted-foreground">
            {t("vacancyCount", { count: vacancies.length })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href={`/${locale}/dashboard/candidates`}>
              <Users className="mr-2 h-4 w-4" />
              {t("browseCandidates")}
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/${locale}/dashboard/new`}>
              <PlusCircle className="mr-2 h-4 w-4" />
              {t("postNew")}
            </Link>
          </Button>
        </div>
      </div>

      {vacancies.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center py-16 text-center">
            <PlusCircle className="mb-4 h-12 w-12 text-muted-foreground/40" />
            <h2 className="text-lg font-semibold">{t("noVacancies")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("noVacanciesDesc")}
            </p>
            <Button asChild className="mt-6">
              <Link href={`/${locale}/dashboard/new`}>{t("postNew")}</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {vacancies.map((vacancy) => (
            <Card key={vacancy.id}>
              <CardContent className="flex items-start justify-between p-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold">{vacancy.title}</h2>
                    <Badge
                      variant={vacancy.is_active ? "default" : "secondary"}
                    >
                      {vacancy.is_active ? t("active") : t("inactive")}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {vacancy.company}
                    {vacancy.location ? ` · ${vacancy.location}` : ""}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/${locale}/dashboard/edit/${vacancy.id}`}>
                      <Pencil className="mr-1.5 h-3.5 w-3.5" />
                      {t("edit")}
                    </Link>
                  </Button>
                  <DeleteVacancyButton
                    id={vacancy.id}
                    token={token}
                    locale={locale}
                    label={t("delete")}
                    confirmMessage={t("deleteConfirm")}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
