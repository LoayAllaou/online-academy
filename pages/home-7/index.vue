<template>
  <div clsss="main-content">
    <HeaderSeven />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <HeroSeven />
      <CoursesSeven />
      <InstractorSeven />
      <FindCourse />
      <LearningPathSeven />
      <LearningJourney />
      <Testimonials backgroundComponent="white" />
      <EventsSeven />
      <Pricing />
      <Brands />
      <Statictis />
      <CategoriesSeven />
      <FooterSeven />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Home 7 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import FindCourse from "@/components/homes/FindCourse";
import LearningJourney from "@/components/common/LearningJourney";
import LearningPathSeven from "@/components/homes/LearningPath/LearningPathSeven";

import Statictis from "@/components/homes/Statistics/Statictis";

import Brands from "@/components/common/Brands";

import CategoriesSeven from "@/components/homes/categories/CategoriesSeven";
import CoursesSeven from "@/components/homes/courses/CoursesSeven";
import EventsSeven from "@/components/homes/events/EventsSeven";
import HeroSeven from "@/components/homes/heros/HeroSeven";
import InstractorSeven from "@/components/homes/instractors/InstractorSeven";
import Pricing from "@/components/common/Pricing";
import Testimonials from "@/components/homes/testimonials/Testimonials";
import FooterSeven from "@/components/layout/footers/FooterSeven";
import HeaderSeven from "@/components/layout/headers/HeaderSeven";
</script>

<style lang="scss" scoped></style>
