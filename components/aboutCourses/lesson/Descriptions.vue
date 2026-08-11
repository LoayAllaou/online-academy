<template>
  <div class="mt-60 lg:mt-40">
    <h4 class="text-18 fw-500">Description</h4>
    <p class="mt-30">
      Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut
      nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In
      libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed
      consequat justo non mauris pretium at tempor justo sodales. Quisque
      tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis
      parturient montes, nascetur.
      <br />
      <br />
      This course is aimed at people interested in UI/UX Design. We’ll start
      from the very beginning and work all the way through, step by step. If you
      already have some UI/UX Design experience but want to get up to speed
      using Adobe XD then this course is perfect for you too!
      <br />
      <br />
      First, we will go over the differences between UX and UI Design. We will
      look at what our brief for this real-world project is, then we will learn
      about low-fidelity wireframes and how to make use of existing UI design
      kits.
    </p>
    <button class="text-purple-1 fw-500 underline mt-30" @click="showMore">
      Show more
    </button>

    <div class="mt-60">
      <h4 class="text-20 mb-30">What you'll learn</h4>
      <div class="row x-gap-100 justfiy-between">
        <div class="col-md-6">
          <div class="y-gap-20">
            <div
              v-for="(elm, i) in learnList.slice(0, 6)"
              :key="i"
              class="d-flex items-center"
            >
              <div
                class="d-flex justify-center items-center border-light rounded-full size-20 mr-10"
              >
                <i class="icon-check text-6"></i>
              </div>
              <p>{{ elm }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="y-gap-20">
            <div
              v-for="(elm, i) in learnList.slice(6)"
              :key="i"
              class="d-flex items-center"
            >
              <div
                class="d-flex justify-center items-center border-light rounded-full size-20 mr-10"
              >
                <i class="icon-check text-6"></i>
              </div>
              <p>{{ elm }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-60">
      <h4 class="text-20">Requirements</h4>
      <ul class="ul-list y-gap-15 pt-30">
        <li v-for="(elm, i) in requirements" :key="i">{{ elm }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { learnList, requirements, lessonItems } from "@/data/aboutcourses";
</script>

<style lang="scss" scoped></style>
