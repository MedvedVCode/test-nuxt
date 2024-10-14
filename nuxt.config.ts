// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	alias: {
			assets: '/<rootDir>/assets'
	},
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	typescript: {
		strict: false
	},

	css: ['~/assets/main.scss'],
	modules: ['@nuxtjs/tailwindcss'],
})