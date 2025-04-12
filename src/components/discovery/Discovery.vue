<script setup lang="ts">
import Card from '../card/Card.vue'
import Toggle from './toggle/Toggle.vue'
import IconSpinner from '../icons/IconSpinner.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  toggle: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: null,
  },
  favorites: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:toggle', 'refetch', 'favoritesChanged'])

const setToggle = (value: 'random' | 'programming') => {
  emit('update:toggle', value)
}

const handleRefetch = () => {
  emit('refetch')
}

const checkIfFavorited = (itemId: number) => {
  return props.favorites.some((fav: any) => fav.id === itemId)
}

const handleFavoriteChange = () => {
  emit('favoritesChanged')
}
</script>

<template>
  <section id="discovery" class="min-h-screen pt-16">
    <div class="mx-auto py-10 px-3">
      <h1 class="text-4xl text-teal-800 font-bold text-center mb-8">Discovery</h1>
      <p class="text-center text-gray-600">
        Discover a collection of jokes that will make you laugh out loud!
      </p>
      <div class="flex align-middle justify-center mb-6">
        <button
          @click="handleRefetch"
          class="mt-6 mr-6 px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-600"
        >
          New Jokes
        </button>
      </div>
      <Toggle :toggle="toggle" @update:toggle="setToggle" />
      <div v-if="loading">
        <IconSpinner />
      </div>
      <div v-else-if="!loading && error">
        <p>There was an error fetching the shows: {{ error }}</p>
      </div>
      <div v-else-if="!loading && !error">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in props.data"
            :key="item.id"
            class="bg-white p-6 rounded-lg shadow-sm relative"
          >
            <Card
              :item="item"
              :isFavorited="checkIfFavorited(item.id)"
              @favoritesChanged="handleFavoriteChange"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
