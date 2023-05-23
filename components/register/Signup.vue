<script setup lang="ts">
defineEmits(['handleClick']);
</script>

<template>
  <div class="transition-all duration-200 absolute w-full left-1/2 -translate-x-1/2">
    <div class="text-center px-4">
      <h1 class="text-2xl">Create your account</h1>
      <p class="text-gray-600">Make first step to the future of clothes.</p>
    </div>

    <div class="flex items-center justify-center mt-5 border w-full max-w-xs mx-auto px-6 py-1 rounded-full cursor-pointer transition-all hover:bg-gray-800 hover:text-white">
      <nuxt-img src="../public/google_icon.webp" alt="google icon" height="96" width="96" quality="80" format="webp" class="w-8 h-8"/>
      <p> Login with Google</p>
    </div>

    <div class="border-t-2 mt-5 relative max-w-sm mx-auto">
      <p class="absolute left-1/2 -top-5 -translate-x-1/2 bg-white p-2 rounded-full text-xl">or</p>
    </div>

    <form class="mt-10 flex flex-col justify-center items-center">
      <div class="flex flex-col max-w-xs w-full">
        <label for="name-register" class="font-semibold text-lg">Name<span class="text-red-500">*</span></label>
        <input type="text" placeholder="Enter your email" id="name-register" class="border w-full p-2 rounded-full">
      </div>
      <div class="flex flex-col max-w-xs w-full mt-7">
        <label for="email-register" class="font-semibold text-lg">Email<span class="text-red-500">*</span></label>
        <input type="email" placeholder="Enter your email" id="email-register" class="border w-full p-2 rounded-full">
      </div>
      <div class="flex flex-col max-w-xs w-full mt-7">
        <label for="password-register" class="font-semibold text-lg">Password<span class="text-red-500">*</span></label>
        <input type="password" placeholder="Enter your email" id="password-register" class="border w-full p-2 rounded-full">
      </div>
      <div class="flex flex-col max-w-xs w-full mt-7">
        <label for="terms-register" class="font-semibold text-lg">Accept terms<span class="text-red-500">*</span></label>
        <div class="flex items-center justify-start">
          <input type="checkbox" placeholder="Enter your email" id="terms-register" class="border p-2 rounded-full">
          <label class="px-2 cursor-pointer" for="terms-register">Accept our terms <span class="text-blue-400">here</span></label>
        </div>
      </div>

      <Button text="Register" extra-classes="bg-black text-white mt-5 w-full max-w-xs hover:bg-gray-700"/>

      <div class="my-5">
        <p>I already have an account. <span class="text-blue-500 cursor-pointer" @click="$emit('handleClick')">Login</span></p>
      </div>
    </form>
  </div>

</template>

<style scoped>

</style>