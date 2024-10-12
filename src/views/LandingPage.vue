<template>
  <div>
    <header class="landing-page-header">
      <ul>
        <li>
          <img
            src="/tellonym-icons-color/banner.webp"
            alt="logo"
            class="banner"
          />
        </li>
        <li>
          <div class="flex items-center gap-2">
            <div class="flex items-center cursor-pointer">
              <img
                src="/tellonym-icons-color/icons8-arrow-down-24.png"
                alt=""
              />
              <span>English</span>
            </div>

            <img
              src="/tellonym-icons-color/icons8-info.svg"
              alt=""
              class="info-icon"
            />
          </div>
        </li>
      </ul>
    </header>
    <div class="body-container flex items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <img
          src="/tellonym-icons-color/icons8-tellonym-48.svg"
          alt="app-logo"
          class="w-24"
        />
        <h3 class="text-3xl font-bold">Create an account</h3>

        <button
          @click="$router.push('/login')"
          class="w-80 h-14 rounded-3xl bg-blue-500 text-black font-bold shadow-lg"
          style="background-color: rgb(255, 255, 255)"
        >
          Sign In
        </button>

        <button
          class="w-80 h-14 rounded-3xl bg-blue-500 text-black font-bold shadow-lg"
          style="background-color: rgb(235, 235, 237)"
          @click="$router.push('/signup')"
        >
          Sign Up with Email
        </button>
        <span class="block text-sm text-gray-500"
          >Already have an account?<span
            class="font-bold text-gray-900 cursor-pointer"
            @click="$router.push('/login')"
          >
            Sign in</span
          ></span
        >
      </div>
    </div>
    <footer class="landing-page-footer"></footer>
  </div>
</template>
<script setup></script>
<style scoped>
.landing-page-header {
  height: 50px;
  background-color: rgb(255, 255, 255);
  display: flex;
}
.landing-page-header ul {
  width: 768px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0 auto;
}
/* @media screen and (max-width: 768px) {
  .landing-page-header ul {
    width: 100%;
  }
} */
.banner {
  width: 100px;
  height: 20px;
  cursor: pointer;
}
.info-icon {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.body-container {
  height: calc(100vh - 110px);
}

.landing-page-footer {
  height: 60px;
  width: 100%;
  background-color: rgb(255, 255, 255);
}
</style>
