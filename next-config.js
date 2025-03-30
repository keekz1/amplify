// next.config.js
module.exports = {
    swcMinify: true,
    experimental: {
      optimizeCss: true,
      modularizeImports: {
        '@prisma/client': {
          transform: '@prisma/client/{{member}}',
          skipDefaultConversion: true,
        },
      },
    },
    webpack: (config) => {
      config.externals = [...config.externals, '@prisma/client'];
      return config;
    },
  };