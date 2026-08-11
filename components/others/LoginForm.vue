<template>
  <div class="form-page__content lg:py-50">
    <div class="container">
      <div class="row justify-center items-center">
        <div class="col-xl-6 col-lg-8">
          <div class="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
            <h3 class="text-30 lh-13">Login</h3>
            <p class="mt-10">
              Don't have an account yet?
              <nuxt-link to="/signup" class="text-purple-1">
                Sign up for free
              </nuxt-link>
            </p>

            <!-- FORM -->
            <form
              class="contact-form respondForm__form row y-gap-20 pt-30"
              @submit.prevent="handleSubmit"
            >
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Username Or Email</label>
                <input
                  required
                  type="text"
                  v-model="usernameOrEmail"
                  placeholder="Name"
                />
              </div>
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Password</label>
                <input
                  required
                  type="password"
                  v-model="password"
                  placeholder="Password"
                />
              </div>
              <div class="col-12">
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  class="button -md -green-1 text-dark-1 fw-500 w-1/1"
                  :disabled="userStore.loading"
                >
                  {{ userStore.loading ? 'Logging in...' : 'Login' }}
                </button>
              </div>
            </form>

            <!-- ERROR MESSAGE -->
            <div v-if="userStore.error" class="text-red-500 mt-4 text-center">
              {{ userStore.error }}
            </div>

            <div class="lh-12 text-dark-1 fw-500 text-center mt-20">
              Or sign in using
            </div>

            <div class="d-flex x-gap-20 items-center justify-between pt-20">
                    <!-- Google Login -->
   <GoogleLoginButton
  @success="googleSuccess"
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import GoogleLoginButton from "./GoogleLoginButton.vue"

const userStore = useUserStore()
const router = useRouter()

const usernameOrEmail = ref('')
const password = ref('')

const handleSubmit = async () => {
  await userStore.login({
    email: usernameOrEmail.value, // or username if your backend accepts it
    password: password.value,
  })

  if (userStore.isAuthenticated) {
    router.push('/') // redirect to home or dashboard after login
  }
}

const googleSuccess = () => {

  if(userStore.isAuthenticated)
  {
    router.push('/')
  }

}

</script>
