// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true', // Only enable the analyzer if the environment variable is set
  });
  
  module.exports = withBundleAnalyzer({
    webpack(config, { isServer }) {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          path: false,
          os: false,
        };
      }
  
      // Add custom Webpack settings if needed
      return config;
    },
    experimental: {
      optimizeCss: true,
    },
  });
  