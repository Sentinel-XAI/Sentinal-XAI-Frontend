/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add any external domains if needed
    unoptimized: process.env.NODE_ENV !== 'production',
  },
}

module.exports = nextConfig 