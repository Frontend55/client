<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
import {api} from './api';
  const getDate = async () => {
    const { data } = await api.get('leagues');
    console.log(data);
  }
  getDate();
</script>

