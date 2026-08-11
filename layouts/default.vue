<template>
    <!-- Add dynamic dir attribute here -->
  <div :dir="direction">
    <slot />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Educrat - Professional LMS Online Education Course NuxtJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
})
import { useI18n } from 'vue-i18n'
import AOS from 'aos';

//for User
import { useUserStore } from '~/stores/userStore'
import { useCartStore } from '@/stores/cartStore';

const userStore = useUserStore()
const cartStore = useCartStore()
// userStore.loadUserFromStorage()

// import 'aos/dist/aos.css'; // Import the AOS CSS
// Get current locale from vue-i18n
const { locale } = useI18n()

// Direction computed based on selected locale
const direction = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
onMounted(() => {
 AOS.init({
   duration: 1400,
   once: true,
 });
 userStore.loadUserFromStorage()
});

//Load cart
cartStore.loadUserCart();
</script>
<style lang="scss"  >

@import "../public/assets/css/vendors.css";
@import "../public/assets/css/main.css";
@import "../public/assets/sass/custom.scss";
@import 'swiper/scss';
@import 'swiper/scss/navigation';
@import 'swiper/scss/pagination';
@import 'swiper/css/effect-cards';
@import 'aos/dist/aos';

</style>