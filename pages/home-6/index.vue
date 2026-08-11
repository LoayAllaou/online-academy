<template>
  <div class="main-content">
    <HeaderSix />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <HeroSix />
      <LearningPathSix />
      <CoursesSix />
      <Teachers />
      <CategoriesSix />
      <TestimonialsSix />
      <BrandsSix />
      <LearningPathsSix />
      <CountdownRegistration />
      <EventsSix />
      <BlogsTwo />
      <GetAppSix />
      <FooterThree />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Home 6 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import LearningPathSix from "@/components/common/LearningPathSix";
import HeroSix from "@/components/homes/heros/HeroSix";
import HeaderSix from "@/components/layout/headers/HeaderSix";
import CoursesSix from "@/components/homes/courses/CoursesSix";

import Teachers from "@/components/homes/instractors/Teachers";
import CategoriesSix from "@/components/homes/categories/CategoriesSix";
import TestimonialsSix from "@/components/homes/testimonials/TestimonialsSix";
import BrandsSix from "@/components/homes/brands/BrandsSix";
import LearningPathsSix from "@/components/homes/LearningPath/LearningPathsSix";
import CountdownRegistration from "@/components/homes/CountdownRegistration";
import EventsSix from "@/components/homes/events/EventsSix";
import BlogsTwo from "@/components/homes/blogs/BlogsTwo";
import GetAppSix from "@/components/homes/getApp/GetAppSix";
import FooterThree from "@/components/layout/footers/FooterThree";
</script>

<style lang="scss" scoped></style>
