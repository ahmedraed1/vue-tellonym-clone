<template>
  <div class="profile-box">
    <img
      src="/tellonym-icons-color/icons8-settings.svg"
      alt=""
      class="settings-img"
    />

    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
      alt=""
      class="profile-img"
    />
    <div class="information-box flex flex-col items-center">
      <h2 class="text-xl font-bold">Name</h2>
      <span class="text-sm">@username</span>
      <div class="numbers-box flex h-fit">
        <div>
          <span>0</span>
          <span>Followers</span>
        </div>
        <div>
          <span>0</span>
          <span>Tells</span>
        </div>
        <div>
          <span>0</span>
          <span>Following</span>
        </div>
      </div>
    </div>
    <button class="edit-button">Edit Profile</button>
    <div class="tell-box">
      <textarea
        name="tell"
        cols="30"
        rows="10"
        placeholder="Send me anonymous messages..."
      ></textarea>
      <div
        class="flex items-center justify-between flex-row px-4 pb-2 flex-wrap"
      >
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="isPublicTell" class="sr-only peer" />
          <div
            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
          <span class="ms-3 text-sm font-medium text-gray-400"
            >Your message is
            <span class="font-bold text-gray-600">{{
              isPublicTell ? 'anonymous' : 'public'
            }}</span></span
          >
        </label>
        <button class="send-button">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isPublicTell = ref(true)
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
