<template>
  <div class="main-content">
    <HeaderTen />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <section class="layout-pt-lg layout-pb-lg lg:pt-40 lg:order-1">
        <div class="container">
          <div class="row justify-start marginCustom">
            <div class="col-xxl-8 col-xl-7 col-lg-8">
              <VideoTwo />

              <Descriptions />
              <Reviews />
            </div>
          </div>
        </div>
      </section>
      <LessonItems :rightPosition="true" />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Lesson Single 2 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import Descriptions from "@/components/aboutCourses/lesson/Descriptions";
import LessonItems from "@/components/aboutCourses/lesson/LessonItems";
import Reviews from "@/components/aboutCourses/lesson/Reviews";
import VideoTwo from "@/components/aboutCourses/lesson/VideoTwo";
import HeaderTen from "@/components/layout/headers/HeaderTen";
</script>

<style lang="scss" scoped></style>
