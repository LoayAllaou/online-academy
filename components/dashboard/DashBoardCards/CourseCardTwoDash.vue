<!-- components/CourseCardTwoDash.vue -->

<template>
  <div class="col-xl-6">
    <nuxt-link
      :to="`/courses/${data.id}`"
      class="relative d-block rounded-8 px-10 py-10 border-light"
    >
      <div class="row x-gap-20 y-gap-20 items-center">
        <div class="col-md-auto">
          <div class="shrink-0">
            <nuxt-img
              width="550"
              height="420"
              class="w-1/1"
              :src="data.imageSrc"
              alt="image"
            />
          </div>
        </div>

        <div class="col-md">
          <div class="absolute-bookmark -dark-bg-dark-2 shadow-5">
            <i class="icon-bookmark"></i>
          </div>

          <div class="d-flex items-center">
            <div class="text-14 lh-1 fw-500 text-yellow-1 mr-10">4.5</div>
            <div class="d-flex x-gap-5 items-center">
              <div
                v-for="(itm, i) in rating"
                :key="i"
                class="icon-star text-9 text-yellow-1"
              ></div>
            </div>
            <div class="text-13 lh-1 fw-500 ml-10">
              ({{ data.ratingCount }})
            </div>
          </div>

          <h3 class="text-17 lh-16 fw-500 mt-10 pr-40 xl:pr-0">
            {{ data.title }}
          </h3>

          <div class="d-flex x-gap-20 y-gap-5 items-center flex-wrap pt-10">
            <div class="d-flex items-center">
              <div class="mr-10">
                <nuxt-img
                  width="16"
                  height="17"
                  src="/assets/img/coursesCards/icons/1.svg"
                  alt="icon"
                />
              </div>
              <div class="text-14 lh-1">{{ data.lessonCount }} lesson</div>
            </div>

            <div class="d-flex items-center">
              <div class="mr-10">
                <nuxt-img
                  width="16"
                  height="17"
                  src="/assets/img/coursesCards/icons/2.svg"
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
              <div class="mr-10">
                <nuxt-img
                  width="16"
                  height="17"
                  src="/assets/img/coursesCards/icons/3.svg"
                  alt="icon"
                />
              </div>
              <div class="text-14 lh-1">{{ data.level }}</div>
            </div>
          </div>

          <div
            class="d-flex y-gap-10 justify-between items-center flex-wrap border-top-light pt-10 mt-10"
          >
            <div class="d-flex items-center">
              <nuxt-img
                width="30"
                height="30"
                :src="data.authorImageSrc"
                alt="image"
              />
              <div class="text-14 lh-1 ml-10">{{ data.authorName }}</div>
            </div>

            <div class="d-flex items-center">
              <template v-if="data.paid">
                <div class="line-through lh-1 fw-500 mr-10">
                  ${{ data.originalPrice }}
                </div>
                <div class="text-18 lh-1 fw-500 text-dark-1">
                  ${{ data.discountedPrice }}
                </div>
              </template>
              <template v-else>
                <div></div>
                <div class="text-18 lh-1 fw-500 text-dark-1">Free</div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["data"]);

const rating = ref([]);

onMounted(() => {
  for (let i = Math.floor(props.data.rating); i >= 1; i--) {
    rating.value.push("star");
  }
});
</script>
