export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image","@pinia/nuxt"],
  image: {
    presets: {
      default: {
        modifiers: {
          format: "webp",
          loading: "lazy",
          quality: "100",
        },
      },
    },
  },
    app: {
    head: {
      script: [
        {
          src: "https://accounts.google.com/gsi/client",
          async: true,
          defer: true,
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:5000', // default
      googleClientId:
        "231309768199-3ujobnv26sn1uvbcs4gq271mblosrr1q.apps.googleusercontent.com",
    }
  }
});
