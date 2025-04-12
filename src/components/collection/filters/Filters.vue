<script setup lang="ts">
const model = defineModel<number>()
</script>

<template>
  <div class="w-full max-w-xs">
    <!-- <label for="ratingFilter" class="block text-sm text-gray-600 mb-1">Filter by rating:</label> -->
    <select
      id="ratingFilter"
      v-model="model"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-800"
    >
      <option :value="0">All Ratings</option>
      <option :value="1">1 star & up</option>
      <option :value="2">2 stars & up</option>
      <option :value="3">3 stars & up</option>
      <option :value="4">4 stars & up</option>
      <option :value="5">5 stars only</option>
    </select>
  </div>
</template>
