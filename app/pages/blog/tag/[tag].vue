<template>
    <main class="p-20">
        <section>
            <PartsTitle :title="'Develop Blog'" />
            <BlogCardList :contents="contents" :contents_show="contents_show" />
        </section>
        <section class="text-center mt-10">
            <PartsRoundButton :more_btn_show="more_btn_show" :text="'More'" @click-method="moreContents" />
        </section>
    </main>
</template>

<script setup>
useHead({
    title: "記事一覧",
});

const route = useRoute()
const tag = route.params.tag
const filters = "tags[contains]" + tag
// 記事取得時のパラメータを設定
let offset = 9, limit = 9;

// 初期表示の記事データを取得
let { data } = await useAsyncData("mountains", () =>
    $fetch(`/api/microcms?limit=${limit}&filters=${filters}`)
);
let contents = data.value.contents, totalCount = data.value.totalCount;

// moreボタンの表示・非表示
let more_btn_show = ref(true);

const moreContents = async () => {
    data = await useAsyncData("contents", () =>
        $fetch(`/api/microcms?offset=${offset}&limit=${limit}&filters=${filters}`)
    );
    contents = contents.concat(data.data.value.contents);
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