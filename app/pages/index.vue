<template>
  <main id="c-bg-image" class="pt-14">
    <div id="c-title-box">
      <div id="c-top-title" v-html="split_list"></div>
    </div>
    <TopPosts :contents="contents" />
    <TopTags />
    <TopProfile />
  </main>
</template>

<script setup>
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

let contents = [
  {
    title: "記事タイトル",
    img: "logo.png",
    text:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    href: "#",
  },
  {
    title: "記事タイトル",
    img: "logo.png",
    text:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    href: "#",
  },
  {
    title: "記事タイトル",
    img: "logo.png",
    text:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    href: "#",
  },
  {
    title: "記事タイトル",
    img: "logo.png",
    text:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    href: "#",
  },
];

let tags = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"];
</script>
