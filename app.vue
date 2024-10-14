<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <img src="~/public/gorod2.png" />
    <img src="~/assets/gorod2.png" />
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

