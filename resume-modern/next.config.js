/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.jsdelivr.net', 'cdnjs.cloudflare.com'],
    unoptimized: true
  },
  output: 'export',
  basePath: process.env.NODE_ENV === "production" ? "/resume" : "",
  trailingSlash: true
};

module.exports = nextConfig;