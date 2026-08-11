<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Site Administration</h1>
          <PageLinksTwo />
        </div>
      </div>

      <div class="row y-gap-30">
        <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="tabs -active-purple-2 js-tabs pt-0">
              <div
                class="tabs__controls d-flex x-gap-30 flex-wrap items-center pt-20 px-20 border-bottom-light js-tabs-controls"
              >
                <div
                  v-for="tab in tabs"
                  :key="tab.id"
                  @click="() => setActiveTab(tab.id)"
                >
                  <button
                    :class="[
                      'tabs__button',
                      'text-light-1',
                      'js-tabs-button',
                      { 'is-active': activeTab === tab.id },
                    ]"
                    type="button"
                  >
                    {{ tab.title }}
                  </button>
                </div>
              </div>

              <div class="tabs__content py-40 px-30 js-tabs-content">
                <div
                  v-for="tab in tabs"
                  :key="tab.id"
                  :class="[
                    'tabs__pane',
                    `-tab-item-${tab.id}`,
                    { 'is-active': activeTab === tab.id },
                  ]"
                >
                  <div class="row y-gap-50 x-gap-50">
                    <div
                      v-for="(section, i) in sections"
                      :key="i"
                      class="w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1"
                    >
                      <h4 class="text-18 lh-12 fw-500">{{ section.title }}</h4>
                      <div class="d-flex y-gap-10 flex-column pt-15">
                        <div
                          v-for="(item, index) in section.items"
                          :key="index"
                        >
                          {{ item }}
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
    </div>

    <FooterNine />
  </div>
</template>

<script setup>
import { ref } from "vue";
import FooterNine from "../layout/footers/FooterNine";
import PageLinksTwo from "../common/PageLinksTwo";
const activeTab = ref(1);
const tabs = [
  { id: 1, title: "Site administration" },
  { id: 2, title: "Users" },
  { id: 3, title: "Courses" },
  { id: 4, title: "Grades" },
  { id: 5, title: "Plugins" },
  { id: 6, title: "Appearance" },
  { id: 7, title: "Server" },
  { id: 8, title: "Reports" },
  { id: 9, title: "Development" },
];
import { sections } from "@/data/adminitrationFeatures";

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>
