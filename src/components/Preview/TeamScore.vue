<template>
  <div class="flex flex-row justify-between items-center w-full text-sm">
    <div class="flex flex-row mr-[10px]">
      <img class="max-w-[20px]" :src="teamInfo.src" alt="" />
      <span class="ml-[10px]">{{ teamInfo.name }}</span>
    </div>
    <div>{{ teamInfo.score.replace(/\s.*/,"") }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  teamInfo: {
    type: Object,
    required: true,
  },
});

const { teamInfo } = props;
</script>
