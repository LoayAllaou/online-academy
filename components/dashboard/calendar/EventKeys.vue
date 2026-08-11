<template>
  <div class="col-12">
    <div class="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
      <h5 class="text-17 fw-500 mb-30">Event Keys</h5>

      <div class="y-gap-10">
        <div v-for="(elm, i) in eventKeys" :key="i" class="d-flex items-center">
          <div
            :class="`d-flex items-center justify-center size-25 bg-${elm.color}-light rounded-8`"
          >
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
              :class="`size-12 ${elm.textColor}`"
            >
              <FontAwesomeIcon
                :class="`size-12 ${elm.textColor}`"
                :icon="faEye"
              />
            </div>
          </div>
          <div class="text-14 lh-1 ml-10">{{ elm.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { eventKeys } from "@/data/calender";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
