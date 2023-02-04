/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
		localeDetection: false,
	},
	// time in seconds of no pages generating during static
	// generation before timing out
	// staticPageGenerationTimeout: 1000,
}

module.exports = nextConfig
