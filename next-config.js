// next.config.js
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const isProdBuild = phase === PHASE_PRODUCTION_BUILD;
  
  return {
    swcMinify: true,
    compress: true,
    experimental: {
      optimizeCss: true,
      swcTraceProfiling: isProdBuild,
      memoryWorkers: true,
      workerThreads: false,
      optimizePackageImports: [
        '@prisma/client',
        'react-icons'
      ],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = { 
          ...config.resolve.fallback,
          fs: false,
          tls: false,
          net: false,
          perf_hooks: false
        };
      }
      
      config.externals.push({
        '@prisma/client': 'commonjs2 @prisma/client',
        'prisma': 'commonjs2 prisma'
      });

      config.cache = {
        type: 'filesystem',
        maxMemoryGenerations: 1,
        buildDependencies: {
          config: [__filename]
        }
      };

      return config;
    }
  };
};