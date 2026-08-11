<template>
  <div></div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from "vue";

// The props variable is automatically available in the setup function
const { whiteMode } = defineProps(["whiteMode"]);

// The setup function is where you define the component logic
onMounted(() => {
  const handleDarkmode = () => {
    if (document) {
      if (whiteMode) {
        document.documentElement.classList.remove("-dark-mode");
      } else {
        document.documentElement.classList.add("-dark-mode");
      }
    }
  };

  handleDarkmode();

  // onBeforeUnmount is used for cleanup when the component is destroyed
  onBeforeUnmount(() => {
    document.documentElement.classList.remove("-dark-mode");
  });
});
</script>
