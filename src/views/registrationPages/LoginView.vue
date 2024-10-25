<template>
  <div class="h-screen flex flex-col">
    <!-- header -->
    <header>
      <div class="basis-2/5">
        <img
          src="/tellonym-icons-color/banner.webp"
          alt=""
          class="banner-img"
        />
      </div>
      <div class="w-fit cursor-pointer ml-4" @click="$router.go(-1)">
        <img
          src="/tellonym-icons-color/icons8-back-26.png"
          alt=""
          class="arrow-back"
        />
        <span class="text-black text-xl">Back</span>
      </div>
    </header>
    <!-- body -->
    <div class="flex flex-row h-full justify-center">
      <div class="phone-with-feeds basis-2/4">
        <img src="/pictures/phone-with-feed.webp" alt="" />
      </div>
      <!-- inputs -->
      <div class="inputs-container basis-3/4">
        <div class="inputs-container-box">
          <h3 class="text-3xl font-bold mb-4">Login</h3>
          <input
            type="text"
            placeholder="Email or Username"
            class="input-email"
            v-model="email"
          />
          <input
            type="text"
            placeholder="Password"
            class="input-password"
            v-model="password"
          />
          <button
            @click="submit"
            class="submit-button"
            :disabled="!email || !password"
          >
            Submit
          </button>
          <div class="flex justify-center w-full">
            <span class="block text-sm text-red-500 text-center"
              >I don't have an account.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import { useLogin } from '@/methods/registration'

const email = ref('example200@gmail.com')
const password = ref('admin200*A')
const submit = async () => {
  await useLogin(email.value, password.value)
}
</script>

<style scoped>
div > header {
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
}
div > header > div {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.banner-img {
  width: 126px;
  height: 25px;
  cursor: pointer;
}
.phone-with-feeds {
  background-color: #f5f5f5;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.phone-with-feeds > img {
  width: 325px;
  height: 600px;
}
.inputs-container {
  padding-left: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.inputs-container-box {
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding-right: 10px;
}
.inputs-container-box > .input-email,
.inputs-container-box > .input-password {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  padding: 10px 16px;
  background-color: rgb(243, 243, 243);
}
.inputs-container-box > .submit-button {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  padding: 10px 16px;
  background-color: rgb(255, 0, 90);
  color: rgb(255, 255, 255);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 0;
}
.inputs-container-box > .submit-button:disabled {
  background-color: rgb(252, 200, 217);
}
@media screen and (max-width: 768px) {
  .phone-with-feeds {
    display: none;
  }
}
@media screen and (max-width: 450px) {
  .inputs-container {
    padding-left: 0;
  }
  .inputs-container-box {
    padding-right: 0;
    width: 300px;
  }
}
.arrow-back {
  width: 16px;
  height: 16px;
}
</style>
