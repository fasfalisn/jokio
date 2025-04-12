<script setup lang="ts">
const model = defineModel<{ sortBy: string; sortOrder: string }>()

const sortByOptions = [
  { label: 'Alphabetical', value: 'alphabetical' },
  { label: 'Rating', value: 'rating' },
]

const sortOrderOptions = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' },
]
</script>

<template>
  <div class="flex gap-4 items-center w-full max-w-md">
    <div class="w-1/2">
      <label class="block text-sm text-gray-600 mb-1">Sort by:</label>
      <select
        v-model="model.sortBy"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-800"
      >
        <option v-for="option in sortByOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    <div class="w-1/2">
      <label class="block text-sm text-gray-600 mb-1">Order:</label>
      <select
        v-model="model.sortOrder"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-800"
      >
        <option v-for="option in sortOrderOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>
