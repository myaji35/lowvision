import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Disable image optimization for initial deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
