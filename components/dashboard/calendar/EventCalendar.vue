<template>
  <FullCalendar :options="calendarOptions">
    <template v-slot:eventContent="arg">
      <div
        className="text-left pt-5 pb-15 px-10"
        :style="{ overflow: 'hidden' }"
      >
        <div className="mt-5">
          <div className="text-14 dot-left ml-5">{{ arg.timeText }}</div>
          <div className="text-14 text-dark-1 break-content">
            {{ arg.event.title }}
          </div>
        </div>
      </div>
    </template>
  </FullCalendar>
</template>

<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";

const calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  weekends: false,
  events: [
    { title: "Birthday Party", start: new Date() },
    { title: "Group Project is due", start: new Date() },
  ],
};
</script>

<style lang="scss" scoped></style>
