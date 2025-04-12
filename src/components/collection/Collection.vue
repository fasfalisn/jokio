<script setup lang="ts">
import { ref, computed } from 'vue'
import Card from '../card/Card.vue'
import Filters from './filters/Filters.vue'
import Search from './search/Search.vue'

const props = defineProps({
  favorites: {
    type: Array,
    required: true,
  },
})

const searchText = ref('')
const minRating = ref(0)

const emit = defineEmits(['favoritesChanged'])

const handleFavoriteChange = () => {
  emit('favoritesChanged')
}

const filteredFavorites = computed(() => {
  const query = searchText.value.toLowerCase()
  return props.favorites.filter((item: any) => {
    const matchesSearch = item.setup.toLowerCase().includes(query)
    const matchesRating = (item.rating || 0) >= minRating.value
    return matchesSearch && matchesRating
  })
})
</script>

<template>
  <section class="min-h-screen">
    <div class="mx-auto py-10 px-3">
      <h1 class="text-4xl text-teal-800 font-bold text-center mb-8">Collection</h1>
      <p class="text-center text-gray-600 mb-6">
        Your favorite jokes are here! You can add them to your collection and view them later.
      </p>
      <div class="flex flex-col items-center justify-between gap-4 mt-4 mb-6">
        <Search v-model="searchText" />
        <Filters v-model="minRating" />
      </div>

      <div v-if="filteredFavorites.length === 0" class="text-center text-gray-600">
        <p>No jokes found.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in filteredFavorites"
          :key="item.id"
          class="bg-white p-6 rounded-lg shadow-sm relative"
        >
          <Card :item="item" :isFavorited="true" @favoritesChanged="handleFavoriteChange" />
        </div>
      </div>
    </div>
  </section>
</template>
