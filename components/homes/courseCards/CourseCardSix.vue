<template>
  <div class="col-lg-6">
    <div
      class="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
    >
      <div class="coursesCard__image max-w-250 rounded-8">
        <nuxt-img
          width="250"
          height="175"
          class="w-1/1 rounded-8"
          :src="data.imageSrc"
          alt="image"
        ></nuxt-img>
      </div>

      <div class="coursesCard__content pl-20 sm:pl-10 pr-10">
        <div class="coursesCard__stars">
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
        </div>
        <div class="text-17 lh-13 fw-500 text-dark-1 mt-10">
          <nuxt-link class="linkCustom" :to="`/courses/${data.id}`">{{
            data.title
          }}</nuxt-link>
        </div>

        <div class="d-flex x-gap-15 items-center py-10">
          <div class="d-flex items-center">
            <div class="mr-10">
              <nuxt-img
                width="16"
                height="17"
                src="assets/img/coursesCards/icons/1.svg"
                alt="icon"
              ></nuxt-img>
            </div>
            <div class="text-14 lh-1">{{ data.lessonCount }} lesson</div>
          </div>

          <div class="d-flex items-center">
            <div class="mr-10">
              <nuxt-img
                width="16"
                height="17"
                src="assets/img/coursesCards/icons/2.svg"
                alt="icon"
              ></nuxt-img>
            </div>
            <div class="text-14 lh-1 text-light-1">
              {{
                `${Math.floor(data.duration / 60)}h ${Math.floor(
                  data.duration % 60,
                )}m`
              }}
            </div>
          </div>

          <div class="d-flex items-center">
            <div class="mr-10">
              <nuxt-img
                width="16"
                height="17"
                src="assets/img/coursesCards/icons/3.svg"
                alt="icon"
              ></nuxt-img>
            </div>
            <div class="text-14 lh-1 text-light-1">{{ data.level }}</div>
          </div>
        </div>

        <div class="d-flex justify-between items-center pt-10 border-top-light">
          <div class="d-flex items-center">
            <nuxt-img
              width="30"
              height="30"
              :src="data.authorImageSrc"
              alt="image"
            ></nuxt-img>
            <div class="text-light-1 ml-10">{{ data.authorName }}</div>
          </div>

          <div class="d-flex items-center">
            <template v-if="data.paid">
              <div class="fw-500 mr-10 line-through text-light-1">
                ${{ data.originalPrice }}
              </div>
              <div class="text-18 fw-500 text-dark-1">
                ${{ data.discountedPrice }}
              </div>
            </template>
            <template v-else>
              <div></div>
              <div class="text-18 fw-500 text-dark-1">Free</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const rating = ref([]);
const props = defineProps(["data", "index"]);
onMounted(() => {
  for (let i = Math.round(props.data.rating); i >= 1; i--) {
    rating.value.push("star");
  }
});
</script>
