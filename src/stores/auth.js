import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthUser = defineStore('auth', () => {
  const user = ref(null)
  const setUser = value => {
    user.value = value
  }
  return { user, setUser }
})
