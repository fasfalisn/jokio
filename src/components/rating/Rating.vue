<script setup lang="ts">
import IconStarEmpty from '../icons/IconStarEmpty.vue'
import IconStarFill from '../icons/IconStarFill.vue'

const props = defineProps({
  value: { type: Number },
})

console.log('Card props:', props)

const emit = defineEmits(['update:rating'])

const setRating = (val: number) => {
  emit('update:rating', val)
}
</script>

<template>
  <div class="flex space-x-1 cursor-pointer text-yellow-400">
    <span v-for="star in 5" :key="star" @click="setRating(star)" class="text-lg">
      <span v-if="star <= value">
        <IconStarFill class="text-yellow-500" />
      </span>
      <span v-else class="text-gray-300">
        <IconStarEmpty />
      </span>
    </span>
  </div>
</template>
