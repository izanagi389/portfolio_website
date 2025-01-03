<template>
  <section class="pb-32">
    <div class="flex flex-wrap self-center justify-center w-full">
      <PartsTitle :title="'Tags'" />
      <a
        v-for="t in tags" :key="t"
        class="w-1/6 text-center border-solid border-2 rounded-[25px] bg-white m-2 p-2"
        :href="'/blog/tag/' + t"
        >{{ t }}</a
      >
    </div>
  </section>
</template>

<script setup lang="ts">
let tags = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"];
</script>
