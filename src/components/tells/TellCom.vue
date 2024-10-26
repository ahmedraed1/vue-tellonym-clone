<template>
  <div class="tell">
    <div class="tell-header">
      <div>
        <img
          src="https://userimg.tellonym.me/xs-v2/1_7b1d770876bb11ceb1eef5661e1f715c.jpg"
          alt=""
          class="tell-image"
        />
        <div class="flex flex-col w-fit">
          <span class="text-sm font-bold"><slot name="username"></slot></span>
          <span class="text-xs text-gray-400 font-bold"
            ><slot name="date"></slot
          ></span>
        </div>
      </div>
      <img
        src="/tellonym-icons-color/icons8-more-24.png"
        alt=""
        v-if="isAdmin"
      />
    </div>
    <div class="tell-body">
      <p class="question">
        <slot name="tell"></slot>
      </p>
      <p class="answer">
        <slot name="answer"></slot>
      </p>
    </div>
    <div class="tell-footer">
      <span class="emoji1 text-xl">❤️</span>
      <span class="emoji2 text-xl">😭</span>
      <span class="emoji3 text-xl">😂</span>
    </div>
  </div>
</template>

<script setup>
defineProps(['isAdmin'])
</script>
<style scoped>
.tell {
  width: 768px;
  height: fit-content;
  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
.tell-header {
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tell-header > div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.tell-header > div > .tell-image {
  width: 30px;
  height: 38px;
  border-radius: 5px;
}
.tell-body {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.question {
  width: 100%;
  height: fit-content;
  border-left: rgba(0, 0, 0, 0.644) 4px solid;
  padding-left: 10px;
  margin: 10px 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 16px;
}
.answer {
  width: 100%;
  height: fit-content;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 16px;
}
.tell-footer {
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-left: 5px;
}
.emoji1 {
  cursor: pointer;
  filter: grayscale(100%);
}
.emoji2 {
  cursor: pointer;
  filter: grayscale(100%);
}
.emoji3 {
  cursor: pointer;
  filter: grayscale(100%);
}
@media screen and (max-width: 768px) {
  .tell {
    width: 100%;
  }
}
</style>
