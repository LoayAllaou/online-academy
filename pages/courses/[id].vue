<template>
  <div className="main-content  ">
    <Header />
    <div className="content-wrapper  js-content-wrapper ">
      <PageLinks />
      <CourseDetailsOne :id="id" />
      <CourseSlider />
      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Course Single 1 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
const route = useRoute();
const id = route.params.id;

import PageLinks from "@/components/common/PageLinks";

import CourseDetailsOne from "@/components/courseSingle/CourseDetailsOne";
import CourseSlider from "@/components/courseSingle/CourseSlider";
import FooterOne from "@/components/layout/footers/FooterOne";

import Header from "@/components/layout/headers/Header";
</script>

<style lang="scss" scoped></style>
