/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.jsdelivr.net', 'cdnjs.cloudflare.com'],
    unoptimized: true,
    path: process.env.NODE_ENV === "production" ? "/resume/_next/image" : "/_next/image",
    remotePatterns: []
  },
  output: 'export',
  basePath: process.env.NODE_ENV === "production" ? "/resume" : "",
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/resume" : ""
};

module.exports = nextConfig;