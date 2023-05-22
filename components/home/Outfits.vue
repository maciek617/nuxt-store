<template>
  <div class="mt-16">
    <div>
      <p class="text-4xl lg:text-6xl xl:text-7xl">
        It's great to find <span class="gradient-text">yourself</span>
      </p>
      <p class="text-gray-600 max-w-xl pt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
        asperiores aut consequuntur beatae? Reiciendis error omnis.
      </p>
    </div>

    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
      :slides-per-view="slidesCount"
      :loop="true"
      :effect="'coverflow'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
    >
      <SwiperSlide
        v-for="slide in 10"
        :key="slide"
        class="mt-12 rounded-t-md cursor-grab"
      >
        <HomeOutfit designer-name="John Kowalski" designer-state="Fashion Designer"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const slidesCount = ref(1);

const handleResizeWindow = () => {
  slidesCount.value = window.innerWidth > 1024 ? 3 : 1;
};

onMounted(() => {
  handleResizeWindow();
  window.addEventListener('resize', handleResizeWindow);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResizeWindow);
});

</script>

<style scoped></style>
