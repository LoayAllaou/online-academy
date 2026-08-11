<template>
  <div class="main-content">
    <HeaderFive />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <HeroFive />
      <BrandsTwo />
      <CoursesFive />
      <CategoriesFive />
      <Instructors backgroundColor="bg-beige-1" />
      <StudentsFive />
      <LearningPathFive />
      <Pricing />
      <GetAppFive />
      <BlogsFive />
      <RecomentationFive />
      <FooterFive />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Home 5 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});

import BrandsTwo from "@/components/homes/brands/BrandsTwo";
import HeroFive from "@/components/homes/heros/HeroFive";
import HeaderFive from "@/components/layout/headers/HeaderFive";
import CoursesFive from "@/components/homes/courses/CoursesFive";

import CategoriesFive from "@/components/homes/categories/CategoriesFive";
import Instructors from "@/components/common/Instructors";
import StudentsFive from "@/components/homes/students/StudentsFive";
import LearningPathFive from "@/components/common/LearningCommon";
import Pricing from "@/components/homes/pricing/Pricing";

import GetAppFive from "@/components/homes/getApp/GetAppFive";
import BlogsFive from "@/components/homes/blogs/BlogsFive";
import RecomentationFive from "@/components/homes/LearningRecomentation/RecomentationFive";
import FooterFive from "@/components/layout/footers/FooterFive";
</script>

<style lang="scss" scoped></style>
