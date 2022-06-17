// next.config.js
// https://github.com/gregberge/svgr/issues/551#issuecomment-839772396
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc',"icon/svg"]
  },
  webpack(nextConfig) {
    nextConfig.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: ['@svgr/webpack'],
    });
    return nextConfig;
  },
};