<script setup>
import { onMounted, ref } from 'vue';
import {getAnnouncements} from './composable/getData'

const announcements = ref([])

onMounted(async()=>{
  announcements.value = await getAnnouncements();
})

</script>

<template>
<div>
  <span v-for="announcement in announcements">
    {{ announcement.announcementTitle}}
    
  </span>
  <p>Hiii</p>
</div>
</template>

<style scoped>
</style>
