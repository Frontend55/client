<template>
  <div class="flex w-full flex-col">
    <table>
      <thead class="mb-[10px]">
        <tr>
          <th
            v-for="(title, index) in titles"
            :key="index"
            class="border-r-[1px] border-solid border-gray-300 p-[10px] text-xs"
          >
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody
        v-if="teams.length"
        class="border-t-[1px] border-solid border-gray-300"
      >
        <tr
          v-for="(item, index) in teams"
          :key="item.teamName"
          class="border-b-[1px] border-solid border-gray-300 last-of-type:border-none text-sm"
          @click="openModal(item)"
        >
          <td class="text-center border-r-[1px] border-solid border-gray-300">
            {{ index + 1 }}
          </td>
          <td class="p-[10px] border-r-[1px] border-solid border-gray-300">
            <NuxtLink :to="`${item.teamUrl}`" class="flex items-center">
              <img :src="item.teamImgSrc" class="max-w-[20px]" />
              <span class="ml-[10px]">{{ item.teamName }}</span>
            </NuxtLink>
          </td>
          <td
            class="text-center p-[10px] border-r-[1px] border-solid border-gray-300"
          >
            {{ item.teamGeams }}
          </td>
          <td
            class="text-center border-r-[1px] border-solid border-gray-300 hide-xs"
          >
            {{ item.teamWinners }}
          </td>
          <td
            class="text-center border-r-[1px] border-solid border-gray-300 hide-xs"
          >
            {{ item.teamLooses }}
          </td>
          <td
            class="text-center border-r-[1px] border-solid border-gray-300 hide-xs"
          >
            {{ item.teamDraw }}
          </td>
          <td
            class="text-center border-r-[1px] border-solid border-gray-300 hide-xs"
          >
            {{ item.teamGoals }}
          </td>
          <td class="text-center border-r-[1px] border-solid border-gray-300">
            {{ item.teamDifference }}
          </td>
          <td class="text-center border-r-[1px] border-solid border-gray-300">
            {{ item.teamPoints }}
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="isShowModal"
      class="absolute top-[50%] left-[50%] bg-white w-full max-w-[320px] border-solid border-slate-800 border-[1px] p-[10px] translate-x-[-50%] translate-y-[-50%] pt-[35px]"
    >
      <button type="button" class="close" @click="isShowModal = false"></button>
      <div>
        <p
          class="text-xs mb-[10px] flex justify-between border-solid border-b-[1px] p-[5px]"
        >
          <span>Побед:</span>
          <span>{{ mobileData.teamWinners }}</span>
        </p>
        <p
          class="text-xs mb-[10px] flex justify-between border-solid border-b-[1px] p-[5px]"
        >
          <span>Поражений:</span>
          <span>{{ mobileData.teamLooses }}</span>
        </p>
        <p
          class="text-xs mb-[10px] flex justify-between border-solid border-b-[1px] p-[5px]"
        >
          <span>Ничьи:</span>
          <span>{{ mobileData.teamDraw }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  titles: {
    types: Array,
    requered: true,
    default: [],
  },
  teams: {
    types: Array,
    requered: true,
    default: [],
  },
});
const { titles } = props;

const mobileData = ref({});

const isShowModal = ref(false);

const openModal = (data) => {
  mobileData.value = data;
  isShowModal.value = true;
};
</script>

<style scoped lang="scss">
.close {
  padding: 10px;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 5px;
  right: 10px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    background: gray;
  }
  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}

@media (max-width: 768px) {
  .hide-xs {
    display: none;
  }
}
</style>
