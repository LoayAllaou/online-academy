<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Upcoming Events</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 pt-60 lg:pt-40">
        <div
          v-for="(elm, i) in events.slice(0, 6)"
          :key="i"
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="(i + 1) * 350"
        >
          <div
            class="py-10 pl-10 pr-20 border-light bg-white rounded-8 shadow-1 -button-hover-1"
          >
            <div class="row y-gap-20 items-center">
              <div class="col-auto">
                <div class="size-120">
                  <nuxt-img
                    width="120"
                    height="120"
                    class="img-full rounded-8"
                    :src="elm.imgSrc"
                    alt="icon"
                  />
                </div>
              </div>

              <div class="col">
                <div class="row y-gap-20 items-center">
                  <div class="col">
                    <h4 class="text-17 lh-15 fw-500">
                      <nuxt-link class="linkCustom" :to="`/events/${elm.id}`">
                        {{ elm.desc }}
                      </nuxt-link>
                    </h4>
                    <div class="d-flex x-gap-15 items-center pt-10">
                      <div class="d-flex items-center text-light-1">
                        <div class="icon-calendar-2 text-16"></div>
                        <div class="text-14 lh-1 ml-8">{{ elm.date }}</div>
                      </div>
                      <div class="d-flex items-center text-light-1">
                        <div class="icon-location text-16"></div>
                        <div class="text-14 lh-1 ml-8">{{ elm.location }}</div>
                      </div>
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="-button-hover-1__button">
                      <nuxt-link
                        :to="`/events/${elm.id}`"
                        class="button -icon -orange-1 text-white"
                      >
                        Buy
                        <i class="icon-arrow-top-right text-13 ml-10"></i>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { events } from "@/data/events";
</script>
