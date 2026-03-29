/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === "production" ? "/resume" : "",
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/resume" : ""
};

module.exports = nextConfig;