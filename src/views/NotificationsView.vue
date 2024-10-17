<template>
  <div class="flex flex-col items-center h-fit mt-3">
    <div class="notifications-box flex flex-col items-start">
      <h2 class="text-xl font-bold">Earlier</h2>
      <div class="notifications">
        <ShowNotification />
        <ShowNotification />
        <ShowNotification />
      </div>
    </div>
  </div>
</template>
<script setup>
import ShowNotification from '@/components/notifications/ShowNotification.vue'
</script>
<style scoped>
.notifications-box {
  width: 768px;
  height: fit-content;
  gap: 10px;
}
.notifications {
  width: 768px;
  height: fit-content;
}
@media screen and (max-width: 768px) {
  .notifications-box {
    width: 100%;
  }
  .notifications {
    width: 100%;
  }
}
</style>
