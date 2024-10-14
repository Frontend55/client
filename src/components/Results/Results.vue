<template>
  <div>
    <div
      v-for="(item, index) in calendar"
      :key="index"
      class="mb-[20px] border-b-[1px] border-solid border-gray-800"
    >
      <p class="text-center">{{ getTour(item.matcheDay) }}</p>
      <div
        v-for="(item, index) in item.listMatches"
        :key="index"
        class="border-b-[1px] border-solid border-gray-300 mb-[10px] last-of-type:border-none"
      >
        <p class="text-slate-400 text-sm w-full flex justify-center">
          <span class="mr-[5px]">{{ item.date }}</span>
          <span>{{ item.time }}</span>
          <span>{{ item.place }}</span>
        </p>
        <router-link
          to="results"
          class="flex justify-between items-center p-[5px] w-full"
        >
          <span class="flex justify-between flex-1 p-[5px]">
            <span class="flex items-center">
              <img v-if="item.teamFirstImg" :src="item.teamFirstImg" alt="" />
              <span class="ml-[10px]">{{ item.teamFirstName }}</span>
            </span>
            <span>{{ item.scoreFirst }}</span>
          </span>
          <span>:</span>
          <span class="flex justify-between flex-1 p-[5px] flex-row-reverse">
            <span class="flex items-center">
              <span class="mr-[10px]">{{ item.teamSecondName }}</span>
              <img v-if="item.teamSecondImg" :src="item.teamSecondImg" />
            </span>
            <span>{{ item.scoreSecond }}</span>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  calendar: {
    type: Array,
    requered: false,
    default: [],
  },
});
const def = [
  {
    firstTeam: "Команда 1",
    firstTeamScore: 5,
    secondTeam: "Команда 2",
    secondTeamScore: 0,
  },
  {
    firstTeam: "Команда 1",
    firstTeamScore: 5,
    secondTeam: "Команда 2",
    secondTeamScore: 0,
  },
  {
    firstTeam: "Команда 1",
    firstTeamScore: 5,
    secondTeam: "Команда 2",
    secondTeamScore: 0,
  },
  {
    firstTeam: "Команда 1",
    firstTeamScore: 5,
    secondTeam: "Команда 2",
    secondTeamScore: 0,
  },
  {
    firstTeam: "Команда 1",
    firstTeamScore: 5,
    secondTeam: "Команда 2",
    secondTeamScore: 0,
  },
];

const firstDate = ref("");
const lastDate = ref("");

const getListMatches = (list) => {
  return list.filter((item) => item.time.length);
};

const getDateMatcheDay = (date) => {
  const arrayDate = date.split("(")[1].split("-");

  if (arrayDate.length === 1) {
    arrayDate[0].slice(0, -1);
  }

  return arrayDate;
};

const getTour = (date) => {
  const array = date.split("(");
  return array[0].trim();
};
</script>
