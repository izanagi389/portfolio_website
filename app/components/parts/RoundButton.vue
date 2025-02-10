<template>
  <button
    class="w-72 p-4 text-sky-500 hover:text-white bg-white hover:bg-sky-500 shadow-lg shadow-blue-500/50 hover:shadow-inherit rounded-full duration-300"
    v-if="props.more_btn_show" @click="clickMethod">
    <template v-if="props.loading">
      <svg class="inline-block mr-2 animate-spin h-4 w-4 border-1 border-white-500 rounded-full border-t-transparent"
        viewBox="0 0 24 24"></svg>
        loading ...
    </template>
    <template v-else>
      {{ props.text }}
    </template>

  </button>
</template>

<script setup lang="ts">
interface Props {
  more_btn_show: boolean,
  text: string,
  loading: boolean
}
const props = defineProps<Props>()
const emits = defineEmits<{
  (e: 'click-method'): void
}>()
const clickMethod = () => {
  emits('click-method')
}
</script>