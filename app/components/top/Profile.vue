<template>
  <!-- プロフィールカードセクション -->
  <section class="pb-32">
    <div class="p-4 w-full self-center">
      <PartsTitle :title="'Profile'" />
      <div
        class="text-center w-4/5 ml-auto mr-auto border-solid border-2 border-sky-500 bg-white p-4"
      >
        <img
          src="@/assets/img/profile_image.png"
          class="rounded-full w-36 ml-auto mr-auto mb-4"
          alt=""
        />
        <div class="mt-4 mb-4 text-sm">{{ profile.ncikname.title }}</div>
        <div class="mt-4 mb-4 text-6xl font_dancing_script">
          {{ profile.ncikname.content }}
        </div>
        <div class="mt-10 mb-4 text-sm">{{ profile.hobby.title }}</div>
        <div>{{ profile.hobby.content }}</div>
        <div class="flex flex-wrap justify-end">
          <template v-for="a in account" :key="a">
            <a :href="a.href" target="_blank" rel="noopener"><i :class="a.class"></i></a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const profile = {
  ncikname: {
    title: "ニックネーム",
    content: "Izanagi",
  },
  hobby: {
    title: "趣味",
    content: "ゲーム（RPG系）・酒（日本酒やビールが好き！）・ラーメン巡り",
  },
};

const account = [
  {
    name: "X（旧Twitter）",
    href: "https://x.com/izanagiblog",
    class: "fa-brands fa-x-twitter bg-black text-white rounded-full p-1",
  },
  {
    name: "Github",
    href: "https://github.com/izanagi389",
    class: "fa-brands fa-github fa-xl ml-2",
  },
];
</script>
