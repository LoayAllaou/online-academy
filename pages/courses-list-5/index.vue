<template>
  <div className="main-content  ">
    <Header />
    <div className="content-wrapper  js-content-wrapper overflow-hidden">
      <PageLinks />
      <CourseListFive />
      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Course List 5 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});

import PageLinks from "@/components/common/PageLinks";

import CourseListFive from "@/components/courseList/CourseListFive";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
</script>

<style lang="scss" scoped></style>
