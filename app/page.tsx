import Link from "next/link";
import { getVacancies } from "@/lib/api";
import { Vacancy } from "@/lib/types";
import { VacancyList } from "@/components/vacancy/vacancy-list";

export default async function HomePage() {
  let vacancies: Vacancy[] = [];
  try {
    vacancies = await getVacancies({ limit: 6 });
  } catch {
    // API might not be available yet
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-20 dark:from-gray-900 dark:to-gray-950">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Find Your Next{" "}
            <span className="text-blue-600">Career Opportunity</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Browse the latest job openings from top companies.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/vacancies"
              className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Browse All Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      {vacancies.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Latest Openings
            </h2>
            <Link
              href="/vacancies"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all →
            </Link>
          </div>
          <div className="mt-6">
            <VacancyList vacancies={vacancies} />
          </div>
        </section>
      )}
    </div>
  );
}
