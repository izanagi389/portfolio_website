<template>
  <main class="max-w-7xl pt-14 ml-auto mr-auto">
    <div id="c-title-box">
      <div id="c-top-title" v-html="split_list"></div>
    </div>
    <TopPosts :contents="contents" />
    <TopTags />
    <TopProfile />
    <TopWorks />
    
  </main>
</template>

<script setup lang="ts">

const runtimeConfig = useRuntimeConfig();

const title = runtimeConfig.public.site_title;

let split_list = [];

title.split("", -1).forEach((element) => {
  if (element == "-") {
    split_list.push("<span>&nbsp;</span>");
  } else {
    split_list.push(`<span>${element}</span>`);
  }
});

split_list = split_list.join("");

let contents = await useFetchArticles(3);

let tags = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"];
</script>
