<template>
  <div class="tell flex flex-col">
    <div class="flex flex-row justify-between h-fit">
      <slot name="tell"></slot>
      <img
        src="/tellonym-icons-color/icons8-more-24.png"
        alt=""
        class="self-start pl-4"
      />
    </div>
    <div class="flex flex-row justify-between mt-3">
      <img
        src="/tellonym-icons-color/icons8-chat-ios-17-outlined/icons8-chat-50.svg"
        alt=""
        class="comment-image"
      />
      <slot name="date"></slot>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
.tell {
  width: 768px;
  height: fit-content;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 15px 25px;
  margin-bottom: 8px;
}
.comment-image {
  width: 18px;
  height: 18px;
}
@media screen and (max-width: 768px) {
  .tell {
    width: 100%;
    margin: 0;
    border-bottom: 2px solid #f5f5f5;
  }
}
</style>
