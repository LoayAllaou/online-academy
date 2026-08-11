<template>
  <div id="js-pin-container" class="js-pin-container relative">
    <section class="page-header -type-5 bg-dark-1">
      <div class="page-header__bg">
        <div
          class="bg-image js-lazy"
          :data-bg="`img/event-single/bg.png`"
        ></div>
      </div>

      <div class="container dark-color-two">
        <div class="page-header__content pt-90 pb-90">
          <div class="row y-gap-30 relative">
            <div class="col-xl-7 col-lg-8">
              <div class="d-flex x-gap-15 y-gap-10 pb-20">
                <div>
                  <div
                    class="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400"
                  >
                    BEST SELLER
                  </div>
                </div>
                <div>
                  <div
                    class="badge px-15 py-8 text-11 bg-orange-1 text-white fw-400"
                  >
                    NEW
                  </div>
                </div>
                <div>
                  <div
                    class="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400"
                  >
                    POPULAR
                  </div>
                </div>
              </div>

              <div>
                <h1 class="text-30 lh-14 text-white pr-60 lg:pr-0">
                  {{ pageItem.title }}
                </h1>
              </div>

              <p class="col-xl-9 mt-20 text-dark-two">
                Use XD to get a job in UI Design, User Interface, User
                Experience design, UX design & Web Design
              </p>

              <div
                class="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20"
              >
                <div class="d-flex items-center">
                  <div class="text-14 lh-1 text-yellow-1 mr-10">
                    {{ pageItem.rating }}
                  </div>
                  <div class="d-flex x-gap-5 items-center">
                    <Star :star="5" textSize="text-11" />
                  </div>
                  <div class="text-14 lh-1 text-light-1 ml-10">
                    {{ pageItem.ratingCount }}
                  </div>
                </div>

                <div class="d-flex items-center text-light-1">
                  <div class="icon icon-person-3 text-13"></div>
                  <div class="text-14 ml-8 dark-color-two">853 enrolled on this course</div>
                </div>

                <div class="d-flex items-center text-light-1">
                  <div class="icon icon-wall-clock text-13"></div>
                  <div class="text-14 ml-8">Last updated 11/2021</div>
                </div>
              </div>

              <div class="d-flex items-center pt-20">
                <div
                  class="bg-image size-30 rounded-full js-lazy"
                  :style="{
                    backgroundImage: `url(${pageItem.authorImageSrc})`,
                  }"
                ></div>
                <div class="text-14 lh-1 ml-10 text-dark-two">{{ pageItem.authorName }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PinContent :pageItem="pageItem" />

    <section class="layout-pt-md layout-pb-md">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="page-nav-menu -line">
              <div class="d-flex x-gap-30">
                <div v-for="item in menuItems" :key="item.id">
                  <a
                    :href="item.href"
                    class="pb-12 page-nav-menu__link"
                    :class="{ 'is-active': item.isActive }"
                  >
                    {{ item.text }}
                  </a>
                </div>
              </div>
            </div>

            <Overview />
            <CourseContent />
            <Instractor />
            <Reviews />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Star from "../common/Star";
import PinContent from "./PinContent";
import Overview from "./Overview";
import CourseContent from "./CourseContent";
import Instractor from "./Instractor";
import Reviews from "./Reviews";
import { coursesData } from "@/data/courses";
import { ref, onMounted } from "vue";

const menuItems = [
  { id: 1, href: "#overview", text: "Overview", isActive: true },
  { id: 2, href: "#course-content", text: "Course Content", isActive: false },
  { id: 3, href: "#instructors", text: "Instructors", isActive: false },
  { id: 4, href: "#reviews", text: "Reviews", isActive: false },
];

const props = defineProps(["id"]);
const pageItem = ref(coursesData[0]);

onMounted(() => {
  // Set a default value if id is not provided
  pageItem.value =
    coursesData.find((elm) => elm.id == props.id) || coursesData[0];
});

// You can set the value of `id` from the route or wherever you are using this component
// Example: id.value = getTheIdFromSomewhere();
</script>
