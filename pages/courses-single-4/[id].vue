<template>
  <div class="main-content">
    <Header />
    <div class="content-wrapper js-content-wrapper">
      <PageLinks />
      <CourseDetailsFour :id="id" />
      <CourseSlider />
      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Course Single 5 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import PageLinks from "@/components/common/PageLinks";

import CourseDetailsFour from "@/components/courseSingle/CourseDetailsFour";

import CourseSlider from "@/components/courseSingle/CourseSlider";
import FooterOne from "@/components/layout/footers/FooterOne";

import Header from "@/components/layout/headers/Header";

const route = useRoute();
const id = route.params.id;
</script>

<style lang="scss" scoped></style>
