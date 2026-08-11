<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Digital Literacy</h1>
          <PageLinksTwo />
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Page Head</h2>
            </div>

            <div class="py-30 px-30">
              <div class="row y-gap-15 justify-between items-center mb-30">
                <div class="col-auto">Search</div>

                <div class="col-auto">
                  <a href="#" class="button -md -purple-1 text-white">
                    Add a New Entry
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-auto">
                  <div class="text-18 lh-1 fw-500 text-dark-1 mb-20">
                    First name
                  </div>
                </div>

                <div class="col-12">
                  <div class="d-flex x-gap-10 y-gap-10 flex-wrap">
                    <div>
                      <div class="py-8 pr-5 d-flex justify-center items-center">
                        All
                      </div>
                    </div>

                    <div
                      v-for="(letter, index) in letters"
                      :key="index"
                      style="cursor: pointer"
                      @click="() => setCurrentLetter(letter)"
                    >
                      <div
                        :class="{
                          'size-35 d-flex justify-center items-center border-light rounded-4': true,
                          'bg-dark-1 -dark-bg-dark-2 text-white':
                            currentLetter === letter,
                        }"
                      >
                        {{ letter }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-for="(item, index) in dictionaryItem"
                :key="index"
                class="border-light overflow-hidden rounded-8 mt-30"
              >
                <div class="py-20 px-30 bg-light-7 -dark-bg-dark-2">
                  <div class="d-flex justify-between">
                    <h4 class="text-24 lh-1 fw-700 text-purple-1">
                      {{ item.key }}
                    </h4>
                  </div>
                </div>

                <div class="px-30 py-25">
                  <div class="row y-gap-20 items-center justify-between">
                    <div class="col-auto">
                      <div class="text-dark-1 text-17 fw-500">
                        {{ item.title }}
                      </div>
                      <div class="mt-8">{{ item.description }}</div>
                    </div>

                    <div class="col-auto">
                      <div class="d-flex x-gap-30">
                        <a href="#" class="icon-bin"></a>
                        <a href="#" class="icon-bin"></a>
                        <a href="#" class="icon-bin"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="d-flex justify-between flex-wrap y-gap-20 items-center mt-40"
              >
                <a href="#" class="button -icon -purple-3 h-50 text-purple-1">
                  Forum Netiquette
                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                </a>

                <div
                  :id="'dd4button'"
                  @click="toggleDropdown"
                  class="dropdown js-dropdown js-category-active"
                >
                  <div
                    class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10"
                    :data-el-toggle="'.js-category-toggle'"
                    :data-el-toggle-active="'.js-category-active'"
                  >
                    <span class="js-dropdown-title">Jump to...</span>
                    <i class="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    :id="'dd4content'"
                    class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                  >
                    <div class="text-14 y-gap-15 js-dropdown-list">
                      <div
                        v-for="(link, linkIndex) in alphabetItems"
                        :key="linkIndex"
                      >
                        <a href="#" class="d-block js-dropdown-link">{{
                          link.title
                        }}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" class="button -icon -purple-3 h-50 text-purple-1">
                  Share Examples Of Digital
                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                </a>
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
import { ref, onMounted, onUpdated } from "vue";
import { letters, alphabetItems } from "@/data/dictionary";
import PageLinksTwo from "../common/PageLinksTwo.vue";
import FooterNine from "../layout/footers/FooterNine.vue";

const currentLetter = ref("A");
const dictionaryItem = ref([]);
const updateDictionaryItem = (letter) => {
  const filtered = alphabetItems.filter((elm) => elm.key === letter);
  dictionaryItem.value = filtered;
};
const setCurrentLetter = (letter) => {
  currentLetter.value = letter;
  updateDictionaryItem(letter);
};

const toggleDropdown = () => {
  document.getElementById("dd4button").classList.toggle("-is-dd-active");
  document.getElementById("dd4content").classList.toggle("-is-el-visible");
};

onMounted(() => {
  updateDictionaryItem(currentLetter.value);
});
</script>
