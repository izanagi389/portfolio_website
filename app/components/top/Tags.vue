<template>
  <section class="pb-32">
    <div class="flex flex-wrap self-center justify-center w-full">
      <div class="w-full text-center text-3xl pb-3 text-white drop-shadow-[0_0px_3px_rgba(0,0,0,1)]">Tags</div>
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
