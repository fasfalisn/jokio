<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/footer/Footer.vue'
import Header from './components/header/Header.vue'
import Discovery from './components/discovery/Discovery.vue'
import { onMounted, ref, watch } from 'vue'
import { fetchJokes } from './services/jokesService'
import Collection from './components/collection/Collection.vue'

const data = ref<any[]>([])
const loading = ref<boolean>(true)
const error = ref<string | null>(null)
const category = ref<'random' | 'programming'>('random')
const favorites = ref<any[]>([])

const loadData = async (category: 'random' | 'programming') => {
  loading.value = true
  const response = await fetchJokes(category)
  if (!response.ok) {
    error.value = 'Failed to fetch jokes'
    loading.value = false
    return
  }
  const jokes = await response.json()
  data.value = jokes
  loading.value = false
  error.value = null
}

const getFavorites = () => {
  favorites.value = JSON.parse(localStorage.getItem('favorites') || '[]')
}

onMounted(() => {
  loadData(category.value)
  getFavorites()
})

watch(category, (newValue) => {
  loadData(newValue)
})
</script>

<template>
  <Navbar />
  <main class="container mx-auto">
    <Header scrollTarget="#discovery" />
    <Discovery
      :data="data"
      v-model:toggle="category"
      :loading="loading"
      :error="error"
      :favorites="favorites"
      @refetch="loadData(category)"
      @favoritesChanged="getFavorites"
    />
    <div class="h-0.5 w-3/4 mx-auto bg-teal-800" />
    <Collection :favorites="favorites" @favoritesChanged="getFavorites" />
  </main>
  <Footer />
</template>
