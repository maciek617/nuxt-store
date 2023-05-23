<script setup lang="ts">
defineProps({
  name: String,
  jobState: String,
  followersCount: String,
})
</script>

<template>
  <div class="relative">
    <nuxt-img
        src="../public/outfit.jpg"
        alt="Product image"
        quality="80"
        format="webp"
        width="300"
        height="500"
        class="object-cover h-96 cursor-pointer"
    />
    <div>
      <div class="flex gap-4 mt-2">
        <nuxt-img
            src="../public/outfit.jpg"
            alt="Product image"
            quality="80"
            format="webp"
            width="96"
            height="96"
            class="h-12 w-12 object-cover rounded-full"
        />
        <div>
          <p class="font-bold text-xl leading-none">{{name}}</p>
          <p class="text-gray-600">{{jobState}}</p>
          <p class="text-sm mt-5">Followers: {{followersCount}}</p>
        </div>
      </div>
      <ProductHeart/>
    </div>
  </div>
</template>

<style scoped>

</style>