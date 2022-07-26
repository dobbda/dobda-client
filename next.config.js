// next.config.js
// https://github.com/gregberge/svgr/issues/551#issuecomment-839772396
/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const apiUrl = process.env.API_URL
module.exports = withPlugins([],{
  reactStrictMode: true,
  images: {
    domains: ["icon/svg", "joeschmoe.io","avatars.dicebear.com"]
  },

  async rewrites(){
      return [
        {
          source: "/api/:path*",
          destination: `${apiUrl}/:path*`,
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

