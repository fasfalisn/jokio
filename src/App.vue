<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/footer/Footer.vue'
import Header from './components/header/Header.vue'
import Discovery from './components/discovery/Discovery.vue'
import { onMounted, ref, watch } from 'vue'
import { fetchJokes } from './services/jokesService'

const data = ref<any[]>([])
const loading = ref<boolean>(true)
const error = ref<string | null>(null)
const category = ref<'random' | 'programming'>('random')

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

onMounted(() => {
  loadData(category.value)
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
      @refetch="loadData(category)"
      :loading="loading"
      :error="error"
    />
  </main>
  <Footer />
</template>
