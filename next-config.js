// next.config.js
module.exports = {
    webpack(config, { isServer }) {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          path: false,
          os: false,
        };
      }
  
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
    experimental: {
      optimizeCss: true,
    },
  };
  