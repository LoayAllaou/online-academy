<template>
  <Calendar />
</template>

<script setup>
import { Calendar, DatePicker } from "v-calendar";
</script>

<style lang="css">
.vc-pane {
  min-width: 160px !important;
  max-width: 100% !important;
  overflow: auto;
}
.vc-pane-layout {
  max-width: 100% !important;
}
.vc-container {
  max-width: 100% !important;
}
.vc-header .vc-title {
  font-size: 15px !important;
}
</style>
<style src="v-calendar/style.css"></style>
