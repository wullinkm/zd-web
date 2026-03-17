import { useTranslations } from "next-intl";
import { Briefcase, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                ZD<span className="text-primary">Jobs</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">{t("tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vacancies" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t("browseJobs")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">{t("forEmployers")}</h3>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">{t("postJob")}</span></li>
              <li><span className="text-sm text-muted-foreground">{t("pricing")}</span></li>
              <li><span className="text-sm text-muted-foreground">{t("enterprise")}</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">{t("getInTouch")}</h3>
            <a href="mailto:info@zdjobs.nl" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Mail className="h-4 w-4" />
              info@zdjobs.nl
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {t("rights", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground">{t("privacy")}</span>
            <span className="text-xs text-muted-foreground">{t("terms")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
