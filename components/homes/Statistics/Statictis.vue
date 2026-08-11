<template>
  <section class="layout-pt-lg layout-pb-lg bg-light-7">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-xl-6 col-lg-8 col-md-10">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">We are Proud</h2>
            <p class="sectionTitle__text">
              Certificate courses are instructed by highly educated and
              qualified instructors who hold doctoral and master’s level
              degrees.
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 pt-60 lg:pt-40">
        <div v-for="(elm, i) in counters" :key="i" class="col-lg-3 col-sm-6">
          <div
            class="counter -type-1"
            data-aos="`fade-left`"
            data-aos-duration="`${(i + 1) * 350}`"
          >
            <div class="counter__number text-purple-1">{{ elm.number }}</div>
            <div class="counter__title text-light-1">{{ elm.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { counters } from "@/data/count";
</script>
