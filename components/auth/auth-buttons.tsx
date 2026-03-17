import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "@/lib/logto";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { User, LogIn } from "lucide-react";

export async function AuthButtons() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (isAuthenticated) {
    return (
      <Button variant="ghost" size="sm" asChild className="gap-1.5">
        <Link href="/profile">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">{claims?.name || claims?.username || "Profiel"}</span>
        </Link>
      </Button>
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
