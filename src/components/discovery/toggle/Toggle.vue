<script setup lang="ts">
const props = defineProps({
  toggle: {
    type: String,
  },
})

const emit = defineEmits(['update:toggle'])

const setToggle = (value: 'random' | 'programming') => {
  emit('update:toggle', value)
}
</script>

<template>
  <div class="flex justify-center gap-4 mb-8">
    <button
      @click="setToggle('random')"
      :class="[
        'px-4 py-2 rounded font-semibold',
        toggle === 'random' ? 'bg-teal-800 text-white' : 'bg-gray-200 text-gray-800',
      ]"
    >
      Random
    </button>
    <button
      @click="setToggle('programming')"
      :class="[
        'px-4 py-2 rounded font-semibold',
        toggle === 'programming' ? 'bg-teal-800 text-white' : 'bg-gray-200 text-gray-800',
      ]"
    >
      Programming
    </button>
  </div>
</template>
