<template>
  <div id="instructors" class="pt-60 lg:pt-40">
    <h2 class="text-20 fw-500">Instructor</h2>
    <div class="mt-30">
      <div class="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
        <div class="size-120">
          <nuxt-img
            width="100"
            height="100"
            class="object-cover"
            :src="data?.profileImageUrl || '/assets/img/misc/verified/1.png'"
            alt="image"
          />
        </div>

        <div class="">
          <h5 class="text-17 lh-14 fw-500">{{ data?.fullName }}</h5>
          <p class="mt-5">{{ data?.position }}</p>

          <div class="d-flex x-gap-20 y-gap-10 flex-wrap items-center pt-10">
            <div class="d-flex items-center">
              <div class="d-flex items-center mr-8">
                <div class="icon-star text-11 text-yellow-1"></div>
                <div class="text-14 lh-12 text-yellow-1 ml-5">4.5</div>
              </div>
              <div class="text-13 lh-1">Instructor Rating</div>
            </div>

            <div class="d-flex items-center text-light-1">
              <div class="icon-comment text-13 mr-8"></div>
              <div class="text-13 lh-1">23,987 Reviews</div>
            </div>

            <div class="d-flex items-center text-light-1">
              <div class="icon-person-3 text-13 mr-8"></div>
              <div class="text-13 lh-1">692 Students</div>
            </div>

            <div class="d-flex items-center text-light-1">
              <div class="icon-wall-clock text-13 mr-8"></div>
              <div class="text-13 lh-1">15 Course</div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-30">
        <p>
          Back in 2010, I started brainspin with a desire to design compelling
          and engaging apps. For over 7 years, I have designed many high profile
          web and iPhone applications. The applications range from 3D medical
          aided web applications to project management applications for niche
          industries.
          <br />
          <br />I am also the founder of a large local design organization, Salt
          Lake Designers, where I and other local influencers help cultivate the
          talents of up and coming UX designers through workshops and panel
          discussions.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
</script>
