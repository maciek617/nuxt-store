<script setup lang="ts">
const swipe = ref(false);

const changeSwipe = () => {
  swipe.value = !swipe.value;
}
</script>

<template>
  <div class="mt-10 flex justify-between min-h-screen lg:min-h-fit lg: overflow-hidden">
    <div class="flex items-center justify-center w-full relative lg:w-1/2">
      <RegisterSignup @handle-click="changeSwipe" :class="[swipe ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100']"/>
      <RegisterLogin @handle-click="changeSwipe" :class="[!swipe ? '-translate-y-full opacity-0' :'translate-y-0 opacity-100']"/>
    </div>
    <RegisterRightSide/>
  </div>
</template>

<style scoped>

</style>