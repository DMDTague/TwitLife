import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://twitlife-production.up.railway.app/api/:path*',
      },
      {
        source: '/ws/:path*',
        destination: 'wss://twitlife-production.up.railway.app/ws/:path*',
      },
    ];
  },
};

export default nextConfig;
