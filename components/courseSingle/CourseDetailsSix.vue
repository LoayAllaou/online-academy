<template>
  <div>
    <section class="page-header -type-5 bg-dark-1">
      <div class="page-header__bg">
        <div class="bg-image js-lazy" data-bg="img/event-single/bg.png"></div>
      </div>

      <div class="container">
        <div class="page-header__content pt-80 pb-90">
          <div class="row y-gap-30 justify-between">
            <div class="col-xl-6 col-lg-6">
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
                <h1 class="text-30 lh-14 text-white pr-60 lg:pr-0">
                  {{ $i18n.locale === 'ar' ? pageItem?.titleAr : pageItem?.titleEn }}
                </h1>
              </div>

              <p class="text-dark-3 mt-20">
                {{ $i18n.locale === 'ar' ? pageItem?.descriptionAr : pageItem?.descriptionEn }}
              </p>

              <div
                class="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20"
              >
                <div class="d-flex items-center text-dark-3">
                  <div class="text-14 lh-1 text-yellow-1 mr-10">
                    {{ pageItem?.averageRating }}
                  </div>
                  <div class="d-flex x-gap-5 items-center">
                    <Star textSize="text-11" :star="pageItem?.averageRating" />
                  </div>
                  <div class="text-14 lh-1 ml-10">
                    ({{ pageItem?.totalRatings }})
                  </div>
                </div>

                <div class="d-flex items-center text-dark-3">
                  <div class="icon icon-person-3 text-13"></div>
                  <div class="text-14 ml-8">853 enrolled on this course</div>
                </div>

                <!-- <div class="d-flex items-center text-dark-3">
                  <div class="icon icon-wall-clock text-13"></div>
                  <div class="text-14 ml-8">Last updated 11/2021</div>
                </div> -->
              </div>

              <div class="d-flex items-center pt-20">
                <div
                  class="bg-image size-30 rounded-full js-lazy"
                  :style="{
                    backgroundImage: `url(${pageItem?.profileImageUrl || '/assets/img/avatars/1.png'})`,
                  }"
                ></div>
                <div class="text-14 lh-1 ml-10 text-dark-3">
                  {{ pageItem?.instructor?.fullName }}
                </div>
              </div>

              <div class="mt-30">
                <div class="d-flex justify-between py-8 border-bottom-light-2">
                  <div class="d-flex items-center text-white">
                    <div class="icon-video-file"></div>
                    <div class="ml-10">Lessons</div>
                  </div>
                  <div class="text-white">{{ pageItem?.titles?.length }}</div>
                </div>

                <div class="d-flex justify-between py-8 border-bottom-light-2">
                  <div class="d-flex items-center text-white">
                    <div class="icon-puzzle"></div>
                    <div class="ml-10">Quizzes</div>
                  </div>
                  <div class="text-white">3</div>
                </div>

                <div class="d-flex justify-between py-8 border-bottom-light-2">
                  <div class="d-flex items-center text-white">
                    <div class="icon-clock-2"></div>
                    <div class="ml-10">Duration</div>
                  </div>
                  <div class="text-white">13 Hours</div>
                </div>

                <div class="d-flex justify-between py-8 border-bottom-light-2">
                  <div class="d-flex items-center text-white">
                    <div class="icon-bar-chart-2"></div>
                    <div class="ml-10">Skill level</div>
                  </div>
                  <div class="text-white">Beginner</div>
                </div>

                <div class="d-flex justify-between py-8 border-bottom-light-2">
                  <div class="d-flex items-center text-white">
                    <div class="icon-translate"></div>
                    <div class="ml-10">Language</div>
                  </div>
                  <div class="text-white">English</div>
                </div>

                <div class="d-flex justify-between py-8 border-bottom-light-2">
                  <div class="d-flex items-center text-white">
                    <div class="icon-badge"></div>
                    <div class="ml-10">Certificate</div>
                  </div>
                  <div class="text-white">Yes</div>
                </div>

                <div class="d-flex justify-between py-8 border-bottom-light-2">
                  <div class="d-flex items-center text-white">
                    <div class="icon-infinity"></div>
                    <div class="ml-10">Full lifetime access</div>
                  </div>
                  <div class="text-white">Yes</div>
                </div>
              </div>

              <div class="d-flex mt-30">
                <a
                  href="#"
                  class="d-flex justify-center items-center size-40 rounded-full text-dark-3"
                >
                  <i class="fa fa-facebook"></i>
                </a>

                <a
                  href="#"
                  class="d-flex justify-center items-center size-40 rounded-full text-dark-3"
                >
                  <i class="fa fa-twitter"></i>
                </a>

                <a
                  href="#"
                  class="d-flex justify-center items-center size-40 rounded-full text-dark-3"
                >
                  <i class="fa fa-instagram"></i>
                </a>

                <a
                  href="#"
                  class="d-flex justify-center items-center size-40 rounded-full text-dark-3"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="col-xl-5 col-lg-6">
              <div class="relative">
                <nuxt-img
                  :width="451"
                  :height="316"
                  class="w-1/1"
                  :src="pageItem?.thumbnailUrl || '/assets/img/coursesCards/1.png'"
                  alt="image"
                />
                <div
                  class="absolute-full-center d-flex justify-center items-center"
                >
                  <div
                    @click="() => (isOpen = true)"
                    class="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor"
                  >
                    <div class="icon-play text-18"></div>
                  </div>
                </div>
              </div>

              <div class="mt-30">
                <div class="d-flex justify-between items-center">
                  <div
                    v-if="pageItem.isPaid"
                    class="text-24 lh-1 text-white fw-500"
                  >
                    ${{ pageItem?.price?.toFixed(2) }}
                  </div>
                  <div
                    v-if="pageItem.isPaid"
                    class="lh-1 line-through text-dark-3"
                  >
                    ${{ pageItem?.price?.toFixed(2) }}
                  </div>

                  <div v-if="!pageItem.isPaid"></div>
                  <div
                    v-if="!pageItem.isPaid"
                    class="lh-1 line-through text-dark-3"
                  >
                    Free
                  </div>
                </div>

                <div class="row x-gap-30 y-gap-20 pt-30">
                  <div class="col-sm-6">
                    <button
                      class="button -md -purple-1 text-white w-1/1"
                      @click="!cart.isCourseAdded(pageItem.id) ? cart.addCourseToCart(pageItem.id) : null"
                    >
                      {{ cart.isCourseAdded(pageItem.id) ? "Already Added" : "Add To Cart" }}
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button
                      class="button -md -outline-green-1 text-green-1 w-1/1"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>

                <div class="text-14 lh-1 text-dark-3 mt-30">
                  30-Day Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="layout-pt-lg layout-pb-md">
      <div class="container">
        <div class="tabs -side js-tabs">
          <div class="row y-gap-40">
            <div class="col-lg-4">
              <div class="tabs__controls y-gap-5 js-tabs-controls">
                <div v-for="menuItem in menuItems" :key="menuItem.id">
                  <button
                    @click="() => setActiveTab(menuItem.id)"
                    class="tabs__button text-18 fw-500 js-tabs-button"
                    :class="{ 'is-active': activeTab === menuItem.id }"
                    type="button"
                  >
                    {{ menuItem.text }}
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="tabs__content js-tabs-content">
                <div
                  v-show="activeTab === 1"
                  class="tabs__pane -tab-item-1 is-active"
                >
                  <Overview />
                </div>

                <div
                  v-show="activeTab === 2"
                  class="tabs__pane -tab-item-2 is-active"
                >
                  <CourseContent v-if="pageItem && pageItem.id !== 0"  :data="pageItem" />
                </div>

                <div
                  v-show="activeTab === 3"
                  class="tabs__pane -tab-item-3 is-active"
                >
                  <Instractor v-if="pageItem && pageItem.id !== 0" :data="pageItem.instructor" />
                </div>

                <div
                  v-show="activeTab === 4"
                  class="tabs__pane -tab-item-4 is-active"
                >
                  <Reviews />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ModalVideoComponent
      videoId="LlCwHnp3kL4"
      :isOpen="isOpen"
      @close="close"
    />
  </div>
</template>

<script setup>
import Instractor from "./Instractor.vue";
import Reviews from "./Reviews.vue";
import Overview from "./Overview.vue";
import CourseContent from "./CourseContent.vue";
import Star from "../common/Star.vue";
import { coursesData } from "@/data/courses";
import { ref, watchEffect } from "vue";
import ModalVideoComponent from "../common/ModalVideo.vue";
import { useCourseStore } from '@/stores/courseStore'
import { useCartStore } from '@/stores/cartStore';

const cart = useCartStore();

const courseStore = useCourseStore()

const menuItems = [
  { id: 1, href: "#overview", text: "Overview", isActive: true },
  { id: 2, href: "#course-content", text: "Course Content", isActive: false },
  { id: 3, href: "#instructors", text: "Instructors", isActive: false },
  // { id: 4, href: "#reviews", text: "Reviews", isActive: false },
];

const props = defineProps(["id"]);
//const pageItem = ref(coursesData[0]);
const pageItem = ref({
  id: 0,
  titleEn: "",
  descriptionEn: "",
  price: 0,
  discountedPrice: null,
  isPaid: false,
  averageRating: 0,
  totalRatings: 0,
  profileImageUrl: "",
  thumbnailUrl: "",
  instructor: { fullName: "" },
  titles: [],
});
onMounted(async () => {
  // Set a default value if id is not provided
  // pageItem.value =
  //   coursesData.find((elm) => elm.id == props.id) || coursesData[0];
  if (props.id) {
    await courseStore.fetchCourseById(props.id).then((data) => {
      pageItem.value = data;
      console.log('Course details:', data);
    });
  } else {
    pageItem.value = coursesData[0];
  }
  //pageItem.value.discountedPrice = props.data.discountedPrice || props.data.price;
});


const isOpen = ref(false);
const activeTab = ref(1);
import {
  isAddedToCartCourses,
  addCourseToCart,
} from "../../composables/states";

const close = () => {
  isOpen.value = false;
};

const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};

function addCourse(id) {
  cart.addCourseToCart(id);
}

const isAdded = cart.isCourseAdded(1); // true / false
</script>
