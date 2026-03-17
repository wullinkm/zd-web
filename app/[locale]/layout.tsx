import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { getLogtoContext } from "@logto/next/server-actions";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AuthButtons } from "@/components/auth/auth-buttons";
import { logtoConfig } from "@/lib/logto";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "ZD Jobs",
    template: "%s | ZD Jobs",
  },
  description: "Find your next career opportunity.",
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  let isEmployer = false;
  try {
    const { isAuthenticated, userInfo } = await getLogtoContext(logtoConfig, {
      fetchUserInfo: true,
    });
    if (isAuthenticated) {
      const roles = (userInfo?.roles as string[] | undefined) ?? [];
      isEmployer = roles.includes("employer");
    }
  } catch {
    // Auth check failed, not employer
  }

  return (
    <html lang={locale} className={cn("font-sans", geist.variable)}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header authSlot={<AuthButtons />} isEmployer={isEmployer} />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
