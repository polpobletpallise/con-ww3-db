import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/con-ww3-db",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
