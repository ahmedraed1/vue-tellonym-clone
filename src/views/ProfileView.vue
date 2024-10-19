<template>
  <div class="flex flex-col items-center mt-3 gap-3">
    <RouterView v-if="isSettingsRoute && isAdmin" />
    <template v-else>
      <ShowProfile :is-admin="isAdmin" />
      <TellCom v-if="!isSettingsRoute" :is-admin="isAdmin" />
    </template>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useAuthUser } from '@/stores/auth'
import { useRoute } from 'vue-router'
import ShowProfile from '@/components/profile/ShowProfile.vue'
import TellCom from '@/components/tells/TellCom.vue'

const authUser = useAuthUser()
const route = useRoute()

const isAdmin = computed(() => authUser.user.username === route.params.username)
const isSettingsRoute = computed(() => route.name === 'profile-settings')
</script>
<style scoped></style>
