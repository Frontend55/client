<template>
  <div class="flex flex-row flex-wrap w-full content-start">
    <MobileMenu v-if="width <= 991" @setActiveindex="setIndex" />
    <WrapperMainSection
      v-if="matches.length"
      class="flex w-full row justify-start hide-lg"
    >
      <SmallPreview
        v-for="(item, index) in matches"
        :key="index"
        :teams="item"
        league=""
        class="border-r-[1px] py-[15px] px-[20px]"
      />
      <Button class="ml-[15px] text-xs" @click="activeIndex = 1">
        Все результаты.
      </Button>
    </WrapperMainSection>
    <WrapperMainSection class="flex row-auto w-full hide-sm">
      <Button
        v-for="(item, index) in listLeague"
        :key="item.title"
        class="ml-[20px] first:ml-0 text-sm hover:bg-slate-800"
        :class="{
          'bg-slate-800 border-white text-white': activeIndex === index,
        }"
        @click="activeIndex = index"
        >{{ item.title }}</Button
      >
    </WrapperMainSection>
    <WrapperMainSection>
      <Table
        v-if="activeIndex === 0"
        :titles="titles"
        :teams="sortList"
        :key="Math.random()"
      />
      <Results v-else-if="activeIndex === 1" :calendar="calendar" />
      <Stats v-else />
    </WrapperMainSection>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";

import WrapperMainSection from "../WrapperMainSection/WrapperMainSection.vue";
import SmallPreview from "../Preview/SmallPreview.vue";
import Table from "../Table/Table.vue";
import Results from "../Results/Results.vue";
import Stats from "../Stats/Stats.vue";
import MobileMenu from "../../components/Menu/MobileMenu.vue";

import Button from "../ui/Button.vue";

const { width } = useWindowSize();

const props = defineProps({
  list: {
    type: Array,
    requred: false,
    default: [],
  },
  calendar: {
    type: Array,
    requred: false,
    default: [],
  },
});

const { list, calendar } = props;

const activeIndex = ref(0);

const informationGames = ref([
  {
    league: "Высщая лига",
    teams: [
      {
        name: "Цска",
        src: "",
        score: 1,
      },
      {
        name: "Зенит",
        src: "",
        score: 2,
      },
    ],
  },
  {
    league: "1 лига",
    teams: [
      {
        name: "Спартак",
        src: "",
        score: 6,
      },
      {
        name: "Москва",
        src: "",
        score: 0,
      },
    ],
  },
  {
    league: "2 лига",
    teams: [
      {
        name: "Сочи",
        src: "",
        score: 2,
      },
      {
        name: "Шинник",
        src: "",
        score: 5,
      },
    ],
  },
]);
const listLeague = ref([
  {
    title: "Таблица",
    ref: "table",
  },
  {
    title: "Результаты",
    ref: "results",
  },
  // {
  //   title: "Статистика играков",
  //   ref: "stats",
  // },
]);

const sortList = computed(() => {
  return list.sort((a, b) => b.teamPoints - a.teamPoints);
});

const matches = computed(() => {
  const listMatches = [];

  let lengthArray = 4;

  if (width.value < 1280) {
    lengthArray = 3;
  } else if (width.value > 1440) {
    lengthArray = 5;
  }

  calendar.forEach((day) => {
    listMatches.push(...day.listMatches);
  });

  return listMatches.slice(0, lengthArray);
});

const titles = computed(() => {
  const array = [
    "Место",
    "Название",
    "Игры",
    "Победы",
    "Поражение",
    "Ничьи",
    "Забитые/пропущенные",
    "Разница",
    "Очки",
  ];

  if (width.value <= 768) {
    array.splice(3, 4);
    return array;
  }

  return array;
});

const setIndex = (index) => {
  activeIndex.value = index;
};
</script>

<style lang="scss">
@media (max-width: 1024px) {
  .hide-lg {
    display: none;
  }
}
</style>
