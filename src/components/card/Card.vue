<script setup lang="ts">
import { ref, watch } from 'vue'
import IconStarEmpty from '@/components/icons/IconStarEmpty.vue'
import IconStarFill from '@/components/icons/IconStarFill.vue'
import Rating from '../rating/Rating.vue'
import type { Joke } from '@/interfaces/Joke'

const props = defineProps<{
  item: Joke
  isFavorited: boolean
}>()

const revealed = ref<boolean>(false)
const isFavorited = ref<boolean>(props.isFavorited)
const rating = ref<number>(0)

if (isFavorited.value && props.item.rating) {
  rating.value = props.item.rating
} else {
  rating.value = 0
}

const togglePunchline = () => {
  revealed.value = !revealed.value
}

const emit = defineEmits(['favoritesChanged'])

const toggleFavorite = () => {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

  if (isFavorited.value) {
    favorites = favorites.filter((fav: any) => fav.id !== props.item.id)
  } else {
    favorites.push({ ...props.item, rating: rating.value })
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))

  isFavorited.value = !isFavorited.value
  emit('favoritesChanged')
}

const updateRating = (newRating: number) => {
  rating.value = newRating
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
  favorites = favorites.map((fav: any) =>
    fav.id === props.item.id ? { ...fav, rating: newRating } : fav,
  )
  localStorage.setItem('favorites', JSON.stringify(favorites))
  emit('favoritesChanged')
}

watch(
  () => props.isFavorited,
  (newVal) => {
    isFavorited.value = newVal
  },
  { immediate: true },
)
</script>

<template>
  <h2 class="text-xl font-semibold mb-2">{{ item.setup }}</h2>
  <button @click="toggleFavorite" class="absolute top-2 right-2" aria-label="Toggle Favorite">
    <IconStarFill v-if="isFavorited" class="text-yellow-500" />
    <IconStarEmpty v-else class="text-gray-400" />
  </button>
  <transition name="fade">
    <p v-if="revealed" class="text-gray-700 mb-2">
      {{ item.punchline }}
    </p>
  </transition>

  <Rating v-if="isFavorited" :value="rating" @update:rating="updateRating" />

  <button @click="togglePunchline()" class="mt-2 text-sm text-teal-700 font-medium hover:underline">
    {{ revealed ? 'Hide' : 'Show' }} Punchline
  </button>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
