<template>
  <div
    :class="`col-lg-4 col-md-6 ${data.id === 1 ? 'offset-xl-1' : ''}`"
    style="height: fit-content"
  >
    <div>
      <div class="coursesCard -type-1 shadow-3 rounded-8 bg-white">
        <div class="relative">
          <div class="coursesCard__image overflow-hidden rounded-8">
            <nuxt-img
              width="451"
              height="316"
              class="w-1/1"
              :src="data.imageSrc"
              alt="image"
            />
            <div class="coursesCard__image_overlay rounded-8"></div>
          </div>
          <div
            v-if="data.new"
            class="d-flex justify-between py-10 px-10 absolute-full-center z-3"
          >
            <div>
              <div class="px-15 rounded-200 bg-orange-1">
                <span class="text-11 lh-1 uppercase fw-500 text-white"
                  >New</span
                >
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-between py-10 px-10 absolute-full-center z-3"
          ></div>
        </div>

        <div class="h-100 pt-20 pb-15 pl-30 pr-40">
          <div class="d-flex items-center">
            <div class="text-14 lh-1 text-yellow-1 mr-10">
              {{ data.rating }}
            </div>
            <div class="d-flex x-gap-5 items-center">
              <div
                v-for="(itm, i) in rating"
                :key="i"
                class="icon-star text-9 text-yellow-1"
              ></div>
            </div>
            <div class="text-13 lh-1 ml-10">({{ data.ratingCount }})</div>
          </div>

          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
            <nuxt-link :to="`/courses/${data.id}`" class="linkCustom">
              {{ data.title }}
            </nuxt-link>
          </div>

          <div class="d-flex x-gap-10 items-center pt-10">
            <div class="d-flex items-center">
              <div class="mr-8">
                <nuxt-img
                  width="16"
                  height="17"
                  src="assets/img/coursesCards/icons/1.svg"
                  alt="icon"
                />
              </div>
              <div class="text-14 lh-1">{{ data.lessonCount }} lesson</div>
            </div>

            <div class="d-flex items-center">
              <div class="mr-8">
                <nuxt-img
                  width="16"
                  height="17"
                  src="assets/img/coursesCards/icons/2.svg"
                  alt="icon"
                />
              </div>
              <div class="text-14 lh-1">
                {{
                  `${Math.floor(data.duration / 60)}h ${Math.floor(
                    data.duration % 60,
                  )}m`
                }}
              </div>
            </div>

            <div class="d-flex items-center">
              <div class="mr-8">
                <nuxt-img
                  width="16"
                  height="17"
                  src="assets/img/coursesCards/icons/3.svg"
                  alt="icon"
                />
              </div>
              <div class="text-14 lh-1">{{ data.level }}</div>
            </div>
          </div>

          <div class="coursesCard-footer">
            <div class="coursesCard-footer__author">
              <nuxt-img
                width="30"
                height="30"
                :src="data.authorImageSrc"
                alt="image"
              />
              <div>{{ data.authorName }}</div>
            </div>

            <div class="coursesCard-footer__price">
              <template v-if="data.paid">
                <div>${{ data.originalPrice }}</div>
                <div>${{ data.discountedPrice }}</div>
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
import {ref, onMounted } from "vue";

const props = defineProps(["data"]);
const rating = ref([]);

onMounted(() => {
  for (let i = Math.round(props.data.rating); i >= 1; i--) {
    rating.value.push("star");
  }
});
</script>
