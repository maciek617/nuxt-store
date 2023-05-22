<template>
  <div class="container mx-auto px-4 mt-16 flex flex-wrap gap-20 justify-center">
    <Product v-for="n in 6" :key="n" />
  </div>
</template>
