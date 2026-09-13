/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/sukarelawancp_kl' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
