import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { getVacancies } from "@/lib/api";
import { Vacancy } from "@/lib/types";
import { VacancyList } from "@/components/vacancy/vacancy-list";
import { SearchBar } from "@/components/search/search-bar";

export const metadata = {
  title: "Vacatures",
};

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function VacanciesPage({ searchParams }: PageProps) {
  const t = useTranslations("vacancies");
  const params = await searchParams;
  let vacancies: Vacancy[] = [];
  try {
    vacancies = await getVacancies({ search: params.q });
  } catch {
    // API might not be available
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="mt-1 text-muted-foreground">
          {t("positions", { count: vacancies.length })}
        </p>
      </div>

      <div className="mb-8 max-w-2xl">
        <Suspense fallback={null}>
          <SearchBar />
        </Suspense>
      </div>

      <VacancyList vacancies={vacancies} />
    </div>
  );
}
