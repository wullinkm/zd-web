import { redirect } from "next/navigation";
import { getLogtoContext, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "@/lib/logto";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User, Mail, LogOut } from "lucide-react";

export const metadata = {
  title: "Profiel",
};

export default async function ProfilePage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated) {
    redirect("/");
  }

  const handleSignOut = async () => {
    "use server";
    await signOut(logtoConfig, process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="text-3xl font-bold">Profiel</h1>
      <p className="mt-1 text-muted-foreground">Beheer je accountgegevens</p>

      <Card className="mt-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{claims?.name || claims?.username || "Gebruiker"}</h2>
              {claims?.email && (
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Mail className="h-3.5 w-3.5" />
                  {String(claims.email)}
                </p>
              )}
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">User ID</span>
              <span className="font-mono text-xs">{claims?.sub}</span>
            </div>
            {claims?.username && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gebruikersnaam</span>
                <span className="font-medium">{String(claims.username)}</span>
              </div>
            )}
          </div>

          <Separator className="my-6" />

          <form action={handleSignOut}>
            <Button variant="outline" type="submit" className="gap-1.5">
              <LogOut className="h-4 w-4" />
              Uitloggen
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
