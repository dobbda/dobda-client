/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const webpack = require('webpack');

const prod = process.env.NODE_ENV === 'production';

module.exports = withPlugins([withBundleAnalyzer], {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  historyApiFallback: true,
  output: 'standalone',

  experimental: { fallbackNodePolyfills: false, scrollRestoration: 'manual' },
  inlineImageLimit: false,

  images: {
    domains: ['source.unsplash.com', 'joeschmoe.io', 'avatars.dicebear.com', 'dobda.s3.ap-northeast-2.amazonaws.com'],
  },
  rewrites: () => [
    {
      source: '/api/:path*',
      destination: `${prod ? process.env.API_KEY : process.env.API_KEY_DEV}/:path*`,
    },
    {
      source: '/admin',
      destination: `${prod ? process.env.API_KEY : process.env.API_KEY_DEV}/redirect/admin`,
    },
  ],
  redirects: () => [
    {
      source: '/questions/write',
      destination: '/',
      permanent: true,
    },
    {
      source: '/custom-project/write',
      destination: '/',
      permanent: true,
    },
    {
      source: '/user/:path*',
      destination: '/',
      permanent: true,
    },
  ],
  webpack(nextConfig, { dev }) {
    nextConfig.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    nextConfig.resolve.modules.push(__dirname);
    return {
      ...nextConfig,
      mode: prod ? 'production' : 'development',
    };
  },
});
