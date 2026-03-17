import { redirect } from "next/navigation";
import { getLogtoContext } from "@logto/next/server-actions";
import { getTranslations } from "next-intl/server";
import { logtoConfig } from "@/lib/logto";
import { Link } from "@/i18n/navigation";
import { LayoutDashboard, PlusCircle, ArrowLeft, Users, FileText, Star, Coins, User } from "lucide-react";
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

  const employerNavItems = [
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
    {
      href: `/${locale}/dashboard/candidates` as const,
      label: t("candidates"),
      icon: Users,
    },
    {
      href: `/${locale}/dashboard/applications` as const,
      label: t("applications"),
      icon: FileText,
    },
    {
      href: `/${locale}/dashboard/credits` as const,
      label: t("credits"),
      icon: Coins,
    },
  ];

  const seekerNavItems = [
    {
      href: `/${locale}/dashboard` as const,
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: `/${locale}/profile/edit` as const,
      label: t("editProfile"),
      icon: User,
    },
    {
      href: `/${locale}/dashboard/my-applications` as const,
      label: t("myApplications"),
      icon: Star,
    },
  ];

  const navItems = isEmployer ? employerNavItems : seekerNavItems;

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
