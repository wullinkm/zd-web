import { useTranslations } from "next-intl";
import { Search, Send, PartyPopper, Target, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Over ons",
};

export default function AboutPage() {
  const t = useTranslations("about");

  const steps = [
    { icon: Search, step: "01", title: t("step01"), description: t("step01Desc") },
    { icon: Send, step: "02", title: t("step02"), description: t("step02Desc") },
    { icon: PartyPopper, step: "03", title: t("step03"), description: t("step03Desc") },
  ];

  const values = [
    { icon: Target, title: t("quality"), description: t("qualityDesc") },
    { icon: Heart, title: t("people"), description: t("peopleDesc") },
    { icon: Shield, title: t("trust"), description: t("trustDesc") },
  ];

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

      {/* How it Works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">{t("howItWorks")}</h2>
          <p className="mt-2 text-muted-foreground">{t("howItWorksSubtitle")}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Stap {step.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">{t("values")}</h2>
            <p className="mt-2 text-muted-foreground">{t("valuesSubtitle")}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="border-0 bg-background shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="text-xl font-medium italic text-muted-foreground sm:text-2xl">
            &ldquo;{t("quote")}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-medium text-primary">{t("quoteAuthor")}</p>
        </div>
      </section>
    </div>
  );
}
