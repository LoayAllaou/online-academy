<template>
  <div>
    <aside
      :class="{
        'lesson-sidebar': true,
        '-type-2': rightPosition,
        'lg:order-2': rightPosition,
        'bg-light-3': !rightPosition,
      }"
    >
      <div class="px-30 sm:px-20">
        <form @submit.prevent="handleSubmit" class="lesson-sidebar-search">
          <input type="text" required placeholder="Search" />
          <button type="submit">
            <i class="icon-search text-20"></i>
          </button>
        </form>

        <div class="accordion -block-2 text-left js-accordion mt-30">
          <div
            v-for="(item, index) in lessonItems"
            :key="index"
            :class="{
              'is-active': activeItemId === item.id,
              accordion__item: true,
            }"
          >
            <div
              @click="toggleActiveItem(item.id)"
              class="accordion__button py-20 px-30 bg-light-4"
            >
              <div class="d-flex items-center">
                <div class="accordion__icon">
                  <div class="icon" data-feather="chevron-up">
                    <FontAwesomeIcon :icon="faChevronDown" />
                  </div>
                  <div class="icon" data-feather="chevron-up">
                    <FontAwesomeIcon :icon="faChevronUp" />
                  </div>
                </div>
                <span class="text-17 fw-500 text-dark-1">{{ item.title }}</span>
              </div>
            </div>

            <div
              class="accordion__content"
              :style="{ maxHeight: activeItemId === item.id ? '700px' : '0' }"
            >
              <div class="accordion__content__inner px-30 py-30">
                <div class="y-gap-30">
                  <div v-for="(lesson, index) in item.lessons" :key="index">
                    <div class="d-flex">
                      <div
                        class="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10"
                      >
                        <div class="icon-play text-9"></div>
                      </div>
                      <div class="">
                        <div>{{ lesson.title }}</div>
                        <div class="d-flex x-gap-20 items-center pt-5">
                          <span
                            @click="openVideoModal"
                            class="text-14 lh-1 text-purple-1 underline cursor"
                          >
                            Preview
                          </span>
                          <a
                            href="#"
                            class="text-14 lh-1 text-purple-1 underline"
                          >
                            {{ lesson.duration }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <ModalVideoComponent
      v-if="isOpen"
      :isOpen="isOpen"
      @close="close"
      videoId="LlCwHnp3kL4"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ModalVideoComponent from "@/components/common/ModalVideo";
import { lessonItems } from "@/data/aboutcourses";

const activeItemId = ref(0);
const isOpen = ref(false);
const close = () => {
  isOpen.value = false;
};
const toggleActiveItem = (itemId) => {
  activeItemId.value = activeItemId.value === itemId ? 0 : itemId;
};

const openVideoModal = () => {
  isOpen.value = true;
};

const handleSubmit = () => {
  // Your form submission logic here
};

const props = defineProps(["rightPosition"]);
</script>
