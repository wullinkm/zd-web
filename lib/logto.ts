import type { LogtoNextConfig } from "@logto/next";

export const logtoConfig: LogtoNextConfig = {
  endpoint: process.env.LOGTO_ENDPOINT || "https://auth.zowerk.nl",
  appId: process.env.LOGTO_APP_ID || "",
  appSecret: process.env.LOGTO_APP_SECRET || "",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  cookieSecret: process.env.LOGTO_COOKIE_SECRET || "oWAQBqSt360k13I4oR3wzwYo7puWuxE0",
  cookieSecure: process.env.NODE_ENV === "production",
};
