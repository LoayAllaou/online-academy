<template>
  <Pie :data="pieChartsData" :options="options" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = [
  { name: "Direct", value: 400 },
  { name: "Referal", value: 300 },
  { name: "Organic", value: 300 },
];
const pieChartsData = {
  labels: data.map((elm) => elm.name),
  datasets: [
    {
      backgroundColor: ["indigo", "#6440FB", "#336CFB", "#336CFB"],
      data: data.map((elm) => elm.value),
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style lang="scss" scoped></style>
