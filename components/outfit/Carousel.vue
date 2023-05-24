<script setup lang="ts">
import { Navigation } from 'swiper';

// Fill this array with images from database
const arrayOfImages = ref<Array<string>>([
  '../public/slide1.jpg',
  '../public/slide2.jpg',
  '../public/slide3.jpg',
]);

const activeSlide = ref(0);
const swiperInstance = ref();

const updateActiveSlide = (slideId: number) => {
  activeSlide.value = slideId;
  swiperInstance.value.slideTo(activeSlide.value);
};

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper: any) => {
  activeSlide.value = swiper.activeIndex;
};
</script>
<template>
  <div
    class="max-w-2xl lg:flex lg:flex-row-reverse lg:items-start lg:justify-between"
  >
    <Swiper
      :modules="[Navigation]"
      :slides-per-view="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="w-full relative"
      :navigation="{
        nextEl: '.next',
        prevEl: '.prev',
      }"
    >
      <SwiperSlide
        v-for="slide in arrayOfImages"
        :key="slide"
        class="mt-12 rounded-t-md cursor-grab lg:mt-0"
      >
        <nuxt-img
          :src="slide"
          alt="Outfit image"
          quality="80"
          width="600"
          height="600"
          format="webp"
          class="h-96 object-cover lg:h-[600px] lg:max-w-xl"
        />
      </SwiperSlide>

      <!-- Slider controls  -->
      <div
        v-show="activeSlide > 0"
        class="prev w-fit bg-gray-100 px-4 py-2 absolute top-1/2 z-40 cursor-pointer"
      >
        <i class="fa-solid fa-chevron-left cursor-pointer"></i>
      </div>
      <div
        v-show="activeSlide !== arrayOfImages.length - 1"
        class="next w-fit bg-gray-100 px-4 py-2 absolute top-1/2 z-40 right-0 cursor-pointer"
      >
        <i class="fa-solid fa-chevron-right cursor-pointer"></i>
      </div>
    </Swiper>
    <div class="flex gap-2 mt-2 lg:flex-col lg:mt-0 lg:mr-4">
      <nuxt-img
        v-for="(slide, index) in arrayOfImages"
        :key="slide"
        :src="slide"
        alt="Outfit image"
        quality="50"
        width="96"
        height="96"
        format="webp"
        class="w-16 h-16 object-cover cursor-pointer lg:w-24 lg:h-20"
        :class="[activeSlide === index ? 'border-2 border-black' : '']"
        @click="updateActiveSlide(index)"
        @mouseover="updateActiveSlide(index)"
      />
    </div>
  </div>
</template>

<style scoped></style>
