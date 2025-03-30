const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    staticPageGenerationTimeout: 360,
    experimental: {
      optimizeCss: true,
      swcMinifyDebugOptions: {
        compress: {
          defaults: true,
          drop_console: true,
        },
      },
      workerThreads: false,
    },
    webpack: (config, { isServer, dev }) => {
      // Limit parallel processing
      config.parallelism = isServer ? 2 : 4;
      
      // Improve filesystem caching
      if (!dev) {
        config.cache = {
          type: 'filesystem',
          buildDependencies: {
            config: [__filename],
          },
        };
      }
  
      // Exclude heavy modules from client bundle
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          path: false,
          os: false,
          module: false,
          perf_hooks: false,
        };
      }
  
      // Split prisma client
      config.externals.push('@prisma/client');
  
      return config;
    },
    eslint: {
      ignoreDuringBuilds: true, 
    },
  });