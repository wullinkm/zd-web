import { Vacancy } from "@/lib/types";
import { VacancyCard } from "./vacancy-card";

interface VacancyListProps {
  vacancies: Vacancy[];
}

export function VacancyList({ vacancies }: VacancyListProps) {
  if (vacancies.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          No vacancies found. Check back later!
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {vacancies.map((vacancy) => (
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  );
}
