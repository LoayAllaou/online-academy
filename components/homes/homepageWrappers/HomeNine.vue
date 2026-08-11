<!-- pages/HomeNine.vue -->
<template>
  <div class="main-content homeModeChange">
    <HeaderNine
      @setMessageOpen="setMessageOpen"
      @setIsSidebarClosed="setIsSidebarClosed"
    />
    <div class="content-wrapper js-content-wrapper">
      <div
        class="dashboard -home-9 px-0 js-dashboard-home-9"
        :class="{ '-is-sidebar-hidden': isSidebarClosed }"
      >
        <div
          class="dashboard__sidebar -base scroll-bar-1 border-right-light lg:px-30"
        >
          <Sidebar />
        </div>
        <div class="dashboard__main mt-0">
          <div class="dashboard__content pt-0 px-15 pb-0">
            <HeroNine />
            <CategoriesNine />
            <CoursesFive
              :tabBtnStyle="'tabs__button px-20 py-8 rounded-200 -dark-text-white js-tabs-button'"
            />
            <StepsOne />
            <Instructors />
            <Books />
            <InstractorsNine />
            <Testimonials :backgroundComponent="'whiteBg'" />
            <JoinNine />
            <Brands />
          </div>
          <FooterNine />
        </div>
      </div>
    </div>
  </div>
  <Messages :messageOpen="messageOpen" @setMessageOpen="setMessageOpen" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HeaderNine from "@/components/layout/headers/HeaderNine";
import Sidebar from "../Sidebar";

import FooterNine from "@/components/layout/footers/FooterNine";
import HeroNine from "../heros/HeroNine";
import CategoriesNine from "../categories/CategoriesNine";
import CoursesFive from "../courses/CoursesFive";
import StepsOne from "../../common/StepsOne";
import Instructors from "../../common/Instructors";
import Books from "../books/Books";
import InstractorsNine from "../instractors/InstractorsNine";
import Testimonials from "../testimonials/Testimonials";
import JoinNine from "../join/JoinNine";
import Brands from "../../common/Brands";

import Messages from "@/components/layout/component/Messages";

const isSidebarClosed = ref(false);
const messageOpen = ref(false);
const setMessageOpen = () => {
  messageOpen.value = !messageOpen.value;
};
const setIsSidebarClosed = () => {
  isSidebarClosed.value = !isSidebarClosed.value;
};

onMounted(() => {
  if (window.innerWidth < 990) {
    isSidebarClosed.value = true;
  }
  const handleResize = () => {
    if (window.innerWidth < 990) {
      isSidebarClosed.value = true;
    }
  };

  window.addEventListener("resize", handleResize);

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
});
</script>

<style scoped>
/* Add your styles here */
</style>
