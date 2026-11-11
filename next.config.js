/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/the-click-gap',
  reactStrictMode: true,
  outputFileTracingRoot: undefined,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
