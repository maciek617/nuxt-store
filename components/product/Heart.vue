<template>
  <div
      @click="setLikeProduct"
      class="absolute bottom-2 left-2 bg-white w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer"
  >
    <i class="fa-regular fa-heart" :class="[isLike ? 'hidden' : 'block visible']"></i>
    <i class="fa-solid fa-heart text-red-500" :class="[!isLike ? 'hidden' : 'block visible']"></i>
  </div>
</template>

<script setup lang="ts">

//UI only
const isLike = ref(false);

const setLikeProduct = () => {
  isLike.value = !isLike.value;
}

</script>

<style scoped></style>
