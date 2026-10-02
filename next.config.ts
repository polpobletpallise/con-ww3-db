import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/con-ww3-db",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
