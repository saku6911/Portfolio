const path = require("path");

const withBundleAnalyzer =
	process.env.ANALYZE === "true"
		? require("@next/bundle-analyzer")({
				enabled: true,
			})
		: (config) => config;

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.microcms-assets.io",
				port: "",
			},
		],
	},
	env: {
		API_KEY: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
		API_DOMAIN: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "src/styles")],
		additionalData: ` @use 'variables' as *;`,
	},
});
