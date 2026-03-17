import { Suspense } from "react";
import { getVacancies } from "@/lib/api";
import { Vacancy } from "@/lib/types";
import { VacancyList } from "@/components/vacancy/vacancy-list";
import { SearchBar } from "@/components/search/search-bar";

export const metadata = {
  title: "Browse Jobs",
  description: "Search and browse all available job openings.",
};

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function VacanciesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  let vacancies: Vacancy[] = [];
  try {
    vacancies = await getVacancies({
      search: params.q,
    });
  } catch {
    // API might not be available
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Job Openings
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {vacancies.length} positions available
        </p>
      </div>

      <div className="mb-8">
        <Suspense fallback={null}>
          <SearchBar />
        </Suspense>
      </div>

      <VacancyList vacancies={vacancies} />
    </div>
  );
}
