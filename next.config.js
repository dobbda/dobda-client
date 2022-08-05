
/** @type {import('next').NextConfig} */
const { config } = require('dotenv');
const withPlugins = require("next-compose-plugins");
const API_URL = process.env.API_URL
const prod = process.env.NODE_ENV === 'production'
module.exports = withPlugins([], {
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	images: {
		domains: ["icon/svg", "joeschmoe.io", "avatars.dicebear.com"]
	},

	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `${API_URL}/:path*`,
			},
		];
	},
	webpack(nextConfig, { dev }) {
		if (dev) {
			nextConfig.devtool = 'cheap-module-source-map';
		}else {
			nextConfig.devtool = 'hidden-source-map';
		}

		nextConfig.module.rules.push({
			test: /\.svg$/,
			issuer: { and: [/\.(js|ts|md)x?$/] },
			use: [{
				loader: '@svgr/webpack',
			}]
		});
		return {
			...nextConfig
		};
	},
});

