<template>
  <div class="col-lg-3 col-md-6">
    <div>
      <div class="coursesCard -type-1">
        <div class="relative">
          <div class="coursesCard__image overflow-hidden rounded-8">
            <nuxt-img
              width="451"
              height="316"
              style="height: 100%; width: 100%"
              class="w-1/1"
              :src="data.thumbnailUrl || '/assets/img/coursesCards/1.png'"
              alt="image"
            ></nuxt-img>
            <div class="coursesCard__image_overlay rounded-8"></div>
          </div>
          <div
            v-if="data.popular"
            class="d-flex justify-between py-10 px-10 absolute-full-center z-3"
          >
            <div>
              <div class="px-15 rounded-200 bg-purple-1">
                <span class="text-11 lh-1 uppercase fw-500 text-white"
                  >Popular</span
                >
              </div>
            </div>
            <div>
              <div class="px-15 rounded-200 bg-green-1">
                <span class="text-11 lh-1 uppercase fw-500 text-dark-1"
                  >Best sellers</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="h-100 pt-15">
          <div class="d-flex items-center">
            <div class="text-14 lh-1 text-yellow-1 mr-10">
              {{ data.averageRating.toFixed(1) }}
            </div>
            <div class="d-flex x-gap-5 items-center">
              <div
                v-for="(itm, i) in averageRating"
                :key="i"
                class="icon-star text-9 text-yellow-1"
              ></div>
            </div>
            <div class="text-13 lh-1 ml-10">({{ data.totalRatings }})</div>
          </div>

          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
            <nuxt-link class="linkCustom" :to="`/courses-single-6/${data.id}`">{{
              $i18n.locale === 'ar' ? data.titleAr : data.titleEn
            }}</nuxt-link>
          </div>

          <div class="d-flex x-gap-10 items-center pt-10">
            <div class="d-flex items-center">
              <div class="mr-8">
                <nuxt-img
                  width="16"
                  height="17"
                  src="assets/img/coursesCards/icons/1.svg"
                  alt="icon"
                ></nuxt-img>
              </div>
              <div class="text-14 lh-1">{{ data.totalLessons }} lesson</div>
            </div>
            <div class="d-flex items-center">
              <div class="mr-8">
                <nuxt-img
                  width="16"
                  height="17"
                  src="assets/img/coursesCards/icons/2.svg"
                  alt="icon"
                ></nuxt-img>
              </div>
              <div class="text-14 lh-1">
                {{
                  `${Math.floor(data.totalDurationInMinutes / 60)}h ${Math.floor(
                    data.totalDurationInMinutes % 60,
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
                ></nuxt-img>
              </div>
              <div class="text-14 lh-1">{{ data.level }}</div>
            </div>
          </div>

          <div class="coursesCard-footer">
            <div class="coursesCard-footer__author">
              <nuxt-img
                width="30"
                height="30"
                :src="data.authorImageSrc || '/assets/img/general/avatar-1.png'"
                alt="image"
              ></nuxt-img>
              <div>{{ data.instructor.fullName }}</div>
            </div>
            <div class="coursesCard-footer__price">
              <template v-if="data.isPaid">
                <div>${{ data.price }}</div>
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
import { ref, onMounted } from "vue";

const averageRating = ref([]);
const props = defineProps(["data", "index"]);

onMounted(() => {
  for (let i = Math.round(props.data.averageRating); i >= 1; i--) {
    averageRating.value.push("star");
  }
});
props.data.discountedPrice = props.data.discountedPrice || props.data.price;
</script>
