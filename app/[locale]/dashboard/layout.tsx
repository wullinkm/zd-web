import { redirect } from "next/navigation";
import { getLogtoContext } from "@logto/next/server-actions";
import { getTranslations } from "next-intl/server";
import { logtoConfig } from "@/lib/logto";
import { Link } from "@/i18n/navigation";
import { LayoutDashboard, PlusCircle, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const { locale } = await params;
  const t = await getTranslations("dashboard");
  const { isAuthenticated, claims, userInfo } = await getLogtoContext(logtoConfig, {
    fetchUserInfo: true,
  });

  if (!isAuthenticated) {
    redirect(`/${locale}`);
  }

  const roles = (userInfo?.roles as string[] | undefined) ?? (claims?.roles as string[] | undefined) ?? [];
  const isEmployer = roles.includes("employer");

  if (!isEmployer) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">{t("accessDenied")}</h1>
        <p className="mt-2 text-muted-foreground">{t("accessDeniedDesc")}</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToSite")}
        </Link>
      </div>
    );
  }

  const navItems = [
    {
      href: `/${locale}/dashboard` as const,
      label: t("myVacancies"),
      icon: LayoutDashboard,
    },
    {
      href: `/${locale}/dashboard/new` as const,
      label: t("postNew"),
      icon: PlusCircle,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
            <div className="pt-4">
              <Link
                href="/"
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("backToSite")}
              </Link>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="lg:col-span-4">{children}</main>
      </div>
    </div>
  );
}
