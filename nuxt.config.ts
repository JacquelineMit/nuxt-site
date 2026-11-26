// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@morev/vue-transitions/nuxt"],
  css: ["~/assets/css/index.css"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  routeRules: {
    "/api/**": {
      proxy: "http://localhost:3001/**",
    },
  },
});
