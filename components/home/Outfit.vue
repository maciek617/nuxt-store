<template>
  <div
    class="h-[550px] bg-gray-100 rounded-t-md relative group container mx-auto px-4"
  >
    <div class="px-4 py-2 flex gap-3">
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
        <p class="text-xl font-bold">{{ designerName }}</p>
        <p>{{ designerState }}</p>
      </div>
    </div>
    <div class="relative h-full">
      <nuxt-img
        src="../public/outfit.jpg"
        alt="Product image"
        quality="80"
        format="webp"
        width="1000"
        height="1000"
        class="h-full w-full object-cover mt-4"
      />
      <div
        class="w-full h-full absolute top-0 left-0 bg-bg-darken flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
      >
        <Button
          text="Check outfit"
          extra-classes="bg-black text-white hover:bg-gray-700"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  designerName: String,
  designerState: String,
  outfitImageLink: String,
  designerImageLink: String,
});
</script>

<style scoped></style>
