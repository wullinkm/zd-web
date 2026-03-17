import { Briefcase } from "lucide-react";
import { Vacancy } from "@/lib/types";
import { VacancyCard } from "./vacancy-card";

interface VacancyListProps {
  vacancies: Vacancy[];
}

export function VacancyList({ vacancies }: VacancyListProps) {
  if (vacancies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <Briefcase className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">No vacancies found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your search or check back later for new openings.
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
