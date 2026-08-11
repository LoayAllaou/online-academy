<template>
  <div class="form-page__content lg:py-50">
    <div class="container">
      <div class="row justify-center items-center">
        <div class="col-xl-8 col-lg-9">
          <div class="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
            <h3 class="text-30 lh-13">Sign Up</h3>
            <p class="mt-10">
              Already have an account?
              <nuxt-link to="/login" class="text-purple-1">Log in</nuxt-link>
            </p>

            <form class="contact-form respondForm__form row y-gap-20 pt-30" @submit.prevent="handleSubmit">
              <div class="col-lg-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Email address *</label>
                <input required type="text" v-model="email" placeholder="Email address" />
              </div>
              <div class="col-lg-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Username *</label>
                <input required type="text" v-model="username" placeholder="Username" />
              </div>
              <div class="col-lg-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Password *</label>
                <input required type="password" v-model="password" placeholder="Password" />
              </div>
              <div class="col-lg-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Confirm Password *</label>
                <input required type="password" v-model="confirmPassword" placeholder="Confirm Password" />
              </div>

              <div class="col-12">
                <button type="submit" class="button -md -green-1 text-dark-1 fw-500 w-1/1" :disabled="loading">
                  <span v-if="loading">Registering...</span>
                  <span v-else>Register</span>
                </button>
              </div>

              <div v-if="error" class="col-12 text-red-500 mt-2">{{ error }}</div>
            </form>

            <div class="lh-12 text-dark-1 fw-500 text-center mt-20">
              Or sign in using
            </div>

<div class="d-flex justify-center pt-20">
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
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "~/stores/userStore"
import { useI18n } from 'vue-i18n'
import GoogleLoginButton from "./GoogleLoginButton.vue"
const { t } = useI18n()

const router = useRouter()
const userStore = useUserStore()

const email = ref("")
const username = ref("")
const password = ref("")
const confirmPassword = ref("")

const loading = ref(false)
const error = ref<string | null>(null)

const handleSubmit = async () => {
  error.value = null

  if (password.value !== confirmPassword.value) {
    error.value = "Passwords do not match"
    return
  }

  loading.value = true
  try {
    await userStore.register({
      email: email.value,
      fullName: username.value,
      password: password.value,
      role: "Student"
    })

    // Redirect after successful registration
    router.push("/login")
  } catch (err: any) {
    error.value = err?.message || "Registration failed"
  } finally {
    loading.value = false
  }
}

const googleSuccess = () => {

  if(userStore.isAuthenticated)
  {
    router.push('/')
  }

}



</script>
