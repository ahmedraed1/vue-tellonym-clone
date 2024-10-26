<template>
  <div class="flex flex-col items-center mt-3 gap-3">
    <RouterView v-if="isSettingsRoute && isAdmin" />
    <template v-else>
      <ShowProfile :is-admin="isAdmin" />
      <template v-if="!isSettingsRoute">
        <TellCom
          :is-admin="isAdmin"
          v-for="(tell, index) in tells"
          :key="index"
        >
          <template #username>
            {{ data.username }}
          </template>
          <template #date>
            {{ timeAgo(tell.updatedAt) }}
          </template>
          <template #tell>
            {{ tell.tell }}
          </template>
          <template #answer>
            {{ tell.answer }}
          </template>
        </TellCom>
      </template>
    </template>
  </div>
</template>
<script setup>
import { computed, ref, onMounted } from 'vue'
import { useAuthUser } from '@/stores/auth'
import { useRoute } from 'vue-router'
import ShowProfile from '@/components/profile/ShowProfile.vue'
import TellCom from '@/components/tells/TellCom.vue'
import axios from 'axios'
import timeAgo from '@/methods/time'

const authUser = useAuthUser()
const route = useRoute()

const isAdmin = computed(() => authUser.user.username === route.params.username)
const isSettingsRoute = computed(() => route.name === 'profile-settings')

const tells = ref([])
const data = ref({})

onMounted(async () => {
  await getTellsByUsername(route.params.username)
})

const getTellsByUsername = async username => {
  await axios
    .get('/api/v1/tells/' + username, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      tells.value = response.data.tells
      const { username } = response.data
      data.value = { username }
    })
    .catch(error => {
      console.log(error)
    })
}
</script>
<style scoped></style>
