<template>
  <div className="main-content  ">
    <Header />
    <div className="content-wrapper  js-content-wrapper overflow-hidden">
      <PageLinks />
      <CourseListThree />
      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Course List 3 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});

import PageLinks from "@/components/common/PageLinks";

import CourseListThree from "@/components/courseList/CourseListThree";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
</script>

<style lang="scss" scoped></style>
