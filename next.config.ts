import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    domains: ["images.ctfassets.net", "livedemo00.template-help.com"],
    remotePatterns: [
      {hostname:"livedemo00.template-help.com"},
      {
        hostname:"images.ctfassets.net"},
      {hostname:"i.vimeocdn.com"},
      {hostname:"assets.ctfassets.net"}
      
    ], 
    // loader: "custom",
  },
};

export default nextConfig;
