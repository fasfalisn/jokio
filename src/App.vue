<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/footer/Footer.vue'
import Header from './components/header/Header.vue'
</script>

<template>
  <Navbar />
  <main class="container mx-auto">
    <Header scrollTarget="#discovery" />
  </main>
  <Footer />
</template>
