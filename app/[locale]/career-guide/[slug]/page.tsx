import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { careers, getCareerBySlug } from "@/lib/careers";
import { Euro, GraduationCap, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return careers.map((career) => ({ slug: career.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, locale } = await params;
  const career = getCareerBySlug(slug);

  if (!career) return {};

  const lang = (locale || "nl") as "nl" | "en";
  const title = career.title[lang];
  const subtitle = career.subtitle[lang];

  return {
    title,
    description: subtitle,
  };
}

export default async function CareerDetailPage({ params }: PageProps) {
  const { slug, locale: localeParam } = await params;
  const locale = localeParam || (await getLocale());
  const t = await getTranslations("careerGuide");

  const career = getCareerBySlug(slug);
  if (!career) notFound();

  const lang = locale as "nl" | "en";

  const categoryLabel = t(`categories.${career.category}`);
  const title = career.title[lang];
  const description = career.description[lang];
  const skills = career.skills[lang];
  const education = career.education[lang];
  const careerPath = career.careerPath[lang];
  const searchTitle = career.title.en; // always use English for search

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/career-guide"
            className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
          >
            {t("backToGuide")}
          </Link>
          <div className="flex items-start gap-4">
            <span className="text-5xl" role="img" aria-label={title}>
              {career.emoji}
            </span>
            <div>
              <Badge variant="secondary" className="mb-2">
                {categoryLabel}
              </Badge>
              <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {career.subtitle[lang]}
              </p>
            </div>
          </div>

          {/* Quick salary preview */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { label: t("entry"), value: career.salaryEntry },
              { label: t("mid"), value: career.salaryMid },
              { label: t("senior"), value: career.salarySenior },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-lg border border-border/60 bg-background p-3 text-center shadow-sm"
              >
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="mt-1 text-sm font-semibold text-primary">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* What does this role do? */}
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              {t("whatDoesItDo", { title })}
            </h2>
            <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              {description.split(". ").reduce<string[]>((acc, sentence, i, arr) => {
                // Group into paragraphs of ~2 sentences
                const idx = Math.floor(i / 2);
                if (!acc[idx]) acc[idx] = "";
                acc[idx] += (acc[idx] ? ". " : "") + sentence + (i < arr.length - 1 ? "" : "");
                return acc;
              }, []).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              {t("whatToLearn")}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* Skills card */}
              <Card className="border-border/60">
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{t("skills")}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-0.5 text-primary">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Education card */}
              <Card className="border-border/60">
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{t("education")}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {education}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Salary details */}
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              {t("salary")}
            </h2>
            <div className="mt-4 space-y-3">
              {[
                { label: t("entry"), value: career.salaryEntry, width: "60%" },
                { label: t("mid"), value: career.salaryMid, width: "75%" },
                { label: t("senior"), value: career.salarySenior, width: "100%" },
              ].map(({ label, value, width }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-36 flex-shrink-0 text-sm text-muted-foreground">
                    {label}
                  </div>
                  <div className="flex-1">
                    <div className="h-2 rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width }}
                      />
                    </div>
                  </div>
                  <div className="w-40 flex-shrink-0 text-right text-sm font-medium">
                    <span className="flex items-center justify-end gap-1">
                      <Euro className="h-3.5 w-3.5 text-primary" />
                      {value.replace("€", "")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {locale === "nl"
                ? "* Bruto maandsalaris indicaties voor de Nederlandse arbeidsmarkt."
                : "* Gross monthly salary indications for the Dutch labour market."}
            </p>
          </div>

          {/* Career path */}
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              {t("careerPath")}
            </h2>
            <Card className="mt-4 border-border/60">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {careerPath}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related vacancies CTA */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <h2 className="text-lg font-bold">{t("relatedVacancies")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("relatedVacanciesDesc", { title })}
            </p>
            <Link
              href={`/vacancies?search=${encodeURIComponent(searchTitle)}` as `/vacancies`}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("browseVacancies")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
