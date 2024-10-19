<template>
  <div>
    <header class="feeds-page-header shadow">
      <img src="/tellonym-icons-color/banner.webp" alt="logo" class="banner" />
      <div class="w-full flex items-center justify-center">
        <ul>
          <li @click="$router.push('/feed')">
            <img
              src="/tellonym-icons-color/icons8-home-material-outlined/icons8-home-24.svg"
              alt=""
            />
          </li>
          <li @click="$router.push('/search')">
            <img
              src="/tellonym-icons-color/icons8-search-material-outlined/icons8-search-24.svg"
              alt=""
            />
          </li>
          <li @click="$router.push('/tells')">
            <img
              src="/tellonym-icons-color/icons8-inbox-forma-regular/icons8-inbox-24.png"
              alt=""
            />
          </li>
          <li @click="$router.push('/notifications')">
            <img
              src="/tellonym-icons-color/icons8-message-windows-10/icons8-message-32.png"
              alt=""
            />
          </li>
          <li @click="$router.push(`/${useAuthUser().user.username}`)">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
              alt="profile"
              class="w-7 h-7 rounded-full"
            />
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script setup>
import { useAuthUser } from '@/stores/auth'
</script>
<style scoped>
.feeds-page-header {
  height: 50px;
  background-color: rgb(255, 255, 255);
  display: flex;
  position: relative;
}
.feeds-page-header ul {
  width: 684px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
}
.feeds-page-header ul li {
  cursor: pointer;
}
.banner {
  width: 126px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
}
.info-icon {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
@media screen and (max-width: 960px) {
  .banner {
    display: none;
  }
  .feeds-page-header ul {
    width: 100%;
  }
}
</style>
