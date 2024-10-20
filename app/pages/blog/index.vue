<template>
  <main class="pt-20">
    <section>
      <div class="">ブログページ</div>
      <ul class="grid grid-cols-4 gap-4">
        <template  v-for="(d, index) in data">
          <li v-if="index == 0" class="row-span-2 col-span-2 bg-white">
            <a :href="'/blog/post/' + d.id" class="row-span-3">
              <img :src="d.thumbnail.url" alt="" />
              {{ d.title }}
              <div>{{ d.description }}</div>
            </a>
          </li>

          <li v-else class="bg-white">
            <a :href="'/blog/post/' + d.id" class="row-span-3">
              <img :src="d.thumbnail.url" alt="" />
              {{ d.title }}
              <div>{{ d.description }}</div>
            </a>
          </li>
        </template>
      </ul>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "記事一覧",
});

const data = await useFetchArticles();
</script>
