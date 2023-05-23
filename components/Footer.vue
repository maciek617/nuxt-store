<script setup lang="ts">
const footerLinkBase = ref([
  {
    label: {
      labelName: 'Help center',
      labelIcon: 'fa-solid fa-handshake-angle',
      links: ['Payment methods', 'Return procedure', 'Newsletter']
    },
  },
  {
    label: {
      labelName: 'Our services',
      labelIcon: 'fa-solid fa-info',
      links: ['Lorem Ipsum', 'Lorem ipsum1', 'Lorem ipsum2']
    },
  },
  {
    label: {
      labelName: 'About us',
      labelIcon: 'fa-solid fa-users-rectangle',
      links: ['Career', 'Investments', 'Future']
    },
  },
  {
    label: {
      labelName: 'Our partners',
      labelIcon: 'fa-solid fa-handshake',
      links: ['DHL', 'DPD', 'InPost']
    },
  },
  {
    label: {
      labelName: 'Method payments',
      labelIcon: 'fa-solid fa-credit-card',
      links: ['Przelewy24', 'Mastercard', 'Visa', 'PayPal']
    },
  }
]);
</script>

<template>
  <footer class="bg-gray-50 py-20 z-30">
    <div class="container mx-auto px-4 flex flex-col justify-center lg:flex-row lg:flex-wrap lg:gap-32">
      <div v-for="footerLink in footerLinkBase" :key="footerLink.label.labelName">
       <div class="flex items-center gap-2 mb-2">
         <i :class="footerLink.label.labelIcon"></i>
         <p class="text-2xl">{{footerLink.label.labelName}}</p>
       </div>
        <div>
          <p v-for="link in footerLink.label.links" :key="link" class="flex items-center gap-2 cursor-pointer hover:underline">
            <span class="w-1 h-1 bg-gray-900 block rounded-full"></span>
            {{link}}
          </p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <p>All rights reserved &copy; 2023 | LoCo</p>
    </div>
  </footer>
</template>
