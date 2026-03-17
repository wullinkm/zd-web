import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { getVacancies, getFilterOptions } from "@/lib/api";
import { Vacancy } from "@/lib/types";
import { VacancyList } from "@/components/vacancy/vacancy-list";
import { SearchBar } from "@/components/search/search-bar";
import { Filters } from "@/components/search/filters";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Vacatures",
};

interface PageProps {
  searchParams: Promise<{
    q?: string;
    company?: string;
    location?: string;
    department?: string;
  }>;
}

export default async function VacanciesPage({ searchParams }: PageProps) {
  const t = await getTranslations("vacancies");
  const params = await searchParams;

  const [vacancies, filterOptions] = await Promise.all([
    getVacancies({
      search: params.q,
      company: params.company,
      location: params.location,
      department: params.department,
    }).catch((): Vacancy[] => []),
    getFilterOptions().catch(() => ({
      companies: [],
      locations: [],
      departments: [],
    })),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="mt-1 text-muted-foreground">
          {t("positions", { count: vacancies.length })}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar with filters */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="lg:hidden mb-4">
              <Suspense fallback={null}>
                <SearchBar />
              </Suspense>
            </div>
            <Card>
              <CardContent className="p-4">
                <Suspense fallback={null}>
                  <Filters filterOptions={filterOptions} />
                </Suspense>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main content */}
        <div className="lg:col-span-3">
          <div className="mb-6 hidden lg:block">
            <Suspense fallback={null}>
              <SearchBar />
            </Suspense>
          </div>
          <VacancyList vacancies={vacancies} />
        </div>
      </div>
    </div>
  );
}
