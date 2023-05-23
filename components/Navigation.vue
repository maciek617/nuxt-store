<script setup lang="ts">
const showNav = ref(false);
const navLinks = ref([
  {
    title: 'Home',
    path: '/',
    isActive: true
  },
  {
    title: 'Store',
    path: '/store',
    isActive: false
  },
  {
    title: 'Outfits',
    path: 'outfits',
    isActive: false
  }
]);

const setShowNav = () => {
  showNav.value = !showNav.value
}

const updateActiveNavLink = (id: number) => {
  navLinks.value.forEach(link => link.isActive = false);
  navLinks.value[id].isActive = true;
  showNav.value = false;
}

</script>

<template>
  <div @click="setShowNav" class="text-3xl shadow fixed top-2 right-3 w-12 h-12 rounded-full flex items-center justify-center z-50 bg-white lg:hidden">
    <i class="fa-solid fa-bars" :class="[showNav ? 'hidden' : 'block']"></i>
    <i class="fa-solid fa-xmark" :class="[!showNav ? 'hidden' : 'block']"></i>
  </div>

  <nav
      class="bg-white fixed top-0 left-0 w-full h-screen z-40 flex justify-center flex-col items-center -translate-x-full transition-transform lg:translate-x-0 lg:h-auto lg:flex-row lg:justify-between lg:py-2 lg:px-4"
      :class="[showNav ? 'translate-x-0' : '-translate-x-full']">
    <p class="text-2xl">LoCo</p>
    <ul class="flex items-center justify-center flex-col h-3/4 text-2xl gap-5 font-light lg:flex-row lg:text-lg lg:gap-10 xl:gap-14">
        <NuxtLink v-for="(navLink, index) in navLinks" :key="navLink.title" @click="updateActiveNavLink(index)" :to="navLink.path" class="px-4 py-1 rounded-full transition-all cursor-pointer"
            :class="[navLink.isActive ? 'bg-black text-white' : '']">
            {{ navLink.title }}
        </NuxtLink>
    </ul>

    <NuxtLink to="/register">
      <Button text="Sign In" extra-classes="bg-black text-white  hover:bg-gray-700"/>
    </NuxtLink>

  </nav>
</template>

<style scoped>

</style>