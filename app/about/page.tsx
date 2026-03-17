import { Search, Send, PartyPopper, Target, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About",
  description: "Learn more about ZD Jobs and our mission to connect talent with opportunity.",
};

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search",
    description: "Browse hundreds of curated job listings from top companies. Use filters to find exactly what you're looking for.",
  },
  {
    icon: Send,
    step: "02",
    title: "Apply",
    description: "Found your dream role? Apply directly with one click. No complicated forms, no friction.",
  },
  {
    icon: PartyPopper,
    step: "03",
    title: "Get Hired",
    description: "Connect with employers and start your next chapter. We're with you every step of the way.",
  },
];

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We verify every listing to ensure you only see real, quality opportunities. No spam, no clutter.",
  },
  {
    icon: Heart,
    title: "People Centered",
    description: "Behind every job search is a person with aspirations. We build for you, not for metrics.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Clear job descriptions, honest salary ranges, and verified employers. What you see is what you get.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Connecting Talent with{" "}
            <span className="text-primary">Opportunity</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            ZD Jobs is on a mission to make job searching simple, transparent, and effective. 
            We believe everyone deserves to find work they love.
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">How It Works</h2>
          <p className="mt-2 text-muted-foreground">Three simple steps to your next role</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Step {step.step}
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
            <h2 className="text-2xl font-bold sm:text-3xl">Our Values</h2>
            <p className="mt-2 text-muted-foreground">What drives us every day</p>
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

      {/* Mission Statement */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="text-xl font-medium italic text-muted-foreground sm:text-2xl">
            &ldquo;We believe that finding meaningful work shouldn&apos;t be a full-time job in itself.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-medium text-primary">— The ZD Jobs Team</p>
        </div>
      </section>
    </div>
  );
}
