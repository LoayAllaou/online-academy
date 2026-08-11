<template>
  <div class="px-5 mt-30">
    <Slider :min="10" :max="300" v-model="value" />
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      value: [50, 252],
    };
  },
};
</script>
<style scoped>
div {
  --slider-bg: #d1d5db;

  --slider-connect-bg: #6440fb;
  --slider-tooltip-bg: #6440fb;

  --slider-handle-ring-color: #6440fb;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
