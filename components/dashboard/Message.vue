<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Messages</h1>
          <div class="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
      </div>

      <div class="row y-gap-30">
        <div class="col-xl-4">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Basic Information</h2>
            </div>

            <div class="py-30 px-30">
              <div class="y-gap-30">
                <div
                  v-for="(elm, i) in messageList"
                  :key="i"
                  class="d-flex justify-between"
                >
                  <div class="d-flex items-center">
                    <div class="shrink-0">
                      <nuxt-img :src="elm.avatar" alt="image" width="50" height="50" class="size-50" />
                    </div>
                    <div class="ml-10">
                      <div class="lh-11 fw-500 text-dark-1">
                        {{ elm.name }}
                      </div>
                      <div class="text-14 lh-11 mt-5">{{ elm.title }}</div>
                    </div>
                  </div>

                  <div class="d-flex items-end flex-column pt-8">
                    <div class="text-13 lh-1">{{ elm.time }}</div>
                    <div
                      v-if="elm.notificationCount"
                      class="d-flex justify-center items-center size-20 bg-green-5 rounded-full mt-8"
                    >
                      <span class="text-11 lh-1 text-white fw-500">
                        {{ elm.notificationCount }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-8">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div
              class="d-flex items-center justify-between py-20 px-30 border-bottom-light"
            >
              <div class="d-flex items-center">
                <div class="shrink-0">
                  <nuxt-img
                    width="50"
                    height="50"
                    src="/assets/img/avatars/small/2.png"
                    alt="image"
                    class="size-50"
                  />
                </div>
                <div class="ml-10">
                  <div class="lh-11 fw-500 text-dark-1">Arlene McCoy</div>
                  <div class="text-14 lh-11 mt-5">Active</div>
                </div>
              </div>
              <a href="#" class="text-14 lh-11 fw-500 text-orange-1 underline">
                Delete Conversation
              </a>
            </div>

            <div class="py-40 px-40">
              <div class="row y-gap-20">
                <div class="col-xl-7 col-lg-10">
                  <div class="d-flex items-center">
                    <div class="shrink-0">
                      <nuxt-img
                        width="50"
                        height="50"
                        src="/assets/img/avatars/small/4.png"
                        alt="image"
                        class="size-50"
                      />
                    </div>
                    <div class="lh-11 fw-500 text-dark-1 ml-10">
                      Albert Flores
                    </div>
                    <div class="text-14 lh-11 ml-10">35 mins</div>
                  </div>
                  <div class="d-inline-block mt-15">
                    <div class="py-20 px-30 bg-light-3 rounded-8">
                      How likely are you to recommend our company to your
                      friends and family?
                    </div>
                  </div>
                </div>

                <div class="col-xl-7 offset-xl-5 col-lg-10 offset-lg-2">
                  <div class="d-flex items-center justify-end">
                    <div class="text-14 lh-11 mr-10">35 mins</div>
                    <div class="lh-11 fw-500 text-dark-1 mr-10">You</div>
                    <div class="shrink-0">
                      <nuxt-img
                        width="50"
                        height="50"
                        src="/assets/img/avatars/small/3.png"
                        alt="image"
                        class="size-50"
                      />
                    </div>
                  </div>
                  <div class="d-inline-block mt-15">
                    <div
                      class="py-20 px-30 bg-light-7 -dark-bg-dark-2 text-purple-1 rounded-8 text-right"
                    >
                      Hey there, we’re just writing to let you know that you’ve
                      been subscribed to a repository on GitHub.
                    </div>
                  </div>
                </div>

                <div class="col-xl-7 col-lg-10">
                  <div class="d-flex items-center">
                    <div class="shrink-0">
                      <nuxt-img
                        width="50"
                        height="50"
                        src="/assets/img/avatars/small/6.png"
                        alt="image"
                        class="size-50"
                      />
                    </div>
                    <div class="lh-11 fw-500 text-dark-1 ml-10">
                      Cameron Williamson
                    </div>
                    <div class="text-14 lh-11 ml-10">35 mins</div>
                  </div>
                  <div class="d-inline-block mt-15">
                    <div class="py-20 px-30 bg-light-3 rounded-8">
                      Ok, Understood!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="py-25 px-40 border-top-light">
              <div class="row y-gap-10 justify-between">
                <div class="col-lg-7">
                  <input
                    required
                    class="-dark-bg-dark-1 py-20 w-1/1"
                    type="text"
                    placeholder="Type a Message"
                  />
                </div>
                <div class="col-auto">
                  <button class="button -md -purple-1 text-white shrink-0">
                    Send Message
                  </button>
                </div>
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
import { ref } from "vue";
import { messageList } from "@/data/dashboard";
import FooterNine from "../layout/footers/FooterNine.vue";

const currentLetter = ref("A");

const setCurrentLetter = (letter) => {
  currentLetter.value = letter;
};
</script>
