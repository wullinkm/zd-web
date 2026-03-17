import { redirect } from "next/navigation";
import { getLogtoContext } from "@logto/next/server-actions";
import { getAccessTokenRSC } from "@logto/next/server-actions";
import { getTranslations } from "next-intl/server";
import { logtoConfig } from "@/lib/logto";
import { VacancyForm } from "@/components/dashboard/vacancy-form";

interface NewVacancyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function NewVacancyPage({ params }: NewVacancyPageProps) {
  const { locale } = await params;
  const t = await getTranslations("dashboard");
  const { isAuthenticated } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated) {
    redirect(`/${locale}`);
  }

  let token = "";
  try {
    token = await getAccessTokenRSC(
      logtoConfig,
      process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app"
    );
  } catch {
    // No token — form will fail on submit, handled client-side
  }

  const labels = {
    title: t("form.title"),
    company: t("form.company"),
    location: t("form.location"),
    description: t("form.description"),
    department: t("form.department"),
    employmentType: t("form.employmentType"),
    salaryMin: t("form.salaryMin"),
    salaryMax: t("form.salaryMax"),
    salaryCurrency: t("form.salaryCurrency"),
    url: t("form.url"),
    save: t("form.save"),
    saving: t("form.saving"),
    cancel: t("form.cancel"),
    createTitle: t("form.createTitle"),
    editTitle: t("form.editTitle"),
    successCreate: t("form.successCreate"),
    successEdit: t("form.successEdit"),
    errorCreate: t("form.errorCreate"),
    errorEdit: t("form.errorEdit"),
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t("postNew")}</h1>
      </div>
      <VacancyForm token={token} locale={locale} labels={labels} />
    </div>
  );
}
