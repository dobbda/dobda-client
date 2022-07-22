// next.config.js
// https://github.com/gregberge/svgr/issues/551#issuecomment-839772396
/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const api = process.env.API_URL
module.exports = withPlugins([],{
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', "icon/svg", "joeschmoe.io"]
  },

  async rewrites(){
      console.log('api: ', api)
      return [
        {
          source: "/fake/:path*",
          destination: `${api}/:path*`,
        },

      ];
  
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

