import { MapPin, Clock, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Vacancy } from "@/lib/types";
import { formatDate, truncate } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

interface VacancyCardProps {
  vacancy: Vacancy;
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
  return (
    <Link href={`/vacancies/${vacancy.id}` as "/vacancies"} className="group block">
      <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/20 group-hover:-translate-y-0.5">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {vacancy.title}
              </h3>
              <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Building2 className="h-3.5 w-3.5" />
                <span className="font-medium">{vacancy.company}</span>
              </div>
            </div>
            {vacancy.employment_type && (
              <Badge variant="secondary" className="shrink-0">
                {vacancy.employment_type}
              </Badge>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
            {vacancy.location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {vacancy.location}
              </span>
            )}
            {(vacancy.salary_min || vacancy.salary_max) && (
              <span className="flex items-center gap-1">
                💰 {vacancy.salary_currency || "€"}{" "}
                {vacancy.salary_min && vacancy.salary_max
                  ? `${vacancy.salary_min} - ${vacancy.salary_max}`
                  : vacancy.salary_min || vacancy.salary_max}
              </span>
            )}
            {vacancy.date_posted && (
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {formatDate(vacancy.date_posted)}
              </span>
            )}
          </div>

          {vacancy.description && (
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {truncate(vacancy.description, 180)}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
