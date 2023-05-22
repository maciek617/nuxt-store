<template>
  <div class="flex justify-between items-center">
    <div class="mt-2">
      <p class="font-bold text-xl leading-none">{{brandName}}</p>
      <p class="text-gray-600">{{itemDescription}}</p>
    </div>
    <div class="gradient px-2 py-1 rounded-md font-bold">
      <p>${{price}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(
    {
      brandName: String,
      itemDescription: String,
      price: Number
    }
)
</script>

