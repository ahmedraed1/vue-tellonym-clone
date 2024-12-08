<template>
  <div class="profile-box">
    <img
      src="/tellonym-icons-color/icons8-settings.svg"
      alt=""
      class="settings-img"
      @click="$router.push(`${$route.params.username}/settings`)"
      v-if="isAdmin"
    />

    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
      alt=""
      class="profile-img"
    />
    <div class="information-box flex flex-col items-center">
      <h2 class="text-xl font-bold">{{ user.name }}</h2>
      <span class="text-sm">@{{ user.username }}</span>
      <div class="numbers-box flex h-fit">
        <div>
          <span>{{ Friends.follower.length }}</span>
          <span>Followers</span>
        </div>
        <div>
          <span>0</span>
          <span>Tells</span>
        </div>
        <div>
          <span>{{ Friends.following.length }}</span>
          <span>Following</span>
        </div>
      </div>
    </div>
    <button class="edit-button" v-if="isAdmin">Edit Profile</button>
    <button class="edit-button" v-if="!isAdmin" @click="setFollow">
      Follow
    </button>
    <div class="tell-box">
      <textarea
        name="tell"
        cols="30"
        rows="10"
        placeholder="Send me anonymous messages..."
        v-model="tell.tell"
      ></textarea>
      <div
        class="flex items-center justify-between flex-row px-4 pb-2 flex-wrap"
      >
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="isPrivate" class="sr-only peer" />
          <div
            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
          <span class="ms-3 text-sm font-medium text-gray-400"
            >Your message is
            <span class="font-bold text-gray-600">{{
              isPrivate ? 'anonymous' : 'public'
            }}</span></span
          >
        </label>
        <button class="send-button" @click="sendTell">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getFriends, follow } from '@/methods/users'
import axios from 'axios'

const $route = useRoute()
const isPrivate = ref(true)
const user = ref({})
const Friends = ref({
  follower: 0,
  following: 0,
})
const tell = ref({
  tell: '',
  isPrivate: isPrivate.value,
  toUser: '',
})

const getUser = async () => {
  const username = await $route.params.username
  const { data } = await axios.get(`/api/v1/users/${username}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  user.value = data
  tell.value.toUser = user.value._id
}

onMounted(async () => {
  await getUser()
  await getFriends(user.value._id).then(res => {
    Friends.value = res.users
  })
})

watch($route, async () => {
  await getUser()
  window.location.reload()
})

const sendTell = async () => {
  await axios
    .post('/api/v1/tells', tell.value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(res => {
      tell.value.tell = ''
      console.log(res.data.message)
    })
}

const setFollow = async () => {
  const data = await follow(user.value._id)
  console.log(data.message)
}

defineProps({
  isAdmin: Boolean,
})
</script>
<style scoped>
.profile-box {
  width: 768px;
  height: fit-content;
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 40px 0;
  gap: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.settings-img {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.profile-img {
  width: 100px;
  height: 142px;
  border-radius: 10px;
}
.information-box {
  width: 260px;
  height: fit-content;
  transform: translateY(-20px);
  background-color: #ffffff;
}
.information-box > .numbers-box {
  padding: 20px 0;
}
.information-box > .numbers-box > div {
  width: fit-content;
  height: fit-content;
  font-size: 14px;
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  line-height: initial;
}
.information-box > .numbers-box > div > span {
  padding: 0 10px;
}
.information-box > .numbers-box > div > span:nth-child(2) {
  padding: 0 30px;
}
.information-box > .numbers-box > div > span:last-child {
  font-size: 12px;
}
.information-box > .numbers-box > div:not(:first-child) {
  border-left: 1px solid rgb(0, 0, 0);
}
.edit-button {
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  padding: 6px 16px;
  background-color: rgb(255, 0, 90);
  color: white;
}
.tell-box {
  width: 670px;
  height: fit-content;
  background-color: rgb(229, 243, 255);
  border-radius: 10px;
}
.tell-box > textarea {
  width: 100%;
  height: 125px;
  overflow: auto;
  padding: 12px 8px 8px 16px;
  font-size: 14px;
  background-color: transparent;
  background-color: rgb(229, 243, 255);
  border-radius: 15px;
  box-sizing: border-box;
  outline: none;
  resize: none;
}
.send-button {
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  padding: 6px 16px;
  background-color: rgb(159, 212, 255);
  color: white;
}
@media screen and (max-width: 768px) {
  .profile-box {
    width: 100%;
    padding: 20px 10px;
  }
  .tell-box {
    width: 100%;
  }
}
</style>
