<template>
  <div class="max-w-xs w-full h-80 rounded-md relative bg-red-400">
    <nuxt-img
      src="../public/watch.jpg"
      quality="80"
      format="webp"
      width="500"
      height="500"
      class="w-full h-full object-cover rounded-t-md"
    />

    <ProductBadge label="Accessories" />
    <ProductHeart />
    <ProductLabel price=897.00 item-description="Exclusive men's watch" brand-name="Michael Cors"/>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
