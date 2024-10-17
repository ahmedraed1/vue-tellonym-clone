<template>
  <div class="h-screen">
    <div class="flex justify-center items-center flex-col h-full">
      <h1 class="text-3xl font-bold">ERROR! 404</h1>
      <h1 class="text-3xl font-bold">Page Not Found :(</h1>
      <button
        class="w-fit h-fit rounded-xl bg-red-500 text-black font-bold shadow-lg p-2 mt-4 shadow-lg hover:shadow-xl hover:bg-red-600"
        @click="$router.push('/')"
      >
        Go to Home
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
