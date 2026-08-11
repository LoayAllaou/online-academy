import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ar from '../locales/ar.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false, // Use composition API
    globalInjection: true,
    locale: 'en', // default language
    fallbackLocale: 'en',
    messages: {
        en,
        ar
      }
  })

  nuxtApp.vueApp.use(i18n)
})
