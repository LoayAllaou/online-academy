<template>
  <section class="layout-pt-lg layout-pb-lg bg-dark-5">
    <div class="container">
      <div
        class="row y-gap-50 justify-between items-center"
        data-aos="fade-right"
      
      >
        <div class="col-xl-3 col-lg-4">
          <div class="sectionTitle -light">
            <h2 class="sectionTitle__title">Featured Courses</h2>
            <p class="sectionTitle__text">
              Hand-picked Instructor and expertly crafted courses, designed for
              the modern students and entrepreneur.
            </p>
          </div>

          <div class="d-inline-block mt-60 lg:mt-25">
            <nuxt-link
              to="/courses-list-2"
              class="button -icon -purple-1 text-white"
            >
              Browse All Courses
              <i class="icon-arrow-top-right text-13 ml-10"></i>
            </nuxt-link>
          </div>
        </div>

        <FeaturedCourseCard
          v-for="(elm, i) in coursesData.slice(0, 2)"
          :key="i"
          :data="elm"
          :index="i"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { coursesData } from "@/data/courses";
import FeaturedCourseCard from "@/components/homes/courseCards/FeaturedCourseCard";
</script>
