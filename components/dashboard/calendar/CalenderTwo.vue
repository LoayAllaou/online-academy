<template>
  <div class="pt-20 pb-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
    <div
      class="d-flex x-gap-10 y-gap-10 justify-center items-center pb-5"
      :style="{ flexDirection: 'column' }"
    >
      <h5 class="text-17 fw-500 mb-30">Calendar</h5>
      <MonthlyCalender />
    </div>
  </div>
</template>

<script setup>
import MonthlyCalender from "./MonthlyViewCalender";
</script>

<style lang="scss" scoped></style>
