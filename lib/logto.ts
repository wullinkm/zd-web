import type { LogtoNextConfig } from "@logto/next";

export const logtoConfig: LogtoNextConfig = {
  endpoint: process.env.LOGTO_ENDPOINT!,
  appId: process.env.LOGTO_APP_ID!,
  appSecret: process.env.LOGTO_APP_SECRET!,
  cookieSecure: process.env.NODE_ENV === "production",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
};
