<template>
  <Header />

  <div class="content-wrapper js-content-wrapper overflow-hidden">
    <HomeHero />
    <!-- <About /> -->
    <!-- <Brands /> -->
    <Categories />
    <Courses />
    <!-- <TestimonialsOne /> -->
    <!-- <FeaturesOne /> -->
    <!-- <WhyCourse /> -->
    <Instructors />
    <!-- <GetApp /> -->
    <!-- <Blog /> -->
    <!-- <Join /> -->
    <ContactTwo />
    <FooterOne />
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useSeoMeta({
  title:
    "ScaleUp - Academy - Home",
  description:
    "ScaleUp - Academy - Home",
});

// import HomeOne from "@/components/homes/home";
import Header from "../../components/layout/headers/Header";
// import MobileMenu from "@/components/layout/component/MobileMenu";

import HomeHero from "../../components/homes/heros/HomeHero";
import About from "@/components/about/About";

import Brands from "../../components/common/Brands";
import Categories from "../../components/homes/categories/Categories";
import Courses from "../../components/homes/courses/Courses";
import TestimonialsOne from "../../components/common/TestimonialsOne";
import FeaturesOne from "../../components/homes/features/FeaturesOne";
import WhyCourse from "../../components/homes/WhyCourse";
import Instructors from "../../components/common/Instructors";
import GetApp from "../../components/homes/getApp/GetApp";
import Blog from "../../components/homes/blogs/Blog";
import Join from "../../components/homes/join/Join";
import ContactTwo from "@/components/contacts/ContactTwo";
import FooterOne from "../../components/layout/footers/FooterOne";
</script>
