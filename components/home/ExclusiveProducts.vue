<template>
  <div class="mt-10 text-center container mx-auto px-4 lg:mt-16 xl:mt-20 2xl:mt-32">
    <h2 class="text-4xl lg:text-6xl xl:text-7xl">
      <span class="gradient-text">Exclusive</span> Products
    </h2>
    <p class="text-sm text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores
      vitae iste consectetur.
    </p>
  </div>

  <form class="mx-auto flex justify-center mt-5">
    <div class="bg-gray-100 rounded-md">
      <i class="fa-solid fa-magnifying-glass text-gray-60 px-3"></i>
      <input
          type="text"
          placeholder="Search for products"
          class="h-full bg-transparent outline-none pr-3"
      />
    </div>
    <Button
        text="Search"
        extraClasses="bg-black text-white hover:bg-gray-700"
    />
  </form>

  <div class="flex justify-center mt-5 gap-6 flex-wrap lg:gap-12">
    <div
        v-for="(option, id) in optionsArray"
        :key="option.blockName"
        class="px-6 py-2 rounded-md font-bold cursor-pointer"
        :class="[option.isActive ? 'bg-purple text-white' : 'bg-gray-200 text-black']"
        @click="updateBlockUI(id)"
    >
      <p>{{ option.blockName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const optionsArray = ref([
  {blockName: 'Everything', isActive: true},
  {blockName: 'Popular', isActive: false},
  {blockName: 'Recent', isActive: false},
  {blockName: 'Bargains', isActive: false},
  {blockName: 'Hot', isActive: false},
]);

const updateBlockUI = (id: number) => {
  optionsArray.value.forEach((el) => (el.isActive = false));
  optionsArray.value[id].isActive = true;
};

</script>

