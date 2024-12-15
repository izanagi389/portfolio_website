<template>
  <main class="max-w-7xl pt-14 ml-auto mr-auto">
    <div id="c-title-box">
      <div id="c-top-title" v-html="split_str"></div>
    </div>
    <TopWorks />
    <TopProfile />
    <TopPosts :contents="contents" />
    <TopTags />
    
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const title = runtimeConfig.public.site_title;

let split_list:any[] = [];

title.split("", -1).forEach((element:string) => {
  if (element == "-") {
    split_list.push("<span>&nbsp;</span>");
  } else {
    split_list.push(`<span>${element}</span>`);
  }
});

let split_str = split_list.join("");
let contents = await useFetchArticles(3);
</script>
