<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Bookmarks</h1>
          <div class="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
      </div>

      <div class="row y-gap-30">
        <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Bookmarked</h2>
            </div>

            <div class="py-30 px-30">
              <div class="row y-gap-30">
                <CourseCardTwoDash
                  v-for="(course, index) in coursesData.slice(0, 6)"
                  :key="index"
                  :data="course"
                />
              </div>

              <div class="row justify-center pt-30">
                <div class="col-auto">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterNine />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { coursesData } from "@/data/dashboard";
import CourseCardTwoDash from "./DashBoardCards/CourseCardTwoDash";
import FooterNine from "../layout/footers/FooterNine";
import Pagination from "../common/PaginationTwo";
</script>
