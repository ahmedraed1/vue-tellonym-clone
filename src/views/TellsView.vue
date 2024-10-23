<template>
  <div class="flex items-center flex-col h-fit mt-3 gap-8">
    <div class="received-tell-link">
      <span class="text-xl font-bold">Share Your Link</span>
      <h1 class="text-xl text-red-500 sm:text-2xl md:text-3xl">
        https://tellonym.me/username
      </h1>
      <div>
        <button class="copy-button">Copy</button>
      </div>
    </div>
    <div class="tells">
      <ReceivedTell v-for="(tell, index) in tells" :key="index">
        <template #tell>
          <span>{{ tell.tell }}</span>
        </template>
        <template #date>
          <span>{{ timeAgo(tell.createdAt) }}</span>
        </template>
      </ReceivedTell>
    </div>
  </div>
</template>

<script setup>
import ReceivedTell from '@/components/tells/ReceivedTell.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import timeAgo from '@/methods/time'

const tells = ref([])

onMounted(async () => {
  await getTells()
})

const getTells = async () => {
  await axios
    .get('/api/v1/tells', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      tells.value = response.data.tells
    })
}
</script>
<style scoped>
.received-tell-link {
  width: 768px;
  height: fit-content;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 40px 0;
  gap: 10px;
}
.received-tell-link > div > .copy-button {
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  background-color: rgb(255, 0, 90);
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  margin: 6px 0;
}
.tells {
  width: 768px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
}
@media screen and (max-width: 768px) {
  .received-tell-link {
    width: 100%;
  }
  .tells {
    width: 100%;
  }
}
</style>
