<!-- components/FooterLinksThree.vue -->
<template>
  <div
    v-for="(elm, i) in footerLinks.slice(0, 3)"
    :key="i"
    :class="parentClass || 'col-xl-4 col-lg-4 col-md-6'"
  >
    <div :class="allClasses">{{ elm.title }}</div>
    <div class="d-flex y-gap-10 flex-column">
      <nuxt-link v-for="(itm, i2) in elm.links" :key="i2" :to="itm.href">
        {{ itm.label }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { footerLinks } from "../../../data/footerLinks";


const props = defineProps(["allClasses", "parentClass"]);
</script>
