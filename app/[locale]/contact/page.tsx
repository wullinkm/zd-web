"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium hover:text-primary transition-colors"
      >
        {q}
        <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Mail, label: t("emailLabel"), value: "info@zdjobs.nl", href: "mailto:info@zdjobs.nl" },
    { icon: Phone, label: t("phone"), value: "+31 (0) 20 123 4567", href: "tel:+31201234567" },
    { icon: MapPin, label: t("address"), value: "Amsterdam, Netherlands", href: null },
  ];

  const faqs = [
    { q: t("faq1q"), a: t("faq1a") },
    { q: t("faq2q"), a: t("faq2a") },
    { q: t("faq3q"), a: t("faq3a") },
    { q: t("faq4q"), a: t("faq4a") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">{t("title")}</h1>
          <p className="mt-3 text-muted-foreground">{t("subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-lg font-semibold">{t("formTitle")}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{t("formSubtitle")}</p>

                {submitted ? (
                  <div className="mt-8 rounded-lg bg-primary/5 p-6 text-center">
                    <p className="font-semibold text-primary">{t("sent")}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t("sentMessage")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                          {t("name")}
                        </label>
                        <Input id="name" placeholder={t("namePlaceholder")} required />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                          {t("email")}
                        </label>
                        <Input id="email" type="email" placeholder={t("emailPlaceholder")} required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                        {t("subject")}
                      </label>
                      <Input id="subject" placeholder={t("subjectPlaceholder")} required />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                        {t("message")}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder={t("messagePlaceholder")}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring"
                      />
                    </div>
                    <Button type="submit" size="lg">{t("send")}</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold">{t("info")}</h3>
                <div className="mt-4 space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold">{t("faq")}</h3>
                <Separator className="my-3" />
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
