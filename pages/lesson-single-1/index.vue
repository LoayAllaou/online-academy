<template>
  <div class="main-content">
    <HeaderTen />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <LessonItems />
      <section class="layout-pt-lg layout-pb-lg lg:pt-40">
        <div class="container">
          <div class="row justify-end">
            <div class="col-xxl-8 col-xl-7 col-lg-8">
              <Video />

              <Descriptions />
              <Reviews />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Lesson Single 1 || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import Descriptions from "@/components/aboutCourses/lesson/Descriptions";
import LessonItems from "@/components/aboutCourses/lesson/LessonItems";
import Reviews from "@/components/aboutCourses/lesson/Reviews";
import Video from "@/components/aboutCourses/lesson/Video";
import HeaderTen from "@/components/layout/headers/HeaderTen";
</script>

<style lang="scss" scoped></style>
