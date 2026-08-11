<template>
  <div class="main-content">
    <Header />

    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <PageLinks />
      <InatractorsTwo />
      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Instractor List 2 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import InatractorsTwo from "@/components/aboutCourses/instractors/InatractorsTwo";
import PageLinks from "@/components/common/PageLinks";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
</script>

<style lang="scss" scoped></style>
