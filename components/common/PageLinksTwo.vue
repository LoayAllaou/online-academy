<template>
  <div class="breadcrumbs mt-10 pt-0 pb-0">
    <div class="breadcrumbs__content">
      <div class="breadcrumbs__item">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
      <div class="breadcrumbs__item">
        <nuxt-link to="/courses-list-3">All courses</nuxt-link>
      </div>
      <div class="breadcrumbs__item">
        <nuxt-link :to="`/courses/${5}`">User Experience Design</nuxt-link>
      </div>
      <div class="breadcrumbs__item">
        <nuxt-link :to="`/courses/${3}`">User Interface</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your component-specific styles here */
</style>
