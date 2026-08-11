import { defineStore } from 'pinia'
import { useRuntimeConfig } from '#app'

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchCategories() {
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await $fetch(`${config.public.apiBase}/api/Category`) // your backend endpoint
        console.log('Fetched categories:', response)
        this.categories = response
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    }
  }
})
