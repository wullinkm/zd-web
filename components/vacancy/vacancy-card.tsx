import Link from "next/link";
import { Vacancy } from "@/lib/types";
import { formatDate, truncate } from "@/lib/utils";

interface VacancyCardProps {
  vacancy: Vacancy;
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
  return (
    <Link href={`/vacancies/${vacancy.id}`} className="block">
      <div className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {vacancy.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-blue-600">{vacancy.company}</p>
          </div>
          {vacancy.employment_type && (
            <span className="inline-flex shrink-0 items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {vacancy.employment_type}
            </span>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
          {vacancy.location && (
            <span className="flex items-center gap-1">📍 {vacancy.location}</span>
          )}
          {vacancy.salary && (
            <span className="flex items-center gap-1">💰 {vacancy.salary}</span>
          )}
          {vacancy.date_posted && (
            <span className="flex items-center gap-1">📅 {formatDate(vacancy.date_posted)}</span>
          )}
        </div>

        {vacancy.description && (
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            {truncate(vacancy.description, 200)}
          </p>
        )}
      </div>
    </Link>
  );
}
