import { defineStore } from 'pinia'
import {jwtDecode} from 'jwt-decode'

// Define interface for JWT claims (no import needed)
interface JwtPayload {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string
  exp: number
  iss: string
  aud: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null as string | null,
    username: null as string | null,
    role: null as string | null,
    expiration: null as string | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async setAuthData(res: { token: string; expiration: string }) {

    this.token = res.token
    this.expiration = res.expiration

    // Decode JWT
    const decoded = jwtDecode<JwtPayload>(this.token)

    this.username =
      decoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ]

    this.role =
      decoded[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ]

    // Save user
    localStorage.setItem(
      'user',
      JSON.stringify(this.$state)
    )
  },


  async login(credentials: { email: string; password: string }) {

    this.loading = true
    this.error = null

    try {

      const config = useRuntimeConfig()

      const res = await $fetch<{
        token: string
        expiration: string
      }>(
        `${config.public.apiBase}/api/auth/login`,
        {
          method: 'POST',
          body: credentials,
        }
      )


      await this.setAuthData(res)


    } catch (err: any) {

      this.error =
        err?.data?.message ||
        err?.message ||
        'Login failed, try again.'

    } finally {

      this.loading = false

    }
  },


  async googleLogin(idToken: string) {

    this.loading = true
    this.error = null

    try {

      const config = useRuntimeConfig()

      const res = await $fetch<{
        token: string
        expiration: string
      }>(
        `${config.public.apiBase}/api/auth/google-login`,
        {
          method: 'POST',
          body: {
            idToken
          }
        }
      )


      await this.setAuthData(res)


    } catch (err: any) {

      this.error =
        err?.data?.message ||
        err?.message ||
        'Google login failed.'

    } finally {

      this.loading = false

    }
  },
    // async login(credentials: { email: string; password: string }) {
    //   this.loading = true
    //   this.error = null
    //   try {
    //     const config = useRuntimeConfig()

    //     const res: { token: string; expiration: string } = await $fetch(
    //       `${config.public.apiBase}/api/auth/login`,
    //       {
    //         method: 'POST',
    //         body: credentials,
    //       }
    //     )
    //     this.token = res.token
    //     this.expiration = res.expiration

    //     // Decode token
    //     const decoded = jwtDecode<JwtPayload>(this.token)

    //     this.username =
    //       decoded[
    //         'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
    //       ]
    //     this.role =
    //       decoded[
    //         'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    //       ]

    //     // Save to localStorage
    //     localStorage.setItem('user', JSON.stringify(this.$state))
    //   } catch (err: any) {
    //     this.error =
    //       err?.data?.message || err?.message || 'Login failed, try again.'
    //   } finally {
    //     this.loading = false
    //   }
    // },

    // async register(payload: {
    //   email: string
    //   password: string
    //   fullName: string
    //   role: string
    // }) {
    //   this.loading = true
    //   this.error = null
    //   try {
    //     const config = useRuntimeConfig()

    //     await $fetch(`${config.public.apiBase}/api/auth/register`, {
    //       method: 'POST',
    //       body: payload,
    //     })
    //     // optional: auto-login after register
    //     await this.login({
    //       email: payload.email,
    //       password: payload.password,
    //     })
    //   } catch (err: any) {
    //     this.error =
    //       err?.data?.message || err?.message || 'Registration failed.'
    //   } finally {
    //     this.loading = false
    //   }
    // },

    loadUserFromStorage() {
      const data = localStorage.getItem('user')
      if (data) {
        Object.assign(this, JSON.parse(data))
      }
    },

    logout() {
      this.token = null
      this.username = null
      this.role = null
      this.expiration = null
      localStorage.removeItem('user')
    },

    async userInfo() {
      try {
        const config = useRuntimeConfig()
        const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '').token : null;
        if (!token) {
          throw new Error('User is not authenticated');
        }
        const response = await $fetch(`${config.public.apiBase}/api/user/me`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        return response
      } catch (error) {
        return null
      }
    },

    async updateUserInfo(payload: {
      fullName?: string;
      phone?: string;
      birthday?: Date;
      country?: string;
  }) {
    try {
      const config = useRuntimeConfig()
      const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '').token : null;
      if (!token) {
        throw new Error('User is not authenticated');
      }
      const response = await $fetch(`${config.public.apiBase}/api/user/update`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: payload,
      })

      return response
    } catch (error) {
      return null
    }
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
  },
})
