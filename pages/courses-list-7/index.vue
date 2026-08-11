<template>
  <div class="main-content">
    <Header />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <PageLinks />
      <CourseListSeven />
      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Course List 7 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});

import PageLinks from "@/components/common/PageLinks";

import CourseListSeven from "@/components/courseList/CourseListSeven";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
</script>

<style lang="scss" scoped></style>
