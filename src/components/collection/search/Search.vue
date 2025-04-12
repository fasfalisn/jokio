<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'
const model = defineModel<string>()
</script>

<template>
  <div class="relative w-full max-w-md">
    <input
      type="text"
      v-model="model"
      placeholder="Search"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-800"
    />
    <button class="absolute right-0 top-0 mt-2 mr-2 text-teal-800 hover:text-teal-700">
      <IconSearch />
    </button>
  </div>
</template>
