<template>
  <div class="row justify-center">
    <div class="col-xl-8 col-lg-9 col-md-11">
      <div class="tabs -active-purple-2 js-tabs">
        <div class="tabs__controls d-flex js-tabs-controls">
          <button
            @click="() => setActiveTab(1)"
            :class="`tabs__button js-tabs-button ${
              activeTab == 1 ? 'is-active' : ''
            } `"
            type="button"
          >
            Become an Instructor
          </button>
          <button
            @click="() => setActiveTab(2)"
            :class="`tabs__button js-tabs-button ml-30 ${
              activeTab == 2 ? 'is-active' : ''
            } `"
            type="button"
          >
            Instructor Rules
          </button>
          <button
            @click="() => setActiveTab(3)"
            :class="`tabs__button js-tabs-button ml-30 ${
              activeTab == 3 ? 'is-active' : ''
            } `"
            type="button"
          >
            Start with Courses
          </button>
        </div>

        <div class="tabs__content pt-60 lg:pt-40 js-tabs-content">
          <div
            :class="`tabs__pane -tab-item-1 ${
              activeTab == 1 ? 'is-active' : ''
            } `"
          >
            <p class="text-light-1">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
              <br />
              <br />
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
          </div>
          <div
            :class="`tabs__pane -tab-item-2 ${
              activeTab == 2 ? 'is-active' : ''
            } `"
          >
            <p class="text-light-1">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div
            :class="`tabs__pane -tab-item-3 ${
              activeTab == 3 ? 'is-active' : ''
            } `"
          >
            <p class="text-light-1">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeTab = ref(1);

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style lang="scss" scoped></style>
