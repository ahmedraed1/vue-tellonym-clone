<template>
  <div class="settings-box">
    <h2 class="text-4xl font-bold text-gray-900 my-5">Settings</h2>
    <div
      class="settings text-gray-900 bg-white border border-gray-200 rounded-lg"
    >
      <button
        type="button"
        class="relative inline-flex items-center w-full px-4 py-5 text-xl font-medium border-b border-gray-200 rounded-t-lg"
      >
        <img
          src="/tellonym-icons-color/settings-icons/profile-svgrepo-com.svg"
          alt="Edit Profile"
          class="w-7 h-7 me-2.5 mr-10"
        />
        Edit Profile
      </button>
      <button
        type="button"
        class="relative inline-flex items-center w-full px-4 py-5 text-xl font-medium border-b border-gray-200 rounded-t-lg"
      >
        <img
          src="/tellonym-icons-color/settings-icons/language-svgrepo-com.svg"
          alt="Edit Profile"
          class="w-7 h-7 me-2.5 mr-10"
        />
        English
      </button>
      <button
        type="button"
        class="relative inline-flex items-center w-full px-4 py-5 text-xl font-medium border-b border-gray-200 rounded-t-lg"
      >
        <img
          src="/tellonym-icons-color/settings-icons/email-1572-svgrepo-com.svg"
          alt="Edit Profile"
          class="w-7 h-7 me-2.5 mr-10"
        />
        Change Email
      </button>
      <button
        type="button"
        class="relative inline-flex items-center w-full px-4 py-5 text-xl font-medium border-b border-gray-200 rounded-t-lg"
      >
        <img
          src="/tellonym-icons-color/settings-icons/password-lock-solid-svgrepo-com.svg"
          alt="Edit Profile"
          class="w-7 h-7 me-2.5 mr-10"
        />
        Change Password
      </button>
      <button
        type="button"
        class="relative inline-flex items-center w-full px-4 py-5 text-xl font-medium border-b border-gray-200 rounded-t-lg"
        @click="logout"
      >
        <img
          src="/tellonym-icons-color/settings-icons/logout-svgrepo-com (1).svg"
          alt="Edit Profile"
          class="w-7 h-7 me-2.5 mr-10"
        />
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
const logout = () => {
  localStorage.removeItem('token')
  location.reload()
}
</script>

<style scoped>
.settings-box {
  width: 768px;
  height: fit-content;
  gap: 10px;
}
.settings {
  width: 768px;
  height: fit-content;
}
@media screen and (max-width: 768px) {
  .settings-box {
    width: 100%;
  }
  .settings {
    width: 100%;
  }
}
</style>
