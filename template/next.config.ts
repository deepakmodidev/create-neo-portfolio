import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
      {
        protocol: "https",
        hostname: "hits.sh",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
