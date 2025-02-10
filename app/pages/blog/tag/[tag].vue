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
const title =  "Develop Blog";
const tag = route.params.tag

useHead({
    title: title + " | " +  tag,
});
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

let loading = ref(false)
const moreContents = async () => {
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