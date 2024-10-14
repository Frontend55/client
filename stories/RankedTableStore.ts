import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '../api';

export const useRankedTableStore = defineStore('rankedStore', () => {
  const infoLeagues = ref([]);

  const getRanked = async () => {
    const { data } = await api.get('/leagues');
    infoLeagues.value = data
  }

  return {
    infoLeagues,
    getRanked,
  }
});