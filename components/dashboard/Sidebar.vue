<template>
  <div class="sidebar -dashboard">
    <div
      v-for="(elm, i) in filteredSidebarItems"
      :key="i"
      :class="{ '-is-active': pathname === elm.href }"
      class="sidebar__item"
    >
      <NuxtLink
        :to="elm.href"
        class="d-flex items-center text-17 lh-1 fw-500"
      >
        <i :class="`${elm.iconClass} mr-15`"></i>
        {{ elm.text }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { sidebarItems } from "@/data/dashBoardSidebar";
import { useRoute } from "vue-router";
import { useUserStore } from '@/stores/userStore'

const pathname = ref("");
const route = useRoute();

const userStore = useUserStore();

const filteredSidebarItems = computed(() => {
  const role = userStore.role;
  
  return sidebarItems.filter((item) => {
    return item.roles?.includes(role);
  });
});

onMounted(() => {
  pathname.value = route.path;
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>