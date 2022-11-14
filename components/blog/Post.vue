<template>
    <div class="post_box">
        <v-main>
            <div id="content_box">
                <BlogUiBreadcrumb :breadcrumbs="breadcrumbs" />
                <h1>{{ data.title }}</h1>
                <img :src="data.thumbnail.url" alt="" />
                <time id="date" :datetime="data.updatedAt">更新日: {{ dateFormat }}</time>

                <article v-for="(c, index) in data.blogContent" :key="'blog-article-' + index">
                    <div v-html="c.content"></div>
                    <div v-html="c.html"></div>
                </article>

                <div id="amenomuboko_box" v-if="componentShow">
                    <div id="realted_box">
                        <h2 id="realted_box_title">■関連記事(精度そんな良くないかもwww)</h2>
                        <ul id="related_title_list" v-if="related_data">
                            <li class="related_title" v-for="r in related_data"><a :href="`/blog/articles/${r.id}/`">{{
                                    r.title
                            }}</a></li>
                        </ul>
                        <div v-else class="text-center">
                            <v-progress-circular indeterminate color="primary"></v-progress-circular>
                        </div>
                    </div>
                    <div id="topic_box">
                        <h2 id="topic_box_title">■関連トピック</h2>
                        <v-chip-group column v-if="topic_list">
                            <v-chip v-for="topic in topic_list" :to="'/blog/search?word=' + topic" :value="topic">
                                {{ topic }}
                            </v-chip>
                        </v-chip-group>
                        <div v-else class="text-center">
                            <v-progress-circular indeterminate color="primary"></v-progress-circular>
                        </div>
                    </div>
                </div>
            </div>
        </v-main>
        <aside id="toc_box">
            <BlogUiToc :blogContent='text' />
        </aside>
    </div>
</template>


<script setup>
import { hash } from "ohash"

const route = useRoute()
const config = useRuntimeConfig()

const related_title_url = config.RELETE_TITLES_API_URL_V2 + route.params.post_id;
const topic_url = config.TOPIC_API_URL + route.params.post_id;

const { data } = await useFetch("/api/microcms", {
    params: { id: route.params.post_id },
    initialCache: false,
    key: hash(['api-fetch', "/api/microcms", "BlogPost"])
})


const date = new Date(data.value.updatedAt);

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const dateFormat = year + "年" + month + "月" + day + "日";


const title = data.value.title;
const description = !!data.value.description ? data.value.description : data.value.blogContent[0].content.replace(/(<([^>]+)>)/gi, '').substr(0, 150) + "...";
const thumbnail = data.value.thumbnail.url;

const url = config.HOMEPAGE_ROOT_URL + route.fullPath;

const breadcrumbs = [
    {
        text: 'TOP',
        disabled: false,
        href: '/',
    },
    {
        text: '記事一覧',
        disabled: false,
        href: '/blog/pages/1',
    },
    {
        text: title,
        disabled: true,
    },
];

let text = "";

for (const c of data.value.blogContent) {
    text += c.content
}

useHead({
    title: title,
    meta: [
        { property: 'og:title', hid: 'og:title', content: title },
        { name: 'description', hid: 'description', content: description },
        { property: 'og:description', hid: 'og:description', content: description },
        { property: 'og:image', hid: 'og:image', content: thumbnail },
        { property: 'og:url', hid: 'og:url', content: url },
    ],
})

const componentShow = ref(true);

const reload = (() => {
    componentShow.value = false;
    nextTick(() => {
        componentShow.value = true;
    })

})


const related_data = ref();
const topic_list = ref();

onMounted(async () => {
    Prism.highlightAll();

    window.onload = async () => {
        const array = await useAmenomuboko(related_title_url, topic_url)

        related_data.value = array[0];
        topic_list.value = array[1];
        reload()
    }


})

</script>

<style lang="scss">
.post_box {
    background-color: #edf2f6;
    padding-top: 50px;
    display: flex;

    main {
        width: 70%;
        padding-left: 80px;

        #content_box {
            padding: 0 3vw;

            #date {
                display: block;
                padding-bottom: 20px;
                font-weight: bold;
                opacity: 0.5;
            }

            h1 {
                margin-bottom: 10px;
            }

            h2 {
                margin: 45px 0;

                &#realted_box_title,
                &#topic_box_title {
                    color: #59adf1;
                    font-weight: bold;
                }

            }

            ul#related_title_list {
                background: inherit;
                border-radius: 0px;
                box-shadow: none;
                padding-left: 20px;
            }

            h3,
            h4 {
                margin: 30px 0;
            }

            p {
                line-height: 3.5;
            }

            a:visited {
                color: #0707ED !important;
            }
        }
    }

    #toc_box {
        padding: 80px 20px 0 20px;
        width: 30%;
    }

    @media screen and (max-width: 640px) {
        main {
            width: 100%;
            padding-left: 0 !important;
        }

        #toc_box {
            width: 0;
            display: none;
        }
    }
}
</style>