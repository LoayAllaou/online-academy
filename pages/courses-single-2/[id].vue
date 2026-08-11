<template>
  <div class="main-content">
    <Header />
    <div class="content-wrapper js-content-wrapper dark-color-two">
      <PageLinks :dark="true" />
      <CourseDetailsTwo :id="id" />
      <CourseSlider />
      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Course Single 2 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import PageLinks from "@/components/common/PageLinks";

import CourseDetailsTwo from "@/components/courseSingle/CourseDetailsTwo";
import CourseSlider from "@/components/courseSingle/CourseSlider";
import FooterOne from "@/components/layout/footers/FooterOne";

import Header from "@/components/layout/headers/Header";
const route = useRoute();
const id = route.params.id;
</script>

<style lang="scss" scoped></style>
