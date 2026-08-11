<template>
  <div class="main-content">
    <HeaderAuth />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <section class="form-page js-mouse-move-container">
        <AuthImageMove />
        <div class="mt40">
          <SignUpForm />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Sign Up ScaleUp - Academy",
  description:
    "Sign Up ScaleUp - Academy",
});
import HeaderAuth from "@/components/layout/headers/HeaderAuth";
import AuthImageMove from "@/components/others/AuthImageMove";

import SignUpForm from "@/components/others/SignUpForm";
</script>

<style lang="scss" scoped></style>
