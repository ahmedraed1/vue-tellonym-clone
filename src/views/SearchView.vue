<template>
  <div class="flex flex-col items-center h-fit mt-3">
    <div class="search-input">
      <input
        type="text"
        placeholder="Search"
        class="search-input-box"
        v-model="searchInput"
      />
      <button @click="search">Submit</button>
    </div>
    <div class="mt-6">
      <span class="text-xl font-bold">
        {{ message }}
      </span>
    </div>
    <div class="show-users">
      <div
        class="flex items-center justify-center w-full h-full text-xl font-bold py-4"
        v-if="users.length == 0"
      >
        No Users Found
      </div>
      <ShowSearchUser
        v-else
        v-for="(user, index) in users"
        :key="index"
        :src="`https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg`"
        :name="user.name"
        :bio="`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`"
      >
        <template #button>
          <button
            class="w-fit h-fit rounded-3xl bg-blue-500 text-white px-4 py-1"
          >
            Send anonymous Tell...
          </button>
        </template>
      </ShowSearchUser>
    </div>
  </div>
</template>
<script setup>
import ShowSearchUser from '@/components/users/ShowSearchUser.vue'
import { ref, onMounted } from 'vue'
import { useAuthUser } from '@/stores/auth'
import getFriends from '@/methods/users'
import axios from 'axios'

const searchInput = ref('')
const users = ref([])
const message = ref('Your Friends')

const user = useAuthUser().user

const search = async () => {
  const { data } = await axios.get(
    `/api/v1/users?search=${searchInput.value}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  )
  users.value = data.users
  message.value = `Found ${users.value.length} Users`
}

onMounted(() => {
  getFriends(user.username).then(res => {
    users.value = res.friendObjects.filter((item, index) =>
      index >= 1 && item.username == res.friendObjects[index - 1].username
        ? false
        : true,
    )
  })
  message.value = `Your Friends`
})
</script>
<style scoped>
.search-input {
  width: 768px;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.search-input > input {
  width: 400px;
  height: 40px;
  border-radius: 10px;
  outline: none;
  padding: 0 10px;
  background-color: rgb(243, 243, 243);
}
.search-input > button {
  width: 80px;
  height: 40px;
  background-color: red;
  color: white;
  border-radius: 20px;
}
.show-users {
  width: 768px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
