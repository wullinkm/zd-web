import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { careers } from "@/lib/careers";
import { TrendingUp, Euro } from "lucide-react";

export async function generateMetadata() {
  const locale = await getLocale();
  return {
    title: locale === "nl" ? "Carrièregids – Top 50 Carrières" : "Career Guide – Top 50 Careers",
    description:
      locale === "nl"
        ? "Ontdek de top 50 carrières op de Nederlandse arbeidsmarkt. Salarissen, vaardigheden, opleiding en carrièrepad per functie."
        : "Discover the top 50 careers in the Dutch labour market. Salaries, skills, education and career path per role.",
  };
}

export default async function CareerGuidePage() {
  const t = await getTranslations("careerGuide");
  const locale = await getLocale();

  const categoryKeys = [
    "technology",
    "healthcare",
    "finance",
    "engineering",
    "business",
    "legal",
    "creative",
    "education",
    "sustainability",
    "logistics",
  ] as const;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Career grid by category */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {categoryKeys.map((cat) => {
          const categoryCareers = careers.filter((c) => c.category === cat);
          if (categoryCareers.length === 0) return null;

          return (
            <div key={cat} className="mb-16">
              <h2 className="mb-6 text-xl font-bold sm:text-2xl">
                {t(`categories.${cat}`)}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryCareers.map((career) => (
                  <Card
                    key={career.slug}
                    className="group border border-border/60 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <CardContent className="p-5">
                      <div className="mb-3 flex items-start justify-between">
                        <span className="text-3xl" role="img" aria-label={career.title[locale as "nl" | "en"]}>
                          {career.emoji}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {t(`categories.${cat}`)}
                        </Badge>
                      </div>
                      <h3 className="text-base font-semibold leading-tight">
                        {career.title[locale as "nl" | "en"]}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {career.subtitle[locale as "nl" | "en"]}
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Euro className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                        <span>{career.salaryMid}</span>
                        <span className="text-muted-foreground/50">•</span>
                        <TrendingUp className="h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                        <span className="text-green-600 dark:text-green-400">
                          {locale === "nl" ? "Hoge vraag" : "High demand"}
                        </span>
                      </div>
                      <div className="mt-4">
                        <Link
                          href={`/career-guide/${career.slug}` as `/career-guide/${string}`}
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          {t("learnMore")}
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-primary/5 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">{t("cta")}</h2>
          <p className="mt-3 text-muted-foreground">{t("ctaDesc")}</p>
          <div className="mt-6">
            <Link
              href="/vacancies"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {locale === "nl" ? "Bekijk alle vacatures" : "Browse all vacancies"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
