<script setup lang="ts">
const props = defineProps(['scrollTarget'])
console.log(props.scrollTarget)
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-4xl font-bold text-teal-800">Welcome to Jokio</h1>
    <p class="mt-4 text-lg text-gray-700">Your daily dose of jokes!</p>
    <a
      :href="scrollTarget"
      class="mt-6 px-4 py-2 cursor-pointer bg-teal-800 text-white rounded hover:bg-teal-700"
    >
      Get Started
    </a>
  </div>
</template>
