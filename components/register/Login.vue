<script setup lang="ts">
defineEmits(['handleClick']);
</script>

<template>
  <div class="transition-all duration-200 absolute w-full left-1/2 -translate-x-1/2">
    <div class="text-center px-4">
      <h1 class="text-2xl">Login to your account</h1>
      <p class="text-gray-600">Let's get started to future clothes design.</p>
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
        <label for="email-login" class="font-semibold text-lg">Email<span class="text-red-500">*</span></label>
        <input type="email" placeholder="Enter your email" id="email-login" class="border w-full p-2 rounded-full">
      </div>
      <div class="flex flex-col max-w-xs w-full mt-7">
        <label for="password-login" class="font-semibold text-lg">Password<span class="text-red-500">*</span></label>
        <input type="password" placeholder="Enter your email" id="password-login" class="border w-full p-2 rounded-full">
      </div>

      <div class="text-right max-w-xs w-full text-sm cursor-pointer hover:text-green-500">
        <p>Forgot password?</p>
      </div>
      <Button text="Login" extra-classes="bg-black text-white mt-5 w-full max-w-xs hover:bg-gray-700"/>

      <div class="my-5">
        <p>I don't have account yet. <span class="text-blue-500 cursor-pointer" @click="$emit('handleClick')">Register</span></p>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>