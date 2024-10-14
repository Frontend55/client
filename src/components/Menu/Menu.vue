<template>
  <ul class="pt-[10px] pb-[10px]">
    <li
      v-for="{ nameLeagues, url } in links"
      :key="nameLeagues"
      class="first-letter:mt-0 border-b-[1px] border-solid border-white hover:border-slate-300 transition-colors text-sm"
      :class="{ 'border-slate-300': isActive(url) }"
    >
      <NuxtLink
        :to="url"
        class="text-white hover:text-slate-300 transition-colors w-full flex p-[10px]"
        :class="{ 'text-slate-300': isActive(url) }"
        >{{ nameLeagues }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script setup>
import { useRankedTableStore } from "../../../stories/RankedTableStore";

const route = useRoute();

const isActive = (url) => {
  return route.path.slice(1) === url;
};

const rankedTableStore = useRankedTableStore();

const links = computed(() => {
  const list = rankedTableStore.infoLeagues.map((item) => {
    return {
      nameLeagues: item.nameLeagues,
      url: item.url,
      sortId: item.sortId,
    };
  });
  return list.sort((a, b) => {
    return a.sortId - b.sortId;
  });
});
</script>
