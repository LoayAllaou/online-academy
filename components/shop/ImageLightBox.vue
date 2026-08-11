<template>
  <div
    id="myModal"
    :style="{ display: activeLightBox ? 'block' : 'none' }"
    class="modal"
  >
    <div class="close cursor" :style="{ zIndex: 1000 }" @click="closeLightBox">
      <span>&times;</span>
    </div>
    <div class="modal-content">
      <div
        v-for="(elm, i) in images"
        :key="i"
        class="mySlides"
        :style="{
          display: currentSlideIndex === i ? 'block' : 'none',
          height: '100%',
        }"
      >
        <div class="numbertext">{{ i + 1 }} / {{ images.length }}</div>
        <img
          :src="elm.image"
          style="
            height: 100%;
            width: 100%;
            object-fit: contain;
            margin: auto auto;
          "
        />
      </div>

      <a class="prev" @click="prevSlide">&#10094;</a>
      <a class="next" @click="nextSlide">&#10095;</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["images", "activeLightBox", "currentSlideIndex"]);
const emits = defineEmits(["setActiveLightBox", "setCurrentSlideIndex"]);

const prevSlide = () => {
  emits(
    "setCurrentSlideIndex",
    props.currentSlideIndex === 0
      ? props.images.length - 1
      : props.currentSlideIndex - 1,
  );
};

const nextSlide = () => {
  emits(
    "setCurrentSlideIndex",
    props.currentSlideIndex === props.images.length - 1
      ? 0
      : props.currentSlideIndex + 1,
  );
};

const closeLightBox = () => {
  emits("setActiveLightBox", false);
};
</script>
