import { handleSignIn } from "@logto/next/server-actions";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { logtoConfig } from "@/lib/logto";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  await handleSignIn(logtoConfig, url);
  redirect("/");
}
