<!-- components/CloseAccount.vue -->

<template>
  <div v-if="activeTab === 5" class="tabs__pane -tab-item-5 is-active">
    <form @submit.prevent="handleSubmit" class="contact-form row y-gap-30">
      <div class="col-12">
        <div class="text-16 fw-500 text-dark-1">Close account</div>
        <p class="mt-10">
          Warning: If you close your account, you will be unsubscribed from all
          your 5 courses, and will lose access forever.
        </p>
      </div>

      <div class="col-md-7">
        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
          >Enter Password</label
        >
        <input
          required
          type="text"
          placeholder="Enter Password"
          v-model="password"
        />
      </div>

      <div class="col-12">
        <button class="button -md -purple-1 text-white">Close Account</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(["activeTab"]);

const password = ref("");

const handleSubmit = () => {
  // Implement form submission logic
};
</script>
