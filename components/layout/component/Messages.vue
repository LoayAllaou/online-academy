<template>
  <aside
    :class="`sidebar-menu toggle-element js-msg-toggle js-dsbh-sidebar-menu ${
      messageOpen ? '-is-el-visible' : ''
    }`"
  >
    <div class="sidebar-menu__bg"></div>

    <div
      class="sidebar-menu__content scroll-bar-1 py-30 px-40 sm:py-25 sm:px-20 bg-white -dark-bg-dark-1"
    >
      <div class="row items-center justify-between mb-30">
        <div class="col-auto">
          <div class="-sidebar-buttons">
            <button
              data-sidebar-menu-button="messages"
              :class="`text-17 text-dark-1 fw-500 ${
                currentTab == 'message' ? '-is-button-active' : ''
              } `"
            >
              Messages
            </button>

            <button
              data-sidebar-menu-button="messages-2"
              @click="() => setCurrentTab('message')"
              data-sidebar-menu-target="messages"
              :class="`d-flex items-center text-17 text-dark-1 fw-500 ${
                currentTab == 'messageTwo' ? '-is-button-active' : ''
              }`"
            >
              <i class="icon-chevron-left text-11 text-purple-1 mr-10"></i>
              Messages
            </button>

            <button
              data-sidebar-menu-button="settings"
              @click="() => setCurrentTab('message')"
              data-sidebar-menu-target="messages"
              :class="`d-flex items-center text-17 text-dark-1 fw-500 ${
                currentTab == 'settings' ? '-is-button-active' : ''
              }`"
            >
              <i class="icon-chevron-left text-11 text-purple-1 mr-10"></i>
              Settings
            </button>

            <button
              data-sidebar-menu-button="contacts"
              @click="() => setCurrentTab('message')"
              data-sidebar-menu-target="messages"
              :class="`d-flex items-center text-17 text-dark-1 fw-500 ${
                currentTab == 'contacts' ? '-is-button-active' : ''
              }`"
            >
              <i class="icon-chevron-left text-11 text-purple-1 mr-10"></i>
              Contacts
            </button>
          </div>
        </div>

        <div class="col-auto">
          <div class="row x-gap-10">
            <div class="col-auto">
              <button
                data-sidebar-menu-target="settings"
                @click="() => setCurrentTab('settings')"
                class="button -purple-3 text-purple-1 size-40 d-flex items-center justify-center rounded-full"
              >
                <i class="icon-setting text-16"></i>
              </button>
            </div>
            <div class="col-auto">
              <button
                data-sidebar-menu-target="contacts"
                @click="() => setCurrentTab('contacts')"
                class="button -purple-3 text-purple-1 size-40 d-flex items-center justify-center rounded-full"
              >
                <i class="icon-friend text-16"></i>
              </button>
            </div>
            <div class="col-auto">
              <button
                data-el-toggle=".js-msg-toggle"
                @click="() => messageToggle(false)"
                class="button -purple-3 text-purple-1 size-40 d-flex items-center justify-center rounded-full"
              >
                <i class="icon-close text-14"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="relative js-menu-switch">
        <div
          :class="`sidebar-menu__item -sidebar-menu ${
            currentTab == 'message' ? '-sidebar-menu-opened' : ''
          }`"
        >
          <form
            @submit.prevent="handleSubmit"
            class="search-field rounded-8 h-50"
          >
            <input
              required
              class="bg-light-3 pr-50"
              type="text"
              placeholder="Search Courses"
            />
            <button class="" type="submit">
              <i class="icon-search text-light-1 text-20"></i>
            </button>
          </form>

          <div class="accordion -block text-left pt-20 js-accordion">
            <div
              v-for="(item, ind) in accordionItems"
              :key="ind"
              @click="() => setOpenMessage(item.id)"
              :class="[
                'accordion__item',
                'border-light',
                'rounded-16',
                { 'is-active': openMessage === item.id },
              ]"
            >
              <div class="accordion__button">
                <div class="accordion__icon size-30 -dark-bg-dark-2 mr-10">
                  <div class="icon d-flex items-center justify-center">
                    <span class="lh-1 fw-500">{{ item.content.length }}</span>
                  </div>
                  <div class="icon d-flex items-center justify-center">
                    <span class="lh-1 fw-500">{{ item.content.length }}</span>
                  </div>
                </div>
                <span class="text-17 fw-500 text-dark-1 pt-3">{{
                  item.title
                }}</span>
              </div>

              <div
                class="accordion__content"
                :style="{ maxHeight: openMessage === item.id ? '340px' : '' }"
              >
                <div class="accordion__content__inner pl-20 pr-20 pb-20">
                  <div
                    v-for="(contentItem, ind) in item.content"
                    :key="ind"
                    @click="() => setCurrentTab('messageTwo')"
                    class="row x-gap-10 y-gap-10 pointer"
                  >
                    <div class="col-auto">
                      <!-- Assuming you have an Image component for handling images -->
                      <nuxt-img
                        :width="50"
                        :height="50"
                        :src="contentItem.imageSrc"
                        alt="image"
                      />
                    </div>
                    <div class="col">
                      <div class="text-15 lh-12 fw-500 text-dark-1 pt-8">
                        {{ contentItem.name }}
                      </div>
                      <div class="text-14 lh-1 mt-5">
                        <span class="text-dark-1">You:</span
                        >{{ contentItem.message }}
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="text-13 lh-12 pt-8">
                        {{ contentItem.time }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-sidebar-menu-open="messages-2"
          :class="`sidebar-menu__item -sidebar-menu ${
            currentTab == 'messageTwo' ? '-sidebar-menu-opened' : ''
          }`"
        >
          <div class="row x-gap-10 y-gap-10">
            <div class="col-auto">
              <nuxt-img
                width="{50}"
                height="{50}"
                src="/assets/img/dashboard/right-sidebar/messages-2/1.png"
                alt="image"
              />
            </div>
            <div class="col">
              <div class="text-15 lh-12 fw-500 text-dark-1 pt-8">
                Arlene McCoy
              </div>
              <div class="text-14 lh-1 mt-5">Active</div>
            </div>
          </div>

          <div class="mt-20 pt-30 border-top-light">
            <div class="row y-gap-20">
              <div class="col-12">
                <div class="row x-gap-10 y-gap-10 items-center">
                  <div class="col-auto">
                    <nuxt-img
                      width="{50}"
                      height="{50}"
                      src="/assets/img/dashboard/right-sidebar/messages-2/2.png"
                      alt="image"
                    />
                  </div>
                  <div class="col-auto">
                    <div class="text-15 lh-12 fw-500 text-dark-1">
                      Albert Flores
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="text-14 lh-1 ml-3">35 mins</div>
                  </div>
                </div>
                <div class="bg-light-3 rounded-8 px-30 py-20 mt-15">
                  How likely are you to recommend our company to your friends
                  and family?
                </div>
              </div>

              <div class="col-12">
                <div class="row x-gap-10 y-gap-10 items-center justify-end">
                  <div class="col-auto">
                    <div class="text-14 lh-1 mr-3">35 mins</div>
                  </div>
                  <div class="col-auto">
                    <div class="text-15 lh-12 fw-500 text-dark-1">You</div>
                  </div>
                  <div class="col-auto">
                    <nuxt-img
                      width="{50}"
                      height="{50}"
                      src="/assets/img/dashboard/right-sidebar/messages-2/3.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div
                  class="text-right bg-light-7 -dark-bg-dark-2 text-purple-1 rounded-8 px-30 py-20 mt-15"
                >
                  How likely are you to recommend our company to your friends
                  and family?
                </div>
              </div>

              <div class="col-12">
                <div class="row x-gap-10 y-gap-10 items-center">
                  <div class="col-auto">
                    <nuxt-img
                      width="{50}"
                      height="{50}"
                      src="/assets/img/dashboard/right-sidebar/messages-2/3.png"
                      alt="image"
                    />
                  </div>
                  <div class="col-auto">
                    <div class="text-15 lh-12 fw-500 text-dark-1">
                      Cameron Williamson
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="text-14 lh-1 ml-3">35 mins</div>
                  </div>
                </div>
                <div class="bg-light-3 rounded-8 px-30 py-20 mt-15">
                  Ok, Understood!
                </div>
              </div>
            </div>
          </div>

          <div class="mt-30 pb-20">
            <form
              @submit.prevent="handleSubmit"
              class="contact-form row y-gap-20"
              action="post"
            >
              <div class="col-12">
                <textarea
                  required
                  placeholder="Write a message"
                  rows="7"
                ></textarea>
              </div>

              <div class="col-12">
                <button type="submit" class="button -md -purple-1 text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          data-sidebar-menu-open="contacts"
          :class="`sidebar-menu__item -sidebar-menu ${
            currentTab == 'contacts' ? '-sidebar-menu-opened' : ''
          }`"
        >
          <div class="tabs -pills js-tabs">
            <div class="tabs__controls d-flex js-tabs-controls">
              <button
                @click="() => setContactTabOpen(1)"
                :class="`tabs__button px-15 py-8 rounded-8 text-dark-1 js-tabs-button ${
                  contactTabOpen == 1 ? 'is-active' : ''
                } `"
                data-tab-target=".-tab-item-1"
                type="button"
              >
                Contacts
              </button>

              <button
                @click="() => setContactTabOpen(2)"
                :class="`tabs__button px-15 py-8 rounded-8 text-dark-1 js-tabs-button ${
                  contactTabOpen == 2 ? 'is-active' : ''
                } `"
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Request
              </button>
            </div>

            <div class="tabs__content pt-30 js-tabs-content">
              <div
                :class="`tabs__pane -tab-item-1  ${
                  contactTabOpen == 1 ? 'is-active' : ''
                } `"
              >
                <div class="row x-gap-10 y-gap-10 items-center">
                  <div class="col-auto">
                    <nuxt-img
                      width="{50}"
                      height="{50}"
                      src="/assets/img/dashboard/right-sidebar/contacts/1.png"
                      alt="image"
                    />
                  </div>
                  <div class="col-auto">
                    <div class="text-15 lh-12 fw-500 text-dark-1">
                      Darlene Robertson
                    </div>
                  </div>
                </div>
              </div>

              <div
                :class="`tabs__pane -tab-item-2 ${
                  contactTabOpen == 2 ? 'is-active' : ''
                } `"
              >
                <div class="row x-gap-10 y-gap-10 items-center">
                  <div class="col-auto">
                    <nuxt-img
                      width="{50}"
                      height="{50}"
                      src="/assets/img/dashboard/right-sidebar/contacts/1.png"
                      alt="image"
                    />
                  </div>
                  <div class="col-auto">
                    <div class="text-15 lh-12 fw-500 text-dark-1">
                      Darlene Robertson
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-sidebar-menu-open="settings"
          :class="`sidebar-menu__item -sidebar-menu ${
            currentTab == 'settings' ? '-sidebar-menu-opened' : ''
          }`"
        >
          <div class="text-17 text-dark-1 fw-500">Privacy</div>
          <div class="text-15 mt-5">You can restrict who can message you</div>
          <div class="mt-30">
            <div class="form-radio d-flex items-center">
              <div class="radio">
                <input type="radio" />
                <div class="radio__mark">
                  <div class="radio__icon"></div>
                </div>
              </div>
              <div class="lh-1 text-13 text-dark-1 ml-12">My contacts only</div>
            </div>

            <div class="form-radio d-flex items-center mt-15">
              <div class="radio">
                <input type="radio" />
                <div class="radio__mark">
                  <div class="radio__icon"></div>
                </div>
              </div>
              <div class="lh-1 text-13 text-dark-1 ml-12">
                My contacts and anyone in my courses
              </div>
            </div>

            <div class="form-radio d-flex items-center mt-15">
              <div class="radio">
                <input type="radio" />
                <div class="radio__mark">
                  <div class="radio__icon"></div>
                </div>
              </div>
              <div class="lh-1 text-13 text-dark-1 ml-12">
                Anyone on the site
              </div>
            </div>
          </div>

          <div class="text-17 text-dark-1 fw-500 mt-30 mb-30">
            Notification preferences
          </div>
          <div class="form-switch d-flex items-center">
            <div class="switch">
              <input type="checkbox" />
              <span class="switch__slider"></span>
            </div>
            <div class="text-13 lh-1 text-dark-1 ml-10">Email</div>
          </div>

          <div class="text-17 text-dark-1 fw-500 mt-30 mb-30">General</div>
          <div class="form-switch d-flex items-center">
            <div class="switch">
              <input type="checkbox" />
              <span class="switch__slider"></span>
            </div>
            <div class="text-13 lh-1 text-dark-1 ml-10">Use enter to send</div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import { accordionItems } from "@/data/message";

const currentTab = ref("message");
const openMessage = ref(0);
const contactTabOpen = ref(1);

const handleSubmit = (e) => {
  e.preventDefault();
};

const setCurrentTab = (tab) => {
  currentTab.value = tab;
};

const setOpenMessage = (id) => {
  openMessage.value = openMessage.value === id ? 0 : id;
};

const setContactTabOpen = (tab) => {
  contactTabOpen.value = tab;
};

const props = defineProps(["messageOpen"]);
const emits = defineEmits(["setMessageOpen"]);
const messageToggle = (value) => {
  emits("setMessageOpen", value);
};
</script>
