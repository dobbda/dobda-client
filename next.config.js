// next.config.js
// https://github.com/gregberge/svgr/issues/551#issuecomment-839772396
/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([],{
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', "icon/svg", "joeschmoe.io"]
  },
  async rewrites(){
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          source: process.env.SOURCE_PATH,
          destination: process.env.DESTINATION_URL,
        },
      ];
    }
    else {
      return [
        {
          source: process.env.SOURCE_PATH,
          destination: process.env.DESTINATION_URL,
        },
      ];
    }
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

