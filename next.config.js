/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
var path = require('path');
const prod = process.env.NODE_ENV === 'production';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([withBundleAnalyzer], {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  historyApiFallback: true,
  output: 'standalone',
  images: {
    domains: ['source.unsplash.com', 'joeschmoe.io', 'avatars.dicebear.com'],
  },
  experimental: { fallbackNodePolyfills: false, scrollRestoration: 'manual' },
  inlineImageLimit: false,

  rewrites: () =>
    (process.env.API_KEY_DEV || process.env.API_KEY) && prod
      ? [
          {
            source: '/api/:path*',
            destination: `${process.env.API_KEY}/:path*`,
          },
        ]
      : [
          {
            source: '/api/:path*',
            destination: `${process.env.API_KEY_DEV}/:path*`,
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
    return {
      ...nextConfig,
      devtool: prod ? 'hidden-source-map' : 'eval',
    };
  },
});
