<template>
  <div class="pagination -buttons">

    <!-- Previous -->
    <button
      class="pagination__button -prev"
      :disabled="pageNumber === 1"
      @click="handlePrevious"
    >
      <i class="icon icon-chevron-left"></i>
    </button>


    <!-- Pages -->
    <div class="pagination__count">

      <template
        v-for="(page, index) in visiblePages"
        :key="`${page}-${index}`"
      >

        <!-- Ellipsis -->
        <span
          v-if="page === '...'"
          class="pagination-ellipsis"
        >
          ...
        </span>


        <!-- Page -->
        <a
          v-else
          @click="setPageNumber(page)"
          :class="{
            '-count-is-active':
              pageNumber === page
          }"
        >
          {{ page }}
        </a>

      </template>

    </div>


    <!-- Next -->
    <button
      class="pagination__button -next"
      :disabled="pageNumber === totalPages"
      @click="handleNext"
    >
      <i class="icon icon-chevron-right"></i>
    </button>

  </div>
</template>


<script setup>
import { computed } from "vue";


/* =====================================
   PROPS
===================================== */

const props = defineProps({

  dataLength: {
    type: Number,
    required: true,
  },

  pageCapacity: {
    type: Number,
    default: 10,
  },

  pageNumber: {
    type: Number,
    default: 1,
  },

});


/* =====================================
   EVENTS
===================================== */

const emit = defineEmits([
  "update:pageNumber"
]);


/* =====================================
   TOTAL PAGES
===================================== */

const totalPages = computed(() => {

  if (props.dataLength <= 0) {
    return 1;
  }

  return Math.ceil(
    props.dataLength /
    props.pageCapacity
  );

});


/* =====================================
   SET PAGE
===================================== */

const setPageNumber = (page) => {

  if (page === "...") {
    return;
  }

  if (
    page < 1 ||
    page > totalPages.value
  ) {
    return;
  }

  emit(
    "update:pageNumber",
    page
  );

};


/* =====================================
   PREVIOUS
===================================== */

const handlePrevious = () => {

  if (props.pageNumber > 1) {

    setPageNumber(
      props.pageNumber - 1
    );

  }

};


/* =====================================
   NEXT
===================================== */

const handleNext = () => {

  if (
    props.pageNumber <
    totalPages.value
  ) {

    setPageNumber(
      props.pageNumber + 1
    );

  }

};


/* =====================================
   VISIBLE PAGES
===================================== */

const visiblePages = computed(() => {

  const total =
    totalPages.value;

  const current =
    props.pageNumber;


  /* -----------------------------
     1 - 5 pages
  ----------------------------- */

  if (total <= 5) {

    return Array.from(
      { length: total },
      (_, index) => index + 1
    );

  }


  /* -----------------------------
     Beginning
  ----------------------------- */

  if (current <= 3) {

    return [
      1,
      2,
      3,
      4,
      "...",
      total,
    ];

  }


  /* -----------------------------
     End
  ----------------------------- */

  if (
    current >= total - 2
  ) {

    return [
      1,
      "...",
      total - 3,
      total - 2,
      total - 1,
      total,
    ];

  }


  /* -----------------------------
     Middle
  ----------------------------- */

  return [
    1,
    "...",
    current - 1,
    current,
    current + 1,
    "...",
    total,
  ];

});
</script>


<style scoped>

a {
  cursor: pointer;
}


button:disabled {
  opacity: 0.4;

  cursor: not-allowed;

  pointer-events: none;
}


.pagination-ellipsis {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 30px;

  cursor: default;
}


@media (max-width: 550px) {

  .pagination.-buttons > * + * {
    margin-left: 10px !important;
  }

}

</style>