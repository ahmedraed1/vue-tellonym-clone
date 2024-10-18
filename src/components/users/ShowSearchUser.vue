<template>
  <div class="show-search-users">
    <div class="flex items-center gap-3">
      <img :src="img_src" alt="profile" class="w-12 h-12 rounded-full" />
      <div class="flex flex-col">
        <span class="text-sm font-bold">{{ username }}</span>
        <span class="text-xs text-gray-400 font-bold">{{
          bio.slice(0, 50) + '...'
        }}</span>
      </div>
    </div>
    <slot name="button"></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['src', 'username', 'bio'])
const img_src = ref(props.src)
</script>

<style scoped>
.show-search-users {
  width: 768px;
  height: fit-content;
  min-height: 70px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
</style>
