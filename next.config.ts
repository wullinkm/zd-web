import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Ensure static assets are served correctly in standalone mode
  experimental: {
    // Copy static files into standalone output
  },
};

export default nextConfig;
