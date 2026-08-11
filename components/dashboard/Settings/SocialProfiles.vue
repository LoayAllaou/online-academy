<template>
  <div :class="`tabs__pane -tab-item-3 ${activeTab == 3 ? 'is-active' : ''} `">
    <form @submit.prevent="handleSubmit" class="contact-form row y-gap-30">
      <div class="col-md-6">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"> Twitter </label>

        <input required type="text" placeholder="Twitter Profile" />
      </div>

      <div class="col-md-6">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"> Facebook </label>

        <input required type="text" placeholder="Facebook Profile" />
      </div>

      <div class="col-md-6">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"> Instagram </label>

        <input required type="text" placeholder="Instagram Profile" />
      </div>

      <div class="col-md-6">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
          LinkedIn Profile URL
        </label>

        <input required type="text" placeholder="LinkedIn Profile" />
      </div>

      <div class="col-12">
        <button class="button -md -purple-1 text-white">
          Save Social Profile
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(["activeTab"]);
const handleSubmit = () => {
  // Implement form submission logic
};
</script>

<style lang="scss" scoped></style>
