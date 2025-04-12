<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const revealed = ref<boolean>(false)

const togglePunchline = () => {
  revealed.value = !revealed.value
}
</script>

<template>
  <h2 class="text-xl font-semibold mb-2">{{ item.setup }}</h2>
  <transition name="fade">
    <p v-if="revealed" class="text-gray-700 mb-2">
      {{ item.punchline }}
    </p>
  </transition>

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
