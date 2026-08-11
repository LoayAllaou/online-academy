<template>
  <section :class="`breadcrumbs ${dark ? 'bg-dark-1' : ''}`">
    <div class="container page-links">
      <div class="row">
        <div class="col-auto">
          <div class="breadcrumbs__content">
            <div :class="`breadcrumbs__item ${dark ? 'text-dark-3' : ''}`">
              <nuxt-link to="/">Home</nuxt-link>
            </div>

            <div :class="`breadcrumbs__item ${dark ? 'text-dark-3' : ''}`">
              <nuxt-link to="/courses-list-3">All courses</nuxt-link>
            </div>

            <div :class="`breadcrumbs__item ${dark ? 'text-dark-3' : ''}`">
              <nuxt-link to="/courses-list-5">User Experience Design</nuxt-link>
            </div>

            <div :class="`breadcrumbs__item ${dark ? 'text-dark-3' : ''}`">
              <nuxt-link to="/courses-list-6">User Interface</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["dark"]);
</script>

<style scoped>
/* Add your component-specific styles here */
.page-links {
  padding-top: 15px;
}
</style>
