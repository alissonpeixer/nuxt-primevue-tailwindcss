export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "nuxt-primevue"],
  primevue: {
    importPT: { as: 'Lara', from: __dirname+'/presets/lara/' },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
  },
  css: ['primevue/resources/themes/lara-dark-green/theme.css','~/assets/css/main.css']

})