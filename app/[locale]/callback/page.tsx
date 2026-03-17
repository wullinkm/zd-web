import { redirect } from "next/navigation";
import { handleSignIn } from "@logto/next/server-actions";
import { logtoConfig } from "@/lib/logto";

interface PageProps {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function CallbackPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const searchParamsObj = new URLSearchParams(params);

  await handleSignIn(logtoConfig, searchParamsObj);
  redirect("/");
}
