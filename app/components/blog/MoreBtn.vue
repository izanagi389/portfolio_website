<template>
  <button
    class="w-72 p-4 text-sky-500 hover:text-white bg-white hover:bg-sky-500 shadow-lg shadow-blue-500/50 hover:shadow-inherit rounded-full duration-300"
    v-if="props.more_btn_show"
    @click="moreContents"
  >
    More
  </button>
</template>

<script setup lang="ts">
interface Props {
    more_btn_show: boolean
}
const props = defineProps<Props>()
const emits = defineEmits<{
    (e: 'more-contents'): void
}>()
const moreContents = () => {
    emits('more-contents')
}
</script>