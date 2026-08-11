<template>
  <div class="main-content">
    <Header />
    <div class="content-wrapper js-content-wrapper">
      <PageLinks />
      <CourseDetailsFive :id="id" />
      <CourseSlider />
      <FooterOne />
    </div>
  </div>
</template>

<script setup>
import PageLinks from "@/components/common/PageLinks";
import CourseDetailsFive from "@/components/courseSingle/CourseDetailsFive";

import CourseSlider from "@/components/courseSingle/CourseSlider";
import FooterOne from "@/components/layout/footers/FooterOne";

import Header from "@/components/layout/headers/Header";

const route = useRoute();
const id = route.params.id;
</script>

<style lang="scss" scoped></style>
