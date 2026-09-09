import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sapporo-driving-support',
  assetPrefix: '/sapporo-driving-support/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
