import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from "~/api";

export const useCalendarStore = defineStore('calendarStore', () => {
  const calendar = ref([]);

  const getCalendar = async (nameLeagues: string) => {
    const { data } = await api.get(`/calendar?league=${nameLeagues}`);
    calendar.value = data?.calendar || [];
  }

  return {
    calendar,
    getCalendar,
  }
})