<template>
  <header
    :class="'header -base-sidebar border-bottom-light bg-white js-header'"
  >
    <div class="header__container py-20 px-10">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="d-flex items-center">
            <div class="header__explore text-dark-1">
              <button
                class="d-flex items-center js-dashboard-home-9-sidebar-toggle"
                @click="() => setIsSidebarClosedToggle()"
              >
                <i class="icon -dark-text-white icon-explore"></i>
              </button>
            </div>

            <div class="header__logo ml-30 md:ml-20">
              <nuxt-link to="/">
                <nuxt-img
                  width="140"
                  height="50"
                  class="-light-d-none"
                  src="/assets/img/general/logo.svg"
                  alt="logo"
                />
                <nuxt-img
                  width="140"
                  height="50"
                  class="-dark-d-none"
                  src="/assets/img/general/logo-dark.svg"
                  alt="logo"
                />
              </nuxt-link>
            </div>

            <form
              @submit.prevent="handleSubmit"
              class="search-field rounded-16 h-50 -reverse-button -w-340 ml-90 xl:ml-20 lg:d-none"
            >
              <input
                required
                class="bg-light-4 pr-50"
                type="text"
                placeholder="What do you want to learn?"
              />
              <button class="text-light-1" type="submit">
                <i class="icon-search text-20"></i>
              </button>
            </form>
          </div>
        </div>

        <div class="col-auto">
          <div class="d-flex items-center">
            <div class="d-flex items-center sm:d-none">
              <div>
                <button
                  @click="handleDarkmode"
                  class="js-darkmode-toggle text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                >
                  <i class="text-light-1 text-24 icon icon-night"></i>
                </button>
              </div>

              <div class="relative">
                <button
                  @click="handleFullScreenToggle"
                  class="text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                >
                  <i class="text-24 icon icon-maximize"></i>
                </button>
              </div>

              <CartToggle
                :parentClassess="'relative'"
                :allClasses="'d-flex items-center text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light'"
              />

              <div class="relative" @click="() => setMessageOpenToggle()">
                <a
                  href="#"
                  class="d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                  data-el-toggle=".js-msg-toggle"
                >
                  <i class="text-24 icon icon-email"></i>
                </a>
              </div>

              <div
                class="relative"
                @click="() => (isOnNotification = !isOnNotification)"
              >
                <a
                  href="#"
                  class="d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                  data-el-toggle=".js-notif-toggle"
                >
                  <i class="text-24 icon icon-notification"></i>
                </a>

                <div
                  class="toggle-element js-notif-toggle"
                  :class="{ '-is-el-visible': isOnNotification }"
                >
                  <div
                    class="toggle-bottom -notifications bg-white shadow-4 border-light rounded-8 mt-10"
                  >
                    <div class="py-30 px-30">
                      <div class="y-gap-40">
                        <div
                          v-for="(elm, i) in notifications"
                          :key="i"
                          class="d-flex items-center"
                          :class="{
                            'border-top-light -dark-border-top-light-5':
                              i !== 0,
                          }"
                        >
                          <div class="shrink-0">
                            <nuxt-img
                              width="40"
                              height="40"
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
              </div>
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
                class="toggle-element js-profile-toggle"
                :class="{ '-is-el-visible': isOnProfile }"
              >
                <div
                  class="toggle-bottom -profile bg-white shadow-4 border-light rounded-8 mt-10"
                >
                  <div class="px-30 py-30">
                    <div class="sidebar -dashboard">
                      <div
                        v-for="(elm, i) in sidebarItems"
                        :key="i"
                        class="sidebar__item"
                        :class="{ '-is-active -dark-bg-dark-2': elm.id == 1 }"
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
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import { sidebarItems } from "../../../data/homeSidebarItems";
import { notifications } from "@/data/notifications";
import CartToggle from "../component/CartToggle.vue";

const emits = defineEmits(["setIsSidebarClosed", "setMessageOpen"]);
const setIsSidebarClosedToggle = () => {
  emits("setIsSidebarClosed", false);
};
const setMessageOpenToggle = () => {
  emits("setMessageOpen", true);
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const isfullScreen = ref(true);
const isOnNotification = ref(false);
const isOnProfile = ref(false);

const documentElement = ref();

const handleFullScreenToggle = () => {
  isfullScreen.value = !isfullScreen.value;
  if (!isfullScreen.value) {
    openFullscreen();
  } else {
    closeFullscreen();
  }
};

const openFullscreen = () => {
  if (documentElement.value?.requestFullscreen) {
    documentElement.value?.requestFullscreen();
  } else if (documentElement.value?.webkitRequestFullscreen) {
    /* Safari */
    documentElement.value?.webkitRequestFullscreen();
  } else if (documentElement.value?.msRequestFullscreen) {
    /* IE11 */
    documentElement.value?.msRequestFullscreen();
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
    /* Safari */
    document?.webkitExitFullscreen();
  } else if (document?.msExitFullscreen) {
    /* IE11 */
    document?.msExitFullscreen();
  }
};

onMounted(() => {
  documentElement.value = document.documentElement;
});
</script>
