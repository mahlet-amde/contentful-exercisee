import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.ctfassets.net", "livedemo00.template-help.com"],
    remotePatterns: [
      {hostname:"livedemo00.template-help.com"},
      {hostname:"images.ctfassets.net"}
    ], 
    // loader: "custom",
  },
};

export default nextConfig;
