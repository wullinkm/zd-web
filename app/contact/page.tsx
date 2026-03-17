"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@zdjobs.nl", href: "mailto:info@zdjobs.nl" },
  { icon: Phone, label: "Phone", value: "+31 (0) 20 123 4567", href: "tel:+31201234567" },
  { icon: MapPin, label: "Address", value: "Amsterdam, Netherlands", href: null },
];

const faqs = [
  {
    q: "How do I post a job listing?",
    a: "Contact us via the form or email and we'll get you set up. We're working on self-service job posting for the near future.",
  },
  {
    q: "Is ZD Jobs free for job seekers?",
    a: "Yes! Browsing and applying to jobs is completely free for candidates. Always.",
  },
  {
    q: "How often are new jobs added?",
    a: "We add new listings daily. Jobs are sourced from verified employers across the Netherlands.",
  },
  {
    q: "Can I get notified about new jobs?",
    a: "Job alerts are coming soon. In the meantime, check back regularly for the latest openings.",
  },
];

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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Get in Touch</h1>
          <p className="mt-3 text-muted-foreground">
            Have a question or feedback? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-lg font-semibold">Send us a message</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-lg bg-primary/5 p-6 text-center">
                    <p className="font-semibold text-primary">Message sent!</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thanks for reaching out. We&apos;ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="you@example.com" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="What's this about?" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="Tell us more..."
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring"
                      />
                    </div>
                    <Button type="submit" size="lg">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold">Contact Information</h3>
                <div className="mt-4 space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                          >
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
                <h3 className="font-semibold">FAQ</h3>
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
