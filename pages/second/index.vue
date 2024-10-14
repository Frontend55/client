<template>
  <div class="flex flex-row">
    <LeftBar class="hide-sm" />
    <MainLayout
      :list="listCurrentLeague"
      :calendar="calendar"
      :key="Math.random()"
    />
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRankedTableStore } from "../../stories/RankedTableStore";
import { useCalendarStore } from "../../stories/CalendarStore";
import MainLayout from "../src/components/MainLayout/MaynLayout.vue";
import LeftBar from "../src/components/LeftBar/LeftBar.vue";

onBeforeMount(() => {
  rankedTableStore.getRanked();
  calendarStore.getCalendar("second");
});

const rankedTableStore = useRankedTableStore();
const calendarStore = useCalendarStore();

const calendar = computed(() => {
  return calendarStore.calendar;
});

const listCurrentLeague = computed(() => {
  const { infoLeagues } = rankedTableStore;
  return infoLeagues.find((item) => item.url === "second")?.teams;
});
</script>

<style lang="scss">
@media (max-width: 991px) {
  .hide-sm {
    display: none;
  }
}
</style>
