import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "otherassets.blob.core.windows.net",
        pathname: "/mediovate/**",
      },
    ],
  },
};

export default nextConfig;
