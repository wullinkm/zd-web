import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "@/lib/logto";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { User, LogIn, LayoutDashboard } from "lucide-react";
import { getLocale } from "next-intl/server";

export async function AuthButtons() {
  const { isAuthenticated, claims, userInfo } = await getLogtoContext(logtoConfig, {
    fetchUserInfo: true,
  });
  const locale = await getLocale();

  if (isAuthenticated) {
    const roles = (userInfo?.roles as string[] | undefined) ?? (claims?.roles as string[] | undefined) ?? [];
    const isEmployer = roles.includes("employer");

    return (
      <div className="flex items-center gap-1">
        {isEmployer && (
          <Button variant="ghost" size="sm" asChild className="gap-1.5">
            <Link href={`/${locale}/dashboard`}>
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          </Button>
        )}
        <Button variant="ghost" size="sm" asChild className="gap-1.5">
          <Link href="/profile">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">{claims?.name || claims?.username || "Profiel"}</span>
          </Link>
        </Button>
      </div>
    );
  }

  const handleSignIn = async () => {
    "use server";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    await signIn(logtoConfig, {
      redirectUri: `${baseUrl}/callback`,
    });
  };

  return (
    <form action={handleSignIn}>
      <Button variant="outline" size="sm" type="submit" className="gap-1.5">
        <LogIn className="h-4 w-4" />
        <span className="hidden sm:inline">Inloggen</span>
      </Button>
    </form>
  );
}
