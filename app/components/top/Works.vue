<template>
  <section>
    <div class="w-full text-center text-2xl">Products</div>
    <div class="flex flex-wrap self-center justify-center w-full">
      <div v-for="w in works">
        <a :href="w.url">{{ w.name }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const works = [
  {
    name: "Develop blog",
    url: "/blog",
  },
  {
    name: "Japanese MIddle Name",
    url: "/app/middle_name/",
  },
];
</script>
