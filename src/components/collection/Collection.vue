<script setup lang="ts">
import Card from '../discovery/card/Card.vue'

const props = defineProps({
  favorites: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['favoritesChanged'])

const handleFavoriteChange = () => {
  emit('favoritesChanged')
}
</script>

<template>
  <section class="min-h-screen pt-16">
    <div class="mx-auto py-10 px-3">
      <h1 class="text-4xl text-teal-800 font-bold text-center mb-8">Collection</h1>
      <p class="text-center text-gray-600 mb-6">
        Your favorite jokes are here! You can add them to your collection and view them later.
      </p>

      <div v-if="favorites.length === 0" class="text-center text-gray-600">
        <p>You don't have any favorite jokes yet.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in favorites"
          :key="item.id"
          class="bg-white p-6 rounded-lg shadow-sm relative"
        >
          <Card :item="item" :isFavorited="true" @favoritesChanged="handleFavoriteChange" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* You can adjust styles for Collection page here */
</style>
