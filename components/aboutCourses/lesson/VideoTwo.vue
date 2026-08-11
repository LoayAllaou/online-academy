<template>
  <div class="relative pt-40">
    <nuxt-img
      width="690"
      height="330"
      class="w-1/1 rounded-16"
      src="/assets/img/lesson-single/1.png"
      alt="image"
    />
    <div class="absolute-full-center d-flex justify-center items-center">
      <span
        style="cursor: pointer"
        @click="openModal"
        class="d-flex justify-center items-center size-60 rounded-full bg-white"
      >
        <span class="icon-play text-18"></span>
      </span>
    </div>
    <ModalVideoComponent
      v-if="isOpen"
      :videoId="'LlCwHnp3kL4'"
      :isOpen="isOpen"
      @close="close"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalVideoComponent from "~/components/common/ModalVideo";

const isOpen = ref(false);
const close = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};
</script>
