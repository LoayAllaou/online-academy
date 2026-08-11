<template>
  <div :class="`tabs__pane -tab-item-2 ${activeTab == 2 ? 'is-active' : ''} `">
    <form @submit.prevent="handleSubmit" class="contact-form row y-gap-30">
      <div class="col-md-7">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
          Current password
        </label>

        <input required type="text" placeholder="Current password" />
      </div>

      <div class="col-md-7">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
          New password
        </label>

        <input required type="text" placeholder="New password" />
      </div>

      <div class="col-md-7">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
          Confirm New Password
        </label>

        <input required type="text" placeholder="Confirm New Password" />
      </div>

      <div class="col-12">
        <button class="button -md -purple-1 text-white">Save Password</button>
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
