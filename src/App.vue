<template>
  <HeaderCom v-if="checkRoute()" />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import router from './router'
import HeaderCom from '@/components/header/HeaderCom.vue'

const checkRoute = () => {
  const routesToExclude = ['landing-page', 'login', 'signup', 'NotFound']
  return !routesToExclude.includes(router.currentRoute.value.name)
}
</script>

<style scoped></style>
