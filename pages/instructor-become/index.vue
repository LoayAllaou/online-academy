<template>
  <div class="main-content">
    <Header />
    <div class="content-wrapper js-content-wrapper overflow-hidden">
      <PageLinks />
      <PageHeading />
      <section class="layout-pb-lg">
        <div class="container">
          <Tabs />
          <LearningCommon />
        </div>
      </section>

      <JoinToday />

      <Instructors />

      <FooterOne />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Instractor Become || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import JoinToday from "@/components/aboutCourses/become/JoinToday";
import PageHeading from "@/components/aboutCourses/become/PageHeading";
import Tabs from "@/components/aboutCourses/become/Tabs";
import Instructors from "@/components/common/Instructors";
import LearningCommon from "@/components/common/LearningCommon";

import PageLinks from "@/components/common/PageLinks";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
</script>

<style lang="scss" scoped></style>
