/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Set to true for new /app structure for nextjs13
    appDir: true
  },
  images: {
    domains: ['raw.githubusercontent.com']
  }
};

module.exports = nextConfig;
