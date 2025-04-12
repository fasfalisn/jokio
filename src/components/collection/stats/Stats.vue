<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  jokes: { rating?: number }[]
}>()

const total = computed(() => props.jokes.length)

const ratings = computed(() =>
  props.jokes.map((j) => j.rating).filter((r): r is number => typeof r === 'number'),
)

const average = computed(() => {
  if (ratings.value.length === 0) return 0
  return (ratings.value.reduce((a, b) => a + b, 0) / ratings.value.length).toFixed(1)
})

const highest = computed(() => Math.max(...ratings.value, 0))
const lowest = computed(() => Math.min(...ratings.value, 0))
</script>

<template>
  <div class="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow mb-8">
    <h2 class="text-2xl font-semibold text-teal-800 mb-4">Statistics</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
      <li><strong>Total jokes:</strong> {{ total }}</li>
      <li><strong>Average rating:</strong> {{ average }}</li>
      <li><strong>Highest rating:</strong> {{ highest }}</li>
      <li><strong>Lowest rating:</strong> {{ lowest }}</li>
    </ul>
  </div>
</template>
