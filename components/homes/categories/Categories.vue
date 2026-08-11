<template>
  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">{{ $t("Top Categories.title") }}</h2>
            <p class="sectionTitle__text">
              {{ $t("Top Categories.description") }}
            </p>
          </div>
        </div>
      </div>
      <div class="overflow-hidden pt-50 js-section-slider" data-aos="fade-left">
        <ClientOnly>
          <Swiper 
          :modules="[Navigation, Pagination]"
          :pagination="{ el: '.swiper-paginationx', clickable: true }"
          :navigation="{
            nextEl: '.arrow-right-one',
            prevEl: '.arrow-left-one',
          }"
          :space-between="30"
          :slides-per-view="1"
          :breakpoints="{
            450: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
          }"
          :loop="false"
        >
          <SwiperSlide v-for="(item, i) in store?.categories" :key="i">
            <nuxt-link
              :to="`/courses-list-${item.id > 8 ? 1 : item.id}`"
              
              class="featureCard -type-1 -featureCard-hover linkCustomTwo"
            >
              <div class="featureCard__content">
                <div class="featureCard__icon">
                  <nuxt-img
                    :src="`/assets/img/featureCards/${item.id}.svg`"
                    width="45"
                    height="45"
                    alt="icon"
                    />
                   <!-- <nuxt-img
                    :src="item.iconSrc"
                    width="45"
                    height="45"
                    alt="icon"
                  /> -->
                </div>
                <div class="featureCard__title">
                  {{ $i18n.locale === 'ar' ? item.nameAr : item.nameEn.split(" ")[0] }} <br />
                  {{ $i18n.locale === 'ar' ? '' : (item.nameEn.split(" ")[1] && item.nameEn.split(" ")[1]) }}
                </div>
                <div class="featureCard__text">{{ item.id }}</div>
              </div>
            </nuxt-link>
          </SwiperSlide>
        </Swiper></ClientOnly>


        <div class="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
          <div class="col-auto">
            <button
              class="d-flex items-center text-24 arrow-left-hover js-prev"
            >
              <i class="icon icon-arrow-left arrow-left-one"></i>
            </button>
          </div>
          <div class="col-auto">
            <div class="swiper-paginationx"></div>
          </div>
          <div class="col-auto">
            <button
              class="d-flex items-center text-24 arrow-right-hover js-next"
            >
              <i class="icon icon-arrow-right arrow-right-one"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { topCategories } from "~/data/topCategories";
import { useCategoryStore } from '@/stores/categoryStore'

const store = useCategoryStore()

onMounted(async () => {
  const topCategories = await store.fetchCategories()
  console.log('Fetched categories:', topCategories);
})

</script>
