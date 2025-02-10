<template>
  <main class="p-20">
    <section>
      <PartsTitle :title="title" />
      <BlogCardList :contents="contents" :contents_show="contents_show" />
    </section>
    <section v-if="contents_show" class="flex justify-center text-center mt-10">
      <PartsRoundButton :more_btn_show="more_btn_show" :text="'More'" @click-method="moreContents" :loading="loading" />
    </section>
  </main>
</template>

<script setup>
// ページタイトル
const title = "Develop Blog";

useHead({
  title: title,
});

// 記事取得時のパラメータを設定
let offset = 9, limit = 9;

// 初期表示の記事データを取得
let { data } = await useAsyncData("mountains", () =>
  $fetch(`/api/microcms?limit=${limit}`)
);
let contents = data.value.contents, totalCount = data.value.totalCount;

// moreボタンの表示・非表示
let more_btn_show = ref(true);
// ローディング中か判定
let loading = ref(false)

const moreContents = async () => {

  // ログインアニメーション表示
  loading.value = !loading.value;
  toggleComponent();

  data = await useAsyncData("contents", () =>
    $fetch(`/api/microcms?offset=${offset}&limit=${limit}`)
  );

  contents = contents.concat(data.data.value.contents);
  // ログインアニメーション非表示
  loading.value = !loading.value;
  toggleComponent();
  
  if (totalCount > offset) {
    offset += 9;
  }
  if (totalCount < offset) {
    more_btn_show.value = false;
  }
};

// コンポーネントの再読み込み
let contents_show = ref(true);
const toggleComponent = () => {
  contents_show.value = false;
  nextTick();
  contents_show.value = true;
};
</script>
