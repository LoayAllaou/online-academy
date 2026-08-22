<template>
  <header class="header -dashboard -dark-bg-dark-1 js-header">
    <div class="header__container py-20 px-30">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="d-flex items-center">
            <div class="header__explore text-dark-1">
              <button
                @click="toggleSidebar"
                class="d-flex items-center js-dashboard-home-9-sidebar-toggle"
              >
                <i class="icon -dark-text-white icon-explore"></i>
              </button>
            </div>

            <div class="header__logo ml-30 md:ml-20">
              <NuxtLink to="/">
                <nuxt-img
                  width="140"
                  height="50"
                  class="-light-d-none"
                  src="/assets/img/logo/ScaLE-UP-Academy-Logo.svg"
                  alt="logo"
                />
                <nuxt-img
                  width="140"
                  height="50"
                  class="-dark-d-none"
                  src="/assets/img/logo/ScaLE-UP-Academy-Logo-Light.svg"
                  alt="logo"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div class="d-flex items-center">
            <!-- <div class="text-white d-flex items-center lg:d-none mr-15">
              <div class="dropdown bg-transparent px-0 py-0">
                <div class="d-flex items-center text-14 text-dark-1">
                  All Pages
                  <i class="text-9 icon-chevron-down ml-10"></i>
                </div>
                <div
                  class="dropdown__item -dark-bg-dark-2 -dark-border-white-10"
                >
                  <div class="text-14 y-gap-15">
                    <div>
                      <nuxt-link to="/dashboard" class="d-block text-dark-1">
                        Dashboard
                      </nuxt-link>
                    </div>
                    <div>
                      <nuxt-link to="/dshb-courses" class="d-block text-dark-1">
                        My Courses
                      </nuxt-link>
                    </div>
                    <div>
                      <nuxt-link
                        to="/dshb-bookmarks"
                        class="d-block text-dark-1"
                      >
                        Bookmarks
                      </nuxt-link>
                    </div>
                    <div>
                      <nuxt-link to="/dshb-listing" class="d-block text-dark-1">
                        Add Listing
                      </nuxt-link>
                    </div>
                    <div>
                      <nuxt-link to="/dshb-reviews" class="d-block text-dark-1">
                        Reviews
                      </nuxt-link>
                    </div>
                    <div>
                      <nuxt-link
                        to="/dshb-settings"
                        class="d-block text-dark-1"
                      >
                        Settings
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>

              <MyCourses />
            </div> -->

            <div class="d-flex items-center sm:d-none">
              <div class="relative">
                <button
                  @click="handleDarkmode"
                  class="js-darkmode-toggle text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                >
                  <i class="text-24 icon icon-night"></i>
                </button>
              </div>

              <div class="relative">
                <button
                  @click="handleFullScreenToggle"
                  class="d-flex text-light-1 items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                >
                  <i class="text-24 icon icon-maximize"></i>
                </button>
              </div>

              <!-- <CartToggle
                parentClassess="relative"
                allClasses="d-flex items-center text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
              /> -->

              <!-- <div class="relative" @click="() => (messageOpen = !messageOpen)">
                <a
                  href="#"
                  class="d-flex items-center text-light-1 justify-center size-50 rounded-16 -hover-dshb-header-light"
                  data-el-toggle=".js-msg-toggle"
                >
                  <i class="text-24 icon icon-email"></i>
                </a>
              </div> -->

              <!-- <div
                class="relative"
                @click="() => (isOnNotification = !isOnNotification)"
              >
                <a
                  href="#"
                  class="d-flex items-center text-light-1 justify-center size-50 rounded-16 -hover-dshb-header-light"
                  data-el-toggle=".js-notif-toggle"
                >
                  <i class="text-24 icon icon-notification"></i>
                </a>

                <div
                  :class="`toggle-element js-notif-toggle  ${
                    isOnNotification ? '-is-el-visible' : ''
                  } -`"
                >
                  <div
                    class="toggle-bottom -notifications bg-white shadow-4 border-light rounded-8 mt-10"
                  >
                    <div class="py-30 px-30">
                      <div class="y-gap-40">
                        <div
                          v-for="(elm, i) in notifications"
                          :key="i"
                          :class="`d-flex items-center ${
                            i !== 0
                              ? 'border-top-light -dark-border-top-light-5'
                              : ''
                          }`"
                        >
                          <div class="shrink-0">
                            <nuxt-img
                              :width="40"
                              :height="40"
                              :src="elm.imageSrc"
                              alt="image"
                            />
                          </div>
                          <div class="ml-12">
                            <h4 class="text-15 lh-1 fw-500 -dark-text-dark-1">
                              {{ elm.heading }}
                            </h4>
                            <div class="text-13 lh-1 mt-10">
                              {{ elm.time }} Hours Ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>

            <div
              class="relative d-flex items-center ml-10"
              @click="() => (isOnProfile = !isOnProfile)"
            >
              <a href="#" data-el-toggle=".js-profile-toggle">
                <nuxt-img
                  width="50"
                  height="50"
                  class="size-50"
                  src="/assets/img/misc/user-profile.png"
                  alt="image"
                />
              </a>

              <div
                :class="`toggle-element js-profile-toggle ${
                  isOnProfile ? '-is-el-visible' : ''
                } -`"
              >
                <div
                  class="toggle-bottom -profile bg-white shadow-4 border-light rounded-8 mt-10"
                >
                  <div class="px-30 py-30">
                    <div class="sidebar -dashboard">
                      <div
                        v-for="(elm, i) in sidebarItems"
                        :key="i"
                        :class="`sidebar__item ${
                          elm.id === 1 ? '-is-active -dark-bg-dark-2' : ''
                        }`"
                      >
                        <a
                          :href="elm.href"
                          class="d-flex items-center text-17 lh-1 fw-500"
                        >
                          <i :class="elm.iconClass"></i>
                          {{ elm.text }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Messages @setMessageOpen="setMessageOpen" :messageOpen="messageOpen" />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import CartToggle from "../component/CartToggle.vue";
import { sidebarItems } from "../../../data/homeSidebarItems";
import { notifications } from "@/data/notifications";
import Messages from "../component/Messages.vue";
import MyCourses from "../component/MyCourses.vue";

const messageOpen = ref(false);
const isFullScreen = ref(true);
const isOnNotification = ref(false);
const isOnProfile = ref(false);
const setMessageOpen = (val) => {
  messageOpen.value = !messageOpen.value;
};
let documentElement;

const handleFullScreenToggle = () => {
  isFullScreen.value = !isFullScreen.value;
  if (!isFullScreen.value) {
    openFullscreen();
  } else {
    closeFullscreen();
  }
};

const openFullscreen = () => {
  if (documentElement?.requestFullscreen) {
    documentElement?.requestFullscreen();
  } else if (documentElement?.webkitRequestFullscreen) {
    documentElement?.webkitRequestFullscreen();
  } else if (documentElement?.msRequestFullscreen) {
    documentElement?.msRequestFullscreen();
  }
};

const handleDarkmode = () => {
  if (document) {
    document.getElementsByTagName("html")[0].classList.toggle("-dark-mode");
  }
};

const closeFullscreen = () => {
  if (document?.exitFullscreen) {
    document?.exitFullscreen();
  } else if (document?.webkitExitFullscreen) {
    document?.webkitExitFullscreen();
  } else if (document?.msExitFullscreen) {
    document?.msExitFullscreen();
  }
};

const handleResize = () => {};

onMounted(() => {
  documentElement = document.documentElement;
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
const toggleSidebar = () => {
  document
    .getElementById("dashboardOpenClose")
    .classList.toggle("-is-sidebar-hidden");
};
// Remaining code...
</script>
