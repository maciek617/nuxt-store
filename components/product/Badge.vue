<template>
  <div class="absolute top-2 right-2 bg-badge rounded-md px-4 py-2">
    {{ props.label }}
  </div>
  <div
    class="absolute top-2 left-2 bg-pink rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold"
  >
    <p>-20%</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
