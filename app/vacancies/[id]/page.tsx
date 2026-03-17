import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/vacancies">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to all jobs
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex flex-wrap items-start gap-3">
              <h1 className="text-2xl font-bold sm:text-3xl">{vacancy.title}</h1>
              {vacancy.employment_type && (
                <Badge variant="secondary" className="mt-1">
                  {vacancy.employment_type}
                </Badge>
              )}
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4" />
                {vacancy.company}
              </span>
              {vacancy.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {vacancy.location}
                </span>
              )}
              {vacancy.date_posted && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  Posted {formatDate(vacancy.date_posted)}
                </span>
              )}
            </div>
          </div>

          <Separator className="my-6" />

          {vacancy.description && (
            <div className="prose prose-sm max-w-none">
              <h2 className="text-lg font-semibold mb-4">About this role</h2>
              <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                {vacancy.description}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="font-semibold">Job Details</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Company</span>
                  <span className="font-medium">{vacancy.company}</span>
                </div>
                {vacancy.location && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{vacancy.location}</span>
                  </div>
                )}
                {vacancy.employment_type && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium">{vacancy.employment_type}</span>
                  </div>
                )}
                {vacancy.salary && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Salary</span>
                    <span className="font-medium">{vacancy.salary}</span>
                  </div>
                )}
              </div>

              {vacancy.url && (
                <>
                  <Separator className="my-5" />
                  <Button className="w-full" asChild>
                    <a href={vacancy.url} target="_blank" rel="noopener noreferrer">
                      Apply Now <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
