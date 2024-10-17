<template>
  <div class="show-notification">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
      alt="profile"
      class="w-12 h-12 rounded-full md:ml-6"
    />
    <div class="flex flex-row w-full justify-between items-center md:ml-2">
      <span class="text-md font-bold"
        >username answered your Tell "sasdaf asfdsafd asfsdf" 2 minutes ago
      </span>
      <img
        src="/tellonym-icons-color/icons8-forward-50.png"
        alt=""
        class="w-6 h-6"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.show-notification {
  width: 768px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
  gap: 30px;
  cursor: pointer;
  margin-bottom: 8px;
}

@media screen and (max-width: 768px) {
  .show-notification {
    width: 100%;
    min-height: 70px;
    height: fit-content;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0;
    padding: 0 5px;
  }
}
</style>
