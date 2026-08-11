<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">
      <div class="row y-gap-60 justify-between items-center">
        <div class="col-lg-6">
          <div class="js-shop-slider">
            <div class="shopSingle-preview__image js-slider-slider">
              <ClientOnly>
          <Swiper
                class="overflow-visible"
                :modules="[Navigation, Pagination]"
                :loop="true"
                :space-between="0"
                :speed="1000"
                :slides-Per-View="1"
                @swiper="onSwiper"
                @slideChange="handleSlideChange"
              >
                <SwiperSlide
                  v-for="(elm, i) in pageItems"
                  :key="i"
                  class="swiper-slide"
                >
                  <div class="swiper-slide">
                    <span
                      data-barba
                      class="gallery__item js-gallery"
                      data-gallery="gallery1"
                    >
                      <div class="ratio ratio-63:57">
                        <nuxt-img
                          :width="690"
                          :height="625"
                          class="absolute-full-center rounded-8"
                          :src="elm.image"
                          alt="project image"
                        />
                      </div>

                      <div
                        class="gallery__button -bottom-right"
                        @click="() => (activeLightBox = true)"
                      >
                        <FontAwesomeIcon
                          :style="{
                            fontWeight: 800,
                            fontSize: '20px',
                            color: '#fff',
                            cursor: 'pointer',
                          }"
                          :icon="faPlus"
                        />
                      </div>
                    </span>
                  </div>
                </SwiperSlide>
              </Swiper></ClientOnly>

            </div>

            <div class="row y-gap-10 x-gap-10 pt-10 js-slider-pagination">
              <div
                v-for="(elm, i) in pageItems"
                style='{ cursor: "pointer" }'
                @click="() => handlePaginationClick(i)"
                :key="i"
                class="col-auto gallery__item"
              >
                <nuxt-img
                  :width="90"
                  :height="90"
                  class="size-90 object-cover rounded-8"
                  :src="elm.image"
                  alt="project image"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="pb-90 md:pb-0">
            <h2 class="text-30 fw-500 mt-4">{{ currentItem.name }}</h2>
            <div class="text-24 fw-500 text-purple-1 mt-15">
              ${{ currentItem.price }}
            </div>

            <div class="mt-30">
              <p>
                Besides, random text risks to be unintendedly humorous or
                offensive, an unacceptable risk in corporate environments and
                its many variants have been employed.
              </p>
            </div>

            <div class="shopSingle-info__action row x-gap-20 y-gap-20 pt-30">
              <div class="col-auto">
                <div class="input-counter js-input-counter">
                  <input
                    required
                    class="input-counter__counter"
                    type="number"
                    placeholder="value..."
                    :value="itemQuantity"
                  />

                  <div class="input-counter__controls">
                    <button
                      class="input-counter__up js-down"
                      @click="
                        () =>
                          (itemQuantity =
                            itemQuantity > 1 ? itemQuantity - 1 : itemQuantity)
                      "
                    >
                      <FontAwesomeIcon :icon="faMinus" />
                    </button>

                    <button
                      class="input-counter__down js-up"
                      @click="() => (itemQuantity = itemQuantity + 1)"
                    >
                      <FontAwesomeIcon :icon="faPlus" />
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-auto">
                <button
                  class="button h-50 px-45 -purple-1 text-white"
                  @click="() => addProductToCart(currentItem.id)"
                >
                  {{
                    isAddedToCartProducts(currentItem.id)
                      ? "Already Added"
                      : "Add To Cart"
                  }}
                </button>
              </div>
            </div>

            <div class="pt-30">
              <button class="d-flex items-center text-light-1">
                <i class="icon size-20 mr-8" data-feather="heart"></i>
                Add to withlist
              </button>
            </div>

            <div class="pt-30">
              <p>Category: Classic</p>
              <p>Tags: Men, Sports, Women</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="layout-pt-md layout-pb-md">
    <div class="tabs -active-purple-1 js-tabs">
      <div class="row pt-30 border-top-dark">
        <div class="col-12">
          <div class="tabs__controls d-flex justify-center js-tabs-controls">
            <button
              :class="`tabs__button js-tabs-button ${
                activeTab == 1 ? 'is-active' : ''
              } `"
              type="button"
              @click="() => (activeTab = 1)"
            >
              Description
            </button>
            <button
              :class="`tabs__button js-tabs-button ml-30  ${
                activeTab == 2 ? 'is-active' : ''
              } `"
              type="button"
              @click="() => (activeTab = 2)"
            >
              Reviews (2)
            </button>
          </div>
        </div>

        <div class="container pt-60">
          <div class="row justify-center">
            <div class="col-xl-8 col-lg-10 justify-center">
              <div class="tabs__content js-tabs-content lg:px-15 md:px-15">
                <div
                  :class="`tabs__pane -tab-item-1  ${
                    activeTab == 1 ? 'is-active' : ''
                  } `"
                >
                  <h4 class="text-18 fw-500">What makes a good brand book?</h4>
                  <p class="mt-30">
                    Sed viverra ipsum nunc aliquet bibendum enim facilisis
                    gravida. Diam phasellus vestibulum lorem sed risus
                    ultricies. Magna sit amet purus gravida quis blandit. Arcu
                    cursus vitae congue mauris. Nunc mattis enim ut tellus
                    elementum sagittis vitae et leo. Semper risus in hendrerit
                    gravida rutrum quisque non. At urna condimentum mattis
                    pellentesque id nibh tortor. A erat nam at lectus urna duis
                    convallis convallis tellus. Sit amet mauris commodo quis
                    imperdiet massa. Vitae congue eu consequat ac felis.
                  </p>
                </div>

                <div
                  :class="`tabs__pane -tab-item-2  ${
                    activeTab == 2 ? 'is-active' : ''
                  } `"
                >
                  <div class="blogPost -comments">
                    <div class="blogPost__content">
                      <h2 class="text-20 fw-500">Reviews</h2>

                      <ul class="comments__list mt-30">
                        <li class="comments__item">
                          <div class="comments__item-inner md:direction-column">
                            <div class="comments__img mr-20">
                              <div
                                class="bg-image rounded-full js-lazy"
                                :style="{
                                  backgroundImage:
                                    'url(/assets/img/avatars/1.png)',
                                }"
                              ></div>
                            </div>

                            <div class="comments__body md:mt-15">
                              <div class="comments__header">
                                <h4 class="text-17 fw-500 lh-15">
                                  Ali Tufan
                                  <span class="text-13 text-light-1 fw-400">
                                    3 Days ago
                                  </span>
                                </h4>

                                <div class="stars"></div>
                              </div>

                              <h5 class="text-15 fw-500 mt-15">
                                The best LMS Design
                              </h5>
                              <div class="comments__text mt-10">
                                <p>
                                  This course is a very applicable. Professor Ng
                                  explains precisely each algorithm and even
                                  tries to give an intuition for mathematical
                                  and statistic concepts behind each algorithm.
                                  Thank you very much.
                                </p>
                              </div>

                              <div class="comments__helpful mt-20">
                                <span class="text-13 text-purple-1">
                                  Was this review helpful?
                                </span>
                                <button
                                  class="button text-13 -sm -purple-1 text-white"
                                >
                                  Yes
                                </button>
                                <button
                                  class="button text-13 -sm -light-7 text-purple-1"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li class="comments__item">
                          <div class="comments__item-inner md:direction-column">
                            <div class="comments__img mr-20">
                              <div
                                class="bg-image rounded-full js-lazy"
                                :style="{
                                  backgroundImage:
                                    'url(/assets/img/avatars/1.png)',
                                }"
                              ></div>
                            </div>

                            <div class="comments__body md:mt-15">
                              <div class="comments__header">
                                <h4 class="text-17 fw-500 lh-15">
                                  Ali Tufan
                                  <span class="text-13 text-light-1 fw-400">
                                    3 Days ago
                                  </span>
                                </h4>

                                <div class="stars"></div>
                              </div>

                              <h5 class="text-15 fw-500 mt-15">
                                The best LMS Design
                              </h5>
                              <div class="comments__text mt-10">
                                <p>
                                  This course is a very applicable. Professor Ng
                                  explains precisely each algorithm and even
                                  tries to give an intuition for mathematical
                                  and statistic concepts behind each algorithm.
                                  Thank you very much.
                                </p>
                              </div>

                              <div class="comments__helpful mt-20">
                                <span class="text-13 text-purple-1">
                                  Was this review helpful?
                                </span>
                                <button
                                  class="button text-13 -sm -purple-1 text-white"
                                >
                                  Yes
                                </button>
                                <button
                                  class="button text-13 -sm -light-7 text-purple-1"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="respondForm pt-30">
                    <h3 class="text-20 fw-500">Write a Review</h3>

                    <div class="mt-30">
                      <h4 class="text-16 fw-500">What is it like to Course?</h4>
                      <div class="d-flex x-gap-10 pt-10">
                        <div class="icon-star text-14 text-yellow-1"></div>
                        <div class="icon-star text-14 text-yellow-1"></div>
                        <div class="icon-star text-14 text-yellow-1"></div>
                        <div class="icon-star text-14 text-yellow-1"></div>
                        <div class="icon-star text-14 text-yellow-1"></div>
                      </div>
                    </div>

                    <form
                      class="contact-form respondForm__form row y-gap-30 pt-30"
                      @submit.prevent="handleSubmit"
                    >
                      <div class="col-12">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Review Title
                        </label>
                        <input
                          required
                          type="text"
                          name="title"
                          placeholder="Great Courses"
                        />
                      </div>
                      <div class="col-12">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Review Content
                        </label>
                        <textarea
                          required
                          name="comment"
                          placeholder="Message"
                          rows="8"
                        ></textarea>
                      </div>
                      <div class="col-12">
                        <button
                          type="submit"
                          name="submit"
                          id="submit"
                          class="button -md -purple-1 text-white"
                        >
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ImageLightBox
    :currentSlideIndex="currentSlideIndex"
    @setCurrentSlideIndex="setCurrentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
    :activeLightBox="activeLightBox"
    :images="pageItems"
  />
</template>

<script setup>
const props = defineProps(["id"]);
import {
  addProductToCart,
  isAddedToCartProducts,
} from "../../composables/states";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { productData } from "@/data/products";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ImageLightBox from "./ImageLightBox";
const swiperRef = ref(null);
const currentSlideIndex = ref(0);
const itemQuantity = ref(1);
const pageItems = ref([]);
const currentItem = ref({});
const activeLightBox = ref(false);
const activeTab = ref(1);
const handleSubmit = () => {};

const setCurrentSlideIndex = (val) => {
  currentSlideIndex.value = val;
};
const setActiveLightBox = (val) => {
  activeLightBox.value = val;
};

onMounted(() => {
  const item =
    productData.filter((elm) => elm.id == props.id)[0] || productData[0];
  currentItem.value = item;
  const OtherItems = productData.filter((elm) => elm != item).slice(0, 3);
  pageItems.value = [item, ...OtherItems];
  if (swiperRef.value) {
    swiperRef.value.slideTo(1);
  }
});

const handlePaginationClick = (index) => {
  currentSlideIndex.value = index;

  if (swiperRef.value) {
    swiperRef.value.slideTo(index + 1);
  }
};

const handleSlideChange = (swiper) => {
  if (swiper.activeIndex > 4) {
    if (currentSlideIndex < swiper.activeIndex) {
      currentSlideIndex.value = 0;
    }
  } else if (swiper.activeIndex < 1) {
    currentSlideIndex.value = 3;
  } else {
    currentSlideIndex.value = swiper.activeIndex - 1;
  }
};

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
</script>

<style lang="scss" scoped></style>
