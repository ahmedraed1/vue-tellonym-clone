<template>
  <div class="flex flex-col items-center h-fit mt-3">
    <div class="search-input">
      <input type="text" placeholder="Search" class="search-input-box" />
      <button>Submit</button>
    </div>
    <div class="mt-6">
      <span class="text-xl font-bold"> Your Friends </span>
    </div>
    <div class="show-users">
      <ShowSearchUser
        :src="`https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg`"
        :username="`Anonymous`"
        :bio="`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`"
      >
        <template v-slot:button>
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
