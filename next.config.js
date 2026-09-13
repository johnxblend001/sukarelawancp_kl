/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? '/sukarelawancp_kl' : ''),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
