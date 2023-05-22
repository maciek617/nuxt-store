<template>
  <div
    class="text-white mt-20 w-full flex items-start justify-center p-4 gap-4 lg:gap-10 xl:gap-20 2xl:gap-32"
    :class="[bgColor]"
  >
    <div>
      <p class="font-bold text-xl md:text-2xl lg:text-3xl">{{ brandName }}</p>
      <p class="text-sm lg:text-base">
        {{ brandText }}
      </p>
      <Button
        text="Let's go"
        extraClasses="bg-white text-black mt-10 hover:bg-gray-200"
      />
    </div>
    <nuxt-img
      src="../public/ralph.jpg"
      format="webp"
      quality="80"
      width="300"
      height="200"
      sizes="sm:100px md:150px lg:400px"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  bgColor: String,
  brandName: String,
  brandText: String,
  link: String,
  imageLink: String
})

</script>