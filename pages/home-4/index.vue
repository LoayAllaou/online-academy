<template>
  <div class="main-content">
    <HeaderFour />
  </div>
  <div class="content-wrapper js-content-wrapper overflow-hidden">
    <HeroFour />
    <Brands />
    <CategoriesFour />
    <CoursesFour />
    <LearningPath />
    <FeaturedCourses />
    <LandJob />
    <TestimonialsFour />
    <AchievementsTwo />
    <InstractorFour />
    <EventsFour />
    <LearningSelection />
    <FooterFour />
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Home 4 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import HeaderFour from "@/components/layout/headers/HeaderFour";
import HeroFour from "@/components/homes/heros/HeroFour";
import Brands from "@/components/common/Brands";

import CategoriesFour from "@/components/homes/categories/CategoriesFour";
import CoursesFour from "@/components/homes/courses/CoursesFour";
import LearningPath from "@/components/homes/LearningPath/LearningPath";
import FeaturedCourses from "@/components/homes/courses/FeaturedCourses";
import LandJob from "@/components/homes/landJob/LandJob";
import TestimonialsFour from "@/components/homes/testimonials/TestimonialsFour";
import AchievementsTwo from "@/components/homes/achievements/AchievementsTwo";
import InstractorFour from "@/components/homes/instractors/InstractorFour";
import EventsFour from "@/components/homes/events/EventsFour";
import LearningSelection from "@/components/homes/LearningSelection";
import FooterFour from "@/components/layout/footers/FooterFour";
</script>

<style lang="scss" scoped></style>
