<template>
  <div class="hover:bg-gray-300 transition-all cursor-pointer min-w-[185px]">
    <div class="text-gray-400 mb-[5px]">{{ league }}</div>
    <div v-for="(team, index) in dataGame" :key="index">
      <TeamScore :teamInfo="team" class="mb-[5px]" />
    </div>
  </div>
</template>

<script setup>
import TeamScore from "../Preview/TeamScore.vue";

const props = defineProps({
  teams: {
    type: Object,
    required: true,
  },
  league: {
    type: String,
    required: true,
  },
});

const { teams, league } = props;

const dataGame = computed(() => {
  return [
    {
      name: teams.teamFirstName,
      score: !teams.scoreFirst.length ? "-" : teams.scoreFirst,
      src: teams.teamFirstImg,
    },
    {
      name: teams.teamSecondName,
      score: !teams.scoreSecond.length ? "-" : teams.scoreSecond,
      src: teams.teamSecondImg,
    },
  ];
});

watchEffect(() => {
  dataGame;
});
</script>
