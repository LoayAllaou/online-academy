<template>
  <div class="main-content">
    <HeaderAuth />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <section class="form-page js-mouse-move-container">
        <AuthImageMove />
        <div class="mt-40">
          <LoginForm />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Login || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import HeaderAuth from "@/components/layout/headers/HeaderAuth";
import AuthImageMove from "@/components/others/AuthImageMove";
import LoginForm from "@/components/others/LoginForm";
</script>

<style lang="scss" scoped></style>
