<script setup>
useHead({
  title: 'Loco',
  script: [
    {
      src: 'https://kit.fontawesome.com/00a7828243.js',
      crossorigin: 'anonymous',
    },
  ],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
