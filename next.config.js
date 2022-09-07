/** @type {import('next').NextConfig} */
const { config } = require('dotenv');
const withPlugins = require('next-compose-plugins');
const API_URL = process.env.API_URL;
const prod = process.env.NODE_ENV === 'production';
console.log(prod);
module.exports = withPlugins([], {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  historyApiFallback: true,
  output: 'standalone',
  images: {
    domains: ['icon/svg', 'joeschmoe.io', 'avatars.dicebear.com'],
  },

  rewrites: () =>
    (process.env.API_DOCKER_URL || process.env.API_URL) && prod
      ? [
          {
            source: '/api/:path*',
            destination: `${process.env.API_DOCKER_URL}/:path*`,
          },
        ]
      : [
          {
            source: '/api/:path*',
            destination: `${process.env.API_URL}/:path*`,
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
