<template>
  <div class="barba-container" data-barba="container">
    <main class="main-content">
      <HeaderDashboard />
      <div class="content-wrapper js-content-wrapper overflow-hidden">
        <div
          id="dashboardOpenClose"
          class="dashboard -home-9 js-dashboard-home-9"
        >
          <div class="dashboard__sidebar scroll-bar-1">
            <Sidebar />
          </div>
          <BookMarks />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Dashboard Bookmarks || Educrat - Professional LMS Online Education Course NuxtJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
});
import BookMarks from "@/components/dashboard/BookMarks";

import Sidebar from "@/components/dashboard/Sidebar";
import HeaderDashboard from "@/components/layout/headers/HeaderDashboard";
</script>

<style lang="scss" scoped></style>
