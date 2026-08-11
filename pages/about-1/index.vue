<template>
  <div class="main-content">
    <Header />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <div class="page-links"></div>
      <!-- <PageLinks /> -->
      <About />
      <!-- <WhyCourse /> -->

      <!-- <Testimonials /> -->
      <Instructors />
      <!-- <Brands /> -->

      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "ScaleUp - Academy - About Us",
  description:
    "ScaleUp - Academy - About Us",
});

import About from "@/components/about/About";

import Brands from "@/components/common/Brands";
import Instructors from "@/components/common/Instructors";
import PageLinks from "@/components/common/PageLinks";

import WhyCourse from "@/components/homes/WhyCourse";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import Testimonials from "~/components/about/Testimonials.vue";
</script>

<style lang="scss" scoped>
.page-links {
  padding-top: 30px;
}</style>
