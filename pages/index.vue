<script setup lang="ts">
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
  <div class="flex flex-col lg:flex-row lg:justify-between">
    <div>
      <HomeHeader />
      <Button
        text="Explore more"
        extraClasses="mt-10 bg-black text-white hover:bg-gray-700"
      />
      <HomeStats />
    </div>
    <HomeImage />
  </div>
  <HomeExclusiveProducts />
  <Products />
  <HomePagination />
  <HomeOutfits />
  <div class="absolute left-0 w-full mt-10">
    <HomeBrand brand-name="Ralph Lauren" brand-text="Discover the latest collection made with love!" bg-color="bg-gray-800"/>
    <HomeBrand brand-name="Calvin Klein" brand-text="Feel the summer with Calvin Klein!" bg-color="bg-orange-700"/>
    <HomeBrand brand-name="Hugo Boss" brand-text="Feel like a BOSS with a Hugo Boss t-shirts!" bg-color="bg-blue-800"/>
  </div>

  <div class="h-72 mt-10"></div>2
</template>
