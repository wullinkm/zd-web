"use client";

import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, useRouter } from "@/i18n/navigation";

interface HeaderProps {
  authSlot?: ReactNode;
  isEmployer?: boolean;
}

export function Header({ authSlot, isEmployer = false }: HeaderProps) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/" as const, label: t("home") },
    { href: "/vacancies" as const, label: t("jobs") },
    { href: "/about" as const, label: t("about") },
    { href: "/contact" as const, label: t("contact") },
    ...(isEmployer ? [{ href: "/dashboard" as const, label: "Dashboard" }] : []),
  ];

  const switchLocale = () => {
    const newLocale = locale === "nl" ? "en" : "nl";
    const pathWithoutLocale = pathname.replace(/^\/(nl|en)/, "") || "/";
    router.replace(pathWithoutLocale as "/" | "/vacancies" | "/about" | "/contact", { locale: newLocale });
  };

  const isActive = (href: string) => {
    const path = pathname.replace(/^\/(nl|en)/, "") || "/";
    return path === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Briefcase className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            ZD<span className="text-primary">Jobs</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" onClick={switchLocale} className="gap-1.5">
            <Globe className="h-4 w-4" />
            {locale === "nl" ? "EN" : "NL"}
          </Button>
          {authSlot}
          <Button asChild>
            <Link href="/vacancies">{t("findJobs")}</Link>
          </Button>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={switchLocale}>
            <Globe className="h-4 w-4" />
          </Button>
          {authSlot}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2 text-base font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/vacancies" onClick={() => setOpen(false)}>
                    {t("findJobs")}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
