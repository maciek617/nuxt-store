<script setup lang="ts">
const scrollToOutfits = () => {
  const filters = document.getElementById('filters');
  filters?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <div class="container mx-auto relative px-4">
    <nuxt-img
      src="../public/outfits-header.jpg"
      alt="Outfits banner"
      quality="80"
      height="400"
      width="1000"
      class="h-60 object-cover w-full rounded-lg drop-shadow lg:h-96"
    />

    <div
      class="absolute top-1/2 -translate-y-1/2 bg-bg-darken rounded-lg py-2 px-4 text-white flex flex-col items-center left-1/2 -translate-x-1/2 w-60 sm:w-72 lg:w-fit"
    >
      <p class="text-center font-thin lg:text-2xl xl:text-3xl 2xl:text-4xl">
        Level up your style with inspiration of our users!
      </p>
      <Button
        text="Check now!"
        extra-classes="bg-black text-white mt-4 hover:bg-gray-700"
        @handle-click="scrollToOutfits()"
      />
    </div>
  </div>
</template>
