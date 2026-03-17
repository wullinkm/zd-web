import { redirect } from "next/navigation";
import { getLogtoContext, getAccessTokenRSC } from "@logto/next/server-actions";
import { getTranslations } from "next-intl/server";
import { logtoConfig } from "@/lib/logto";
import { getCreditBalance } from "@/lib/api";
import { Credit } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { Coins, HelpCircle, ShoppingCart } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CreditsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("credits");

  const { isAuthenticated, claims, userInfo } = await getLogtoContext(logtoConfig, {
    fetchUserInfo: true,
  });

  if (!isAuthenticated) redirect(`/${locale}`);

  const roles = (userInfo?.roles as string[] | undefined) ?? (claims?.roles as string[] | undefined) ?? [];
  if (!roles.includes("employer")) redirect(`/${locale}/dashboard`);

  let credit: Credit | null = null;

  try {
    const token = await getAccessTokenRSC(
      logtoConfig,
      process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app"
    );
    credit = await getCreditBalance(token);
  } catch {
    // Token fetch failed
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Balance card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Coins className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-semibold">{t("balance")}</h2>
            </div>
            <div className="text-4xl font-bold text-primary">
              {credit?.balance ?? 0}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("balanceCount", { count: credit?.balance ?? 0 })}
            </p>
            {credit?.updated_at && (
              <p className="mt-2 text-xs text-muted-foreground">
                Last updated: {new Date(credit.updated_at).toLocaleDateString()}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Buy credits card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <ShoppingCart className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h2 className="font-semibold">{t("buyCredits")}</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{t("buyCreditsDesc")}</p>
            <Button asChild>
              <Link href="/contact">{t("contactUs")}</Link>
            </Button>
          </CardContent>
        </Card>

        {/* How it works */}
        <Card className="sm:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <HelpCircle className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h2 className="font-semibold">{t("howItWorks")}</h2>
            </div>
            <p className="text-sm text-muted-foreground">{t("howItWorksDesc")}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
