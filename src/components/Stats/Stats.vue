<template>
  <div class="flex flex-col">
    <div>
      <div class="border-b-[1px] border-solid border-black pb-[10px]">
        {{ "Бомбардиры" }}
      </div>
      <div>
        <router-link
          v-for="(item, index) in def"
          :key="index"
          class="flex justify-between border-b-[1px] border-solid border-gray-300 p-[10px] last-of-type:border-none"
        >
          <span>{{ item.name }}</span>
          <span>{{ item.result }}</span>
        </router-link>
      </div>
    </div>
    <div class="mt-[40px] pt-[10px] border-t-[1px] border-solid border-black">
      <div class="border-b-[1px] border-solid border-black pb-[10px]">
        {{ "Ассистенты" }}
      </div>
      <div>
        <router-link
          v-for="(item, index) in def1"
          :key="index"
          class="flex justify-between border-b-[1px] border-solid border-gray-300 p-[10px] last-of-type:border-none"
        >
          <span>{{ item.name }}</span>
          <span>{{ item.result }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const def = ref([
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
]);

const def1 = ref([
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
  {
    name: "Алешка",
    result: 50,
  },
]);
</script>
