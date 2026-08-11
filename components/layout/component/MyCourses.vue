<template>
  <div class="relative">
    <a
      href="#"
      class="d-flex items-center text-dark-1 ml-20"
      data-el-toggle=".js-courses-toggle"
      @click="() => setIsActive()"
    >
      My Courses <i class="text-9 icon-chevron-down ml-10"></i>
    </a>

    <div
      :class="`toggle-element js-courses-toggle ${
        isActive ? '-is-el-visible' : ''
      } `"
    >
      <div
        class="toggle-bottom -courses bg-white -dark-bg-dark-1 shadow-4 border-light rounded-8 mt-20"
      >
        <div class="px-30 py-30">
          <div class="d-flex mb-20">
            <nuxt-img
              width="80"
              height="80"
              class="size-80 fit-cover"
              src="/assets/img/menus/cart/1.png"
              alt="image"
            />

            <div class="ml-15">
              <div class="text-dark-1 lh-15 fw-500">
                Complete Python Bootcamp From Zero to Hero in Python
              </div>
              <div class="progress-bar mt-20">
                <div class="progress-bar__bg bg-light-3"></div>
                <div class="progress-bar__bar bg-purple-1 w-1/3"></div>
              </div>
            </div>
          </div>

          <div class="d-flex mb-20">
            <nuxt-img
              width="80"
              height="80"
              class="size-80 fit-cover"
              src="/assets/img/menus/cart/2.png"
              alt="image"
            />

            <div class="ml-15">
              <div class="text-dark-1 lh-15 fw-500">
                The Ultimate Drawing Course Beginner to Advanced
              </div>
              <div class="progress-bar mt-20">
                <div class="progress-bar__bg bg-light-3"></div>
                <div class="progress-bar__bar bg-purple-1 w-1/3"></div>
              </div>
            </div>
          </div>

          <div class="mt-20">
            <a
              href="#"
              class="button py-20 -dark-1 text-white -dark-bg-purple-1 -dark-border-dark-2 col-12"
            >
              Go to My Learning
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(false);
const setIsActive = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped></style>
