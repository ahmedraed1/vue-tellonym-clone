<template>
  <HeaderCom v-if="checkRoute()" />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import router from './router'
import HeaderCom from '@/components/header/HeaderCom.vue'

// import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/json'

const checkRoute = () => {
  const routesToExclude = ['landing-page', 'login', 'signup', 'NotFound']
  return !routesToExclude.includes(router.currentRoute.value.name)
}
</script>

<style scoped></style>
