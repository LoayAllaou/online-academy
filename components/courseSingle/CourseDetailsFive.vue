<template>
  <div class="js-pin-container relative">
    <section class="page-header -type-5">
      <div class="page-header__bg">
        <div
          class="bg-image js-lazy"
          data-bg="/assets/img/event-single/bg.png"
        ></div>
      </div>

      <div class="container">
        <div class="page-header__content pt-60">
          <div class="row y-gap-30 relative">
            <div class="col-xl-7 col-lg-8">
              <div class="d-flex x-gap-15 y-gap-10 pb-20">
                <div>
                  <div
                    class="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400"
                  >
                    BEST SELLER
                  </div>
                </div>
                <div>
                  <div
                    class="badge px-15 py-8 text-11 bg-orange-1 text-white fw-400"
                  >
                    NEW
                  </div>
                </div>
                <div>
                  <div
                    class="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400"
                  >
                    POPULAR
                  </div>
                </div>
              </div>

              <div>
                <h1 class="text-30 lh-14 pr-60 lg:pr-0">
                  {{ pageItem.title }}
                </h1>
              </div>

              <p class="col-xl-9 mt-20">
                Use XD to get a job in UI Design, User Interface, User
                Experience design, UX design & Web Design
              </p>

              <div
                class="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20"
              >
                <div class="d-flex items-center text-light-1">
                  <div class="text-14 lh-1 text-yellow-1 mr-10">
                    {{ pageItem.rating }}
                  </div>
                  <div class="d-flex x-gap-10 items-center">
                    <Star :star="pageItem.rating" />
                  </div>
                  <div class="text-14 lh-1 ml-10">
                    ({{ pageItem.ratingCount }})
                  </div>
                </div>

                <div class="d-flex items-center text-light-1">
                  <div class="icon icon-person-3 text-13"></div>
                  <div class="text-14 ml-8">853 enrolled on this course</div>
                </div>

                <div class="d-flex items-center text-light-1">
                  <div class="icon icon-wall-clock text-13"></div>
                  <div class="text-14 ml-8">Last updated 11/2021</div>
                </div>
              </div>

              <div class="d-flex items-center pt-20">
                <div
                  class="bg-image size-30 rounded-full js-lazy"
                  :style="{
                    backgroundImage: `url(${pageItem.authorImageSrc})`,
                  }"
                ></div>
                <div class="text-14 lh-1 ml-10">
                  {{ pageItem.authorName }}
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="relative pt-40">
                <nuxt-img
                  width="690"
                  height="342"
                  class="w-1/1"
                  :src="pageItem.imageSrc"
                  alt="image"
                />
                <div
                  class="absolute-full-center d-flex justify-center items-center"
                >
                  <div
                    @click="() => {isOpen = true}"
                    class="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor"
                    data-gallery="gallery1"
                  >
                    <div class="icon-play text-18"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PinContentTwo :pageItem="pageItem" />

    <section class="pt-30 layout-pb-md">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div
              class="pt-25 pb-30 px-30 bg-white shadow-2 rounded-8 border-light"
            >
              <div class="tabs -active-purple-2 js-tabs pt-0">
                <div class="tabs__controls d-flex js-tabs-controls">
                  <button
                    v-for="(elm, i) in menuItems"
                    :key="i"
                    @click="() => (activeTab = elm.id)"
                    :class="[
                      'tabs__button',
                      'js-tabs-button',
                      'js-update-pin-scene',
                      i !== 0 ? 'ml-30' : '',
                      activeTab === elm.id ? 'is-active' : '',
                    ]"
                    type="button"
                  >
                    {{ elm.text }}
                  </button>
                </div>

                <div class="tabs__content js-tabs-content">
                  <div
                    v-if="activeTab === 1"
                    class="tabs__pane -tab-item-1 is-active"
                  >
                    <Overview />
                  </div>

                  <div
                    v-if="activeTab === 2"
                    class="tabs__pane -tab-item-2 is-active"
                  >
                    <CourseContent />
                  </div>

                  <div
                    v-if="activeTab === 3"
                    class="tabs__pane -tab-item-3 is-active"
                  >
                    <Instractor />
                  </div>

                  <div
                    v-if="activeTab === 4"
                    class="tabs__pane -tab-item-4 is-active"
                  >
                    <Reviews />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <ModalVideoComponent
    :videoId="'LlCwHnp3kL4'"
    :isOpen="isOpen"
    @close="close"
  />
</template>

<script setup>
import Instractor from "./Instractor";
import Reviews from "./Reviews";
import Overview from "./Overview";
import CourseContent from "./CourseContent";
import Star from "@/components/common/Star";
import { coursesData } from "@/data/courses";
import { ref, onMounted } from "vue";
import PinContentTwo from "./PinContentTwo";
import ModalVideoComponent from "@/components/common/ModalVideo";

const menuItems = [
  { id: 1, href: "#overview", text: "Overview", isActive: true },
  { id: 2, href: "#course-content", text: "Course Content", isActive: false },
  { id: 3, href: "#instructors", text: "Instructors", isActive: false },
  { id: 4, href: "#reviews", text: "Reviews", isActive: false },
];

const isOpen = ref(false);
const close = () => {
  isOpen.value = false;
};
const activeTab = ref(1);

const props = defineProps(["id"]);
const pageItem = ref(coursesData[0]);

onMounted(() => {
  // Set a default value if id is not provided
  pageItem.value =
    coursesData.find((elm) => elm.id == props.id) || coursesData[0];
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
