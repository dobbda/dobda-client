// next.config.js
// https://github.com/gregberge/svgr/issues/551#issuecomment-839772396
/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([],{
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', "icon/svg", "joeschmoe.io"]
  },
  webpack(nextConfig,{webpack}) {
    nextConfig.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [{
        loader:'@svgr/webpack',
        // options:{
        //   icon:true,
        // }
    }]

      
    });
    return nextConfig;
  },
});

// const withSvgr = require('next-plugin-svgr');

// module.exports = withPlugins(
//   [withSvgr,
//     withImages,{
//       unoptimized: true,
//       loader: 'imgix'
//     }],{
//   reactStrictMode: true,
//   images: {
//     domains: ['i.pravatar.cc', "localhost", "joeschmoe.io"]
//   },
//   webpack(nextConfig) {
//     // nextConfig.module.rules.push({
//     //   test: /\.svg$/i,
//     //   issuer: { and: [/\.(js|ts|md)x?$/] },
//     //   use: ['@svgr/webpack']

      
//     // });
//     return nextConfig;
//   },
// });