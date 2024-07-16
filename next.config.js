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
		API_KEY: process.env.API_KEY,
		API_DOMAIN: process.env.API_DOMAIN,
		RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "src/styles")],
		additionalData: ` @use 'variables' as *;`,
	},
});
