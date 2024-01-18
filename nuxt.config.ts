// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        charset: 'utf-16',
        viewport: 'width=device-width, initial-scale=1',
        title: 'SAPA BTN',
        meta: [
        // <meta name="description" content="My amazing site">
            { name: 'description', content: 'Pusat informasi promo & program di bank BTN' }
        ],
    },
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-headlessui',
    '@nuxt/image',
    'nuxt-icon',
    '@vueuse/motion/nuxt'
],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  headlessui: {
    prefix: 'Headless'
  },
})
