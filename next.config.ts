import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
