<script setup lang="ts">
import { ref, computed } from 'vue'
import Card from '../card/Card.vue'
import IconSearch from '../icons/IconSearch.vue'

const props = defineProps({
  favorites: {
    type: Array,
    required: true,
  },
})

const searchText = ref('')

const emit = defineEmits(['favoritesChanged'])

const handleFavoriteChange = () => {
  emit('favoritesChanged')
}

const filteredFavorites = computed(() => {
  const query = searchText.value.toLowerCase()
  return props.favorites.filter((item: any) => item.setup.toLowerCase().includes(query))
})
</script>

<template>
  <section class="min-h-screen">
    <div class="mx-auto py-10 px-3">
      <h1 class="text-4xl text-teal-800 font-bold text-center mb-8">Collection</h1>
      <p class="text-center text-gray-600 mb-6">
        Your favorite jokes are here! You can add them to your collection and view them later.
      </p>
      <div class="flex items-center justify-center mt-4 mb-6">
        <div class="relative w-full max-w-md">
          <input
            type="text"
            v-model="searchText"
            placeholder="Search for a joke..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-800"
          />
          <button class="absolute right-0 top-0 mt-2 mr-2 text-teal-800 hover:text-teal-700">
            <IconSearch />
          </button>
        </div>
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
