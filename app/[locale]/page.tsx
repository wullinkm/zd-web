import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { Briefcase, Building2, Globe, ArrowRight, Search, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getVacancies } from "@/lib/api";
import { Vacancy } from "@/lib/types";
import { VacancyList } from "@/components/vacancy/vacancy-list";
import { SearchBar } from "@/components/search/search-bar";
import { Link } from "@/i18n/navigation";

export default async function HomePage() {
  const t = useTranslations();

  let vacancies: Vacancy[] = [];
  try {
    vacancies = await getVacancies({ limit: 6 });
  } catch {
    // API might not be available yet
  }

  const stats = [
    { icon: Briefcase, label: t("stats.jobs"), value: "500+" },
    { icon: Building2, label: t("stats.companies"), value: "100+" },
    { icon: Globe, label: t("stats.industries"), value: "10+" },
  ];

  const features = [
    {
      icon: Search,
      title: t("features.search.title"),
      description: t("features.search.description"),
    },
    {
      icon: CheckCircle2,
      title: t("features.verified.title"),
      description: t("features.verified.description"),
    },
    {
      icon: Send,
      title: t("features.apply.title"),
      description: t("features.apply.description"),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 px-4 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border bg-background/80 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
            <Briefcase className="mr-1.5 h-3.5 w-3.5" />
            {t("hero.badge")}
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {t("hero.subtitle")}
          </p>
          <div className="mx-auto mt-8 max-w-xl">
            <Suspense fallback={null}>
              <SearchBar large />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x px-4 sm:px-6 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 py-8 sm:py-10">
              <stat.icon className="mb-2 h-5 w-5 text-primary" />
              <span className="text-2xl font-bold sm:text-3xl">{stat.value}</span>
              <span className="text-xs text-muted-foreground sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Jobs */}
      {vacancies.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">{t("featured.title")}</h2>
              <p className="mt-1 text-muted-foreground">{t("featured.subtitle")}</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/vacancies" className="hidden sm:inline-flex">
                {t("featured.viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8">
            <VacancyList vacancies={vacancies} />
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/vacancies">{t("featured.viewAll")}</Link>
            </Button>
          </div>
        </section>
      )}

      {/* Why ZD Jobs */}
      <section className="bg-muted/30 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">{t("features.title")}</h2>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              {t("features.subtitle")}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-background shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-primary to-primary/80 px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">{t("cta.title")}</h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            {t("cta.subtitle")}
          </p>
          <Button size="lg" variant="secondary" asChild className="mt-6">
            <Link href="/vacancies">
              {t("cta.button")} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
