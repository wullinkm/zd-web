import { notFound } from "next/navigation";
import Link from "next/link";
import { getVacancy } from "@/lib/api";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VacancyPage({ params }: PageProps) {
  const { id } = await params;
  let vacancy;
  try {
    vacancy = await getVacancy(Number(id));
  } catch {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/vacancies"
        className="mb-6 inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        ← Back to all jobs
      </Link>

      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              {vacancy.title}
            </h1>
            <p className="mt-2 text-lg font-medium text-blue-600">
              {vacancy.company}
            </p>
          </div>
          {vacancy.employment_type && (
            <span className="inline-flex shrink-0 items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {vacancy.employment_type}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
          {vacancy.location && <span>📍 {vacancy.location}</span>}
          {vacancy.salary && <span>💰 {vacancy.salary}</span>}
          {vacancy.date_posted && (
            <span>📅 Posted {formatDate(vacancy.date_posted)}</span>
          )}
        </div>

        {vacancy.description && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Description
            </h2>
            <div className="mt-3 whitespace-pre-wrap text-gray-600 dark:text-gray-300">
              {vacancy.description}
            </div>
          </div>
        )}

        {vacancy.url && (
          <div className="mt-8">
            <a
              href={vacancy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Apply Now →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
