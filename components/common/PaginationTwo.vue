<template>
  <div class="pagination -buttons">
    <button class="pagination__button -prev" @click="handlePrevious">
      <i class="icon icon-chevron-left"></i>
    </button>

    <div class="pagination__count">
      <a
        @click="() => setPageNumber(1)"
        :class="{ '-count-is-active': pageNumber === 1 }"
        
      >
        1
      </a>
      <template v-if="dataLength > pageCapacity">
        <a
          @click="() => setPageNumber(2)"
          :class="{ '-count-is-active': pageNumber === 2 }"
          
        >
          2
        </a>
      </template>
      <template v-if="dataLength > pageCapacity * 2">
        <a
          @click="() => setPageNumber(3)"
          :class="{ '-count-is-active': pageNumber === 3 }"
          
        >
          3
        </a>
      </template>

      <template v-if="dataLength > pageCapacity * 4 && pageNumber !== 4">
        <span>...</span>
      </template>

      <template
        v-if="
          pageNumber > 3 && Math.ceil(dataLength / pageCapacity) !== pageNumber
        "
      >
        <a
          @click="() => setPageNumber(pageNumber)"
          
          class="-count-is-active"
        >
          {{ pageNumber }}
        </a>
      </template>

      <template
        v-if="
          pageNumber == 4
        "
      >
        <span class="">...</span>
      </template>

      <template v-if="dataLength > pageCapacity * 3 + 1">
        <a
          @click="() => setPageNumber(Math.ceil(dataLength / pageCapacity))"
          :class="{
            '-count-is-active':
              pageNumber === Math.ceil(dataLength / pageCapacity),
          }"
        >
          {{ Math.ceil(dataLength / pageCapacity) }}
        </a>
      </template>
    </div>

    <button @click="handleNext" class="pagination__button -next">
      <i class="icon icon-chevron-right"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dataLength = ref(50);
const pageCapacity = ref(5);

const pageNumber = ref(1);

const setPageNumber = (page) => {

    pageNumber.value = page;

};

const handlePrevious = () => {
  if (pageNumber.value > 1) {
    setPageNumber(pageNumber.value - 1);
  }
};

const handleNext = () => {
  if (Math.ceil(dataLength.value / pageCapacity.value) > pageNumber.value) {
    setPageNumber(pageNumber.value + 1);
  }
};
</script>

<style scoped>
a{cursor: pointer;}
/* Add your component-specific styles here */
@media (max-width:550px) {
  .pagination.-buttons > * + *{
    margin-left: 10px !important;

  }

 
}
</style>
