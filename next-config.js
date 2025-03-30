/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,  // Ensure this is enabled
  },
}

module.exports = nextConfig;
