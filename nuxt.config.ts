export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  nitro: {
    experimental: {
      websocket: true
    }
  }
})