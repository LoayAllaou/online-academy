<!-- components/CartToggle.vue -->
<template>
  <div :class="parentClassess">
    <button
      style="position: relative"
      @click="toggleCart"
      :class="allClasses"
      data-el-toggle=".js-cart-toggle"
    >
      <i class="text-20 icon icon-basket"></i>
      <div class="cartProductCount">
        <template v-if="submenu === 'Shop'">
          {{ cartProductsLength > 9 ? "9+" : cartProductsLength }}
        </template>
        <template v-else-if="menuItem === 'Events'">
          {{ cartEventsLength > 9 ? "9+" : cartEventsLength }}
        </template>
        <template v-else>
          {{ cartCoursesLength > 9 ? "9+" : cartCoursesLength }}
        </template>
      </div>
    </button>

    <div
      :class="{ 'toggle-element': true, '-is-el-visible': activeCart }"
      class="js-cart-toggle"
    >
      <ShopCart v-if="submenu === 'Shop'" />
      <EventCart v-else-if="menuItem === 'Events'" />
      <CourseCart v-else />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { menuList } from "@/data/menu";
import CourseCart from "./CourseCart";
import {
  cartCourses,
  cartEvents,
  cartProducts,
} from "../../../composables/states";
import EventCart from "./EventCart.vue";
import ShopCart from "./ShopCart.vue";
import { useCartStore } from "@/stores/cartStore";

const cart = useCartStore();

const props = defineProps(["allClasses", "parentClassess"]);

const cartCoursesLength = computed(() => cart.cartCourses.length);
const cartEventsLength = computed(() => cart.cartEvents.length);
const cartProductsLength = computed(() => cart.cartProducts.length);

const activeCart = ref(false);
const menuItem = ref("");
const submenu = ref("");

const route = useRoute();

const toggleCart = () => {
  activeCart.value = !activeCart.value;
};

const updateMenuInfo = () => {
  const pathname = route.path;

  menuList.forEach((elm) => {
    elm?.links?.forEach((elm2) => {
      if (elm2.href?.split("/")[1] === pathname?.split("/")[1]) {
        menuItem.value = elm.title;
      } else {
        elm2?.links?.map((elm3) => {
          if (elm3.href?.split("/")[1] === pathname?.split("/")[1]) {
            menuItem.value = elm.title;
            submenu.value = elm2.title;
          }
        });
      }
    });
  });
};

onMounted(() => {
  updateMenuInfo();
});
watch(() => route.path, updateMenuInfo);
</script>
