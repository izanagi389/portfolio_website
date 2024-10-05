<template>
  <section>
    <div class="flex flex-wrap self-center justify-center w-full">
      <div class="w-full text-center text-2xl">Tags</div>
      <a
        v-for="t in tags"
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
