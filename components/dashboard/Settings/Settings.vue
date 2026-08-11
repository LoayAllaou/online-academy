<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Settings</h1>
          <div class="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
      </div>

      <div class="row y-gap-30">
        <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="tabs -active-purple-2 js-tabs pt-0">
              <div
                class="tabs__controls d-flex x-gap-30 y-gap-20 flex-wrap items-center pt-20 px-30 border-bottom-light js-tabs-controls"
              >
                <button
                  v-for="(button, index) in buttons"
                  :key="index"
                  @click="() => (activeTab = index + 1)"
                  :class="[
                    'tabs__button',
                    'text-light-1',
                    'js-tabs-button',
                    { 'is-active': activeTab === index + 1 },
                  ]"
                  type="button"
                >
                  {{ button }}
                </button>
              </div>

              <div class="tabs__content py-30 px-30 js-tabs-content">
                <EditProfile :activeTab="activeTab" />
                <Password :activeTab="activeTab" />
                <SocialProfiles :activeTab="activeTab" />
                <Notification :activeTab="activeTab" />
                <!-- <CloseAccount :activeTab="activeTab" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterNine />
  </div>
</template>

<script setup>
import EditProfile from "./EditProfile";
import Password from "./Password";
import SocialProfiles from "./SocialProfiles";
import CloseAccount from "./CloseAccount";
import FooterNine from "@/components/layout/footers/FooterNine";
import Notification from "./Notifications";
const activeTab = ref(1);
const buttons = [
  "Edit Profile",
  "Password",
  "Social Profiles",
  "Notifications",
  //"Close Account",
];
</script>

<style lang="scss" scoped></style>
