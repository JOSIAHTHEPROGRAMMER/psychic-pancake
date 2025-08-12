import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["x.com", "pbs.twimg.com", 
      "www.trumpstore.com", "www.whitehouse.gov", 
      "instagram.com", "images.pexels.com"], 
  },
};

export default nextConfig;
