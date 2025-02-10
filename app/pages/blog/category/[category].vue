<template>
    <main class="p-20">
        <section>
            <PartsTitle :title="'Develop Blog'" />
            <BlogCardList :contents="contents" :contents_show="contents_show" />
        </section>
        <section v-if="contents_show" class="text-center mt-10">
            <PartsRoundButton :more_btn_show="more_btn_show" :text="'More'" @click-method="moreContents"
                :loading="loading" />
        </section>
    </main>
</template>

<script setup>
const route = useRoute()
const category = route.params.category;
const title = "Develop Blog";
useHead({
    title:title + " | " + category,
});

const filters = "categories[contains]" + category
// 記事取得時のパラメータを設定
let offset = 9, limit = 9;

// 初期表示の記事データを取得
let { data } = await useAsyncData("mountains", () =>
    $fetch(`/api/microcms?limit=${limit}&filters=${filters}`)
);
let contents = data.value.contents, totalCount = data.value.totalCount;

// moreボタンの表示・非表示（記事数がlimitより少ない場合は非表示）
let more_btn_show = totalCount > limit ? ref(true) : ref(false);

let loading = ref(false)
const moreContents = async () => {// ログインアニメーション表示
    loading.value = !loading.value;
    toggleComponent();
    data = await useAsyncData("contents", () =>
        $fetch(`/api/microcms?offset=${offset}&limit=${limit}&filters=${filters}`)
    );
    contents = contents.concat(data.data.value.contents);
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