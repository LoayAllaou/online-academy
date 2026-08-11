<template>
  <div id="course-content" class="pt-60 lg:pt-40">
    <h2 class="text-20 fw-500">Course Content</h2>
    <div class="d-flex justify-between items-center mt-30">
      <div class="">{{ data?.titles?.length }} sections • {{ data?.titles?.reduce((acc, item) => acc + item.videos.length, 0) }} lectures</div>
      <a href="#" class="underline text-purple-1">Expand All Sections</a>
    </div>

    <div class="mt-10">
      <div class="accordion -block-2 text-left js-accordion">
        <div
          v-for="(elm, i) in data?.titles"
          :key="i"
          :class="{ 'is-active': activeItemId === elm.id,'accordion__item':true }"
      
        >
          <div
            @click="() => toggleAccordion(elm.id)"
            class="accordion__button py-20 px-30 bg-light-4"
          >
            <div class="d-flex items-center">
              <div class="accordion__icon">
                <div class="icon">
                  <font-awesome-icon
                    :icon="faChevronDown"
                    v-if="activeItemId !== elm.id"
                  />
                  <font-awesome-icon :icon="faChevronUp" v-else />
                </div>
              </div>
              <span class="text-17 fw-500 text-dark-1">
                {{ $i18n.locale === 'ar' ? elm.titleAr : elm.titleEn }}
              </span>
            </div>
            <div>
              {{ elm.videos.length }} lectures • 50 min
            </div>
          </div>

          <div
            class="accordion__content"
            :style="{ maxHeight: activeItemId === elm.id ? '700px' : '' }"
          >
            <div class="accordion__content__inner px-30 py-30">
              <div class="y-gap-20">
                <div
                  v-for="(itm, index) in elm.videos"
                  :key="index"
                  class="d-flex justify-between"
                >
                  <div class="d-flex items-center">
                    <div
                      class="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10"
                    >
                      <div class="icon-play text-9"></div>
                    </div>
                    <div>
                      {{ itm.title }}</div>
                  </div>

                  <div class="d-flex x-gap-20 items-center">
                    <span
                      @click="openModal(itm.videoUrl)"
                      class="text-14 lh-1 text-purple-1 underline cursor"
                      >Preview</span
                    >
                    <!-- <a href="#" class="text-14 lh-1 text-purple-1 underline"
                      >{{ elm.duration }} question</a
                    > -->
                    <a href="#" class="text-14 lh-1 text-purple-1 underline">25 min</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ModalVideoComponent
      :isOpen="isOpen"
      @close="close"
      :videoId="videoId"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { lessonItems } from "@/data/aboutcourses";
import ModalVideoComponent from "../common/ModalVideo";

// let component accept data as props
const props = defineProps(['data'])
const { data } = props
const videoId = ref("");

const activeItemId = ref(0);
const isOpen = ref(false);

const toggleAccordion = (itemId) => {
  activeItemId.value = activeItemId.value === itemId ? 0 : itemId;
};

const openModal = (videoUrl) => {
  isOpen.value = true;
  videoId.value = videoUrl;
};
const close = () => {
  isOpen.value = false;
  videoId.value = "";
};
</script>

<style scoped>
/* Add your styles here */
</style>
