<template>
  <div class="py-30 px-30">
    <div v-for="(elm, i) in curriculum" :key="i" :class="{ 'pt-30': i !== 0 }">
      <div class="row">
        <div class="col-12">
          <h4 class="text-16 lh-1 fw-500">{{ elm.title }}</h4>
        </div>

        <div class="col-12">
          <div class="accordion -block-2 text-left js-accordion">
            <div
              v-for="(itm, index) in elm.items"
              :key="index"
              :class="`accordion__item -dark-bg-dark-1 mt-10 ${
                currentOpenItem === `${i},${index}` ? 'is-active' : ''
              }`"
            >
              <div
                class="accordion__button py-20 px-30 bg-light-4"
                @click="() => toggleOpenItem(i, index)"
              >
                <div class="d-flex items-center">
                  <div class="icon icon-drag mr-10"></div>
                  <span class="text-16 lh-14 fw-500 text-dark-1">{{
                    itm.title
                  }}</span>
                </div>

                <div class="d-flex x-gap-10 items-center">
                  <a  class="icon icon-edit mr-5" @click="editLesson(itm.id)"></a>
                  <a  class="icon icon-bin" @click="deleteLesson(itm.id)"></a>
                  <div class="accordion__icon mr-0">
                    <div
                      class="d-flex items-center justify-center icon icon-chevron-down"
                    ></div>
                    <div
                      class="d-flex items-center justify-center icon icon-chevron-up"
                    ></div>
                  </div>
                </div>
              </div>

              <div
                class="accordion__content"
                :style="{
                  maxHeight: currentOpenItem === `${i},${index}` ? '100px' : '',
                }"
              >
                <div class="accordion__content__inner px-30 py-30">
                  <div class="d-flex x-gap-10 y-gap-10 flex-wrap">
                    <div>
                      <a
                        href="#"
                        class="button -sm py-15 -purple-3 text-purple-1 fw-500"
                        >Add Article +</a
                      >
                    </div>
                    <div>
                      <a
                        href="#"
                        class="button -sm py-15 -purple-3 text-purple-1 fw-500"
                        >Add Article +</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row y-gap-20 justify-between pt-30">
      <div class="col-auto sm:w-1/1">
        <button
          class="button -md -outline-purple-1 text-purple-1 sm:w-1/1"
          @click="prevStep"
        >
          Prev
        </button>
      </div>

      <div class="col-auto sm:w-1/1">
        <button
          class="button -md -purple-1 text-white sm:w-1/1"
          @click="nextStep"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { curriculum } from "@/data/curriculum";
const currentOpenItem = ref();

const toggleOpenItem = (i, index) => {
  currentOpenItem.value =
    currentOpenItem.value === `${i},${index}` ? "" : `${i},${index}`;
};

const prevStep = () => {
  // Implement the logic for previous step
};

const nextStep = () => {
  // Implement the logic for next step
};

function editLesson(id) {
  // Implement edit lesson logic
  console.log("Editing lesson with ID:", id);
}

function deleteLesson(id) {
  // Implement delete lesson logic
  console.log("Deleting lesson with ID:", id);
};
</script>
