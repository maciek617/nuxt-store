<template>
  <button
    @click="$emit('handleClick')"
    class="px-6 py-2 rounded-md cursor-pointer group"
    :class="extraClasses"
    text="{{text}}"
  >
    <slot />
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  extraClasses: string;
}>();

defineEmits(['handleClick']);
</script>
