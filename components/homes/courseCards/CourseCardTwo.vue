<template>
  <div class="col-lg-3 col-md-6">
    <div>
      <div class="coursesCard -type-1 -hover-shadow border-light rounded-8">
        <div class="relative">
          <div class="coursesCard__image overflow-hidden rounded-top-8">
            <nuxt-img
              width="451"
              height="316"
              class="w-1/1"
              :src="props.data.imageSrc"
              alt="image"
            ></nuxt-img>
            <div class="coursesCard__image_overlay rounded-top-8"></div>
          </div>
          <div
            v-if="props.data.popular"
            class="d-flex justify-between py-10 px-10 absolute-full-center z-3"
          >
            <div>
              <div class="px-15 rounded-200 bg-purple-1">
                <span class="text-11 lh-1 uppercase fw-500 text-white">
                  Popular
                </span>
              </div>
            </div>

            <div>
              <div class="px-15 rounded-200 bg-green-1">
                <span class="text-11 lh-1 uppercase fw-500 text-dark-1">
                  Best sellers
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="h-100 pt-15 pb-10 px-20">
          <div class="d-flex items-center">
            <div class="text-14 lh-1 text-yellow-1 mr-10">
              {{ props.data.rating }}
            </div>
            <div class="d-flex x-gap-5 items-center">
              <div
                v-for="(itm, i) in rating"
                :key="i"
                class="icon-star text-9 text-yellow-1"
              ></div>
            </div>
            <div class="text-13 lh-1 ml-10">({{ props.data.ratingCount }})</div>
          </div>

          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
            <nuxt-link class="linkCustom" :to="`/courses/${props.data.id}`">{{
              props.data.title
            }}</nuxt-link>
          </div>

          <div class="d-flex x-gap-10 items-center pt-10">
            <div class="d-flex items-center">
              <div class="mr-8">
                <nuxt-img
                  width="16"
                  height="17"
                  src="/assets/img/coursesCards/icons/1.svg"
                  alt="icon"
                ></nuxt-img>
              </div>
              <div class="text-14 lh-1">
                {{ props.data.lessonCount }} lesson
              </div>
            </div>

            <div class="d-flex items-center">
              <div class="mr-8">
                <nuxt-img
                  width="16"
                  height="17"
                  src="/assets/img/coursesCards/icons/2.svg"
                  alt="icon"
                ></nuxt-img>
              </div>
              <div class="text-14 lh-1">
                {{
                  `${Math.floor(props.data.duration / 60)}h ${Math.floor(
                    props.data.duration % 60,
                  )}m`
                }}
              </div>
            </div>

            <div class="d-flex items-center">
              <div class="mr-8">
                <nuxt-img
                  width="16"
                  height="17"
                  src="/assets/img/coursesCards/icons/3.svg"
                  alt="icon"
                ></nuxt-img>
              </div>
              <div class="text-14 lh-1">{{ props.data.level }}</div>
            </div>
          </div>

          <div class="coursesCard-footer">
            <div class="coursesCard-footer__author">
              <nuxt-img
                width="30"
                height="30"
                :src="props.data.authorImageSrc"
                alt="image"
              ></nuxt-img>
              <div>{{ props.data.authorName || "Ali Tufan" }}</div>
            </div>

            <div class="coursesCard-footer__price">
              <template v-if="props.data.paid">
                <div>${{ props.data.originalPrice }}</div>
                <div>${{ props.data.discountedPrice }}</div>
              </template>
              <template v-else>
                <div></div>
                <div>Free</div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["data", "index"]);
const rating = ref([]);

onMounted(() => {
  for (let i = Math.round(props.data.rating); i >= 1; i--) {
    rating.value.push("star");
  }
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
