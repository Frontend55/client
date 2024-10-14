<template>
  <div
    class="bg-slate-800 w-full mb-[30px] flex justify-between px-[10px] align-middle"
  >
    <div>
      <img
        src="~/assets/images/gorod2.png"
        class="max-w-[50px]"
        alt="yar-football-logo"
      />
    </div>
    <div class="items-center flex text-white">
      <Button
        type="button"
        class="burger"
        :class="{ 'burger--active': isShowSubMenu }"
        @click.native="isShowSubMenu = !isShowSubMenu"
      >
      </Button>
      <div
        v-if="isShowSubMenu"
        class="absolute bg-slate-800 w-full top-[66px] right-0 h-screen flex justify-center border-t-[1px] border-solid border-white p-[10px]"
      >
        <ul class="flex items-start w-full flex-col">
          <li
            v-for="(
              { nameLeagues, url }, index
            ) in links"
            :key="nameLeagues"
            class="text-white w-full border-b-[1px] border-solid border-white pb-[10px] text-center mt-[10px] items-center first-of-type:mt-0"
          >
            <Button
              type="button"
              @click.prevent="openList(url, index)"
              class="text-sm"
            >
              {{ nameLeagues }}
            </Button>
            <div v-if="index === indexMenu" class="flex flex-col align-bottom">
              <NuxtLink
                v-for="(item, index) in itemsMenu"
                :key="item"
                :to="{ name: urlPage, params: { activeIndex: index } }"
                class="text-[15px] mb-[5px]"
                @click.native="openInformationLiague(index)"
              >
                {{ item }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRankedTableStore } from "../../../stories/RankedTableStore";
const rankedTableStore = useRankedTableStore();

const emit = defineEmits(["setActiveindex"]);

const itemsMenu = ref(["Таблица", "Календарь"]);
const isShowSubMenu = ref(false);
const urlPage = ref("");
const indexMenu = ref(null);

const openList = (link, index) => {
  isShowSubMenu.value = true;
  urlPage.value = link;

  if (indexMenu.value == null || indexMenu.value !== index) {
    indexMenu.value = index;
    return;
  }

  indexMenu.value = null;
};

const openInformationLiague = (index) => {
  isShowSubMenu.value = !isShowSubMenu;
  emit("setActiveindex", index);
};

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

<style scoped lang="scss">
.burger {
  cursor: pointer;
  position: relative;
  background: transparent;
  width: 40px;
  height: 26px;

  &--active {
    &:before {
      top: 11px !important;
      transform: rotate(45deg) !important;
      box-shadow: 0 6px 0 rgba(0, 0, 0, 0) !important;
      transition:
        box-shadow 0.15s,
        top 0.3s,
        transform 0.3s 0.15s !important;
    }

    &:after {
      bottom: 11px !important;
      transform: rotate(-45deg) !important;
      transition:
        bottom 0.3s,
        transform 0.3s 0.15s !important;
    }
  }

  &:before,
  &:after {
    content: "";
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background: #ffffff;
  }

  &:before {
    top: 0;
    box-shadow: 0 11px 0 #ffffff;
    transition:
      box-shadow 0.3s 0.15s,
      top 0.3s 0.15s,
      transform 0.3s;
  }
  &:after {
    bottom: 0;
    transition:
      bottom 0.3s 0.15s,
      transform 0.3s;
  }
}
</style>
