<template>
  <div class="sidebar -dashboard">
    <div
      v-for="(elm, i) in sidebarItems"
      :key="i"
      :class="{ '-is-active': pathname === elm.href }"
      class="sidebar__item"
    >
      <nuxt-link :to="elm.href" class="d-flex items-center text-17 lh-1 fw-500">
        <i :class="`${elm.iconClass} mr-15`"></i>
        {{ elm.text }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { sidebarItems } from "@/data/dashBoardSidebar";
import { useRoute } from "vue-router";

const pathname = ref("");
const route = useRoute();

onMounted(() => {
  pathname.value = route.path;
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
