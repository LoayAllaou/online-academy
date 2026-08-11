<template>
  <div class="main-content">
    <Header />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <PageLinks />
      <InstractorSingle :id="id" />
      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Instractors || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import InstractorSingle from "@/components/aboutCourses/instractors/InstractorSingle";
import PageLinks from "@/components/common/PageLinks";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
const route = useRoute();
const id = route.params.id;
</script>

<style lang="scss" scoped></style>
