<template>
    <div class="post_box">
        <v-main>
            <div id="content_box">
                <BlogUiBreadcrumb :breadcrumbs="breadcrumbs" />
                <h1>{{ data.title }}</h1>
                <img :src="`${data.thumbnail.url}?fit=crop&w=640&fm=webp`" alt="" />
                <time id="date" :datetime="data.updatedAt">更新日: {{ dateFormat }}</time>

                <article v-for="(c, index) in data.blogContent" :key="'blog-article-' + index">
                    <div v-html="c.content"></div>
                    <div v-html="c.html"></div>
                </article>
            </div>
        </v-main>
        <nav id="side_menu">
            <BlogUiToc :blogContent='text' />
        </nav>
    </div>
</template>


<script setup>
import { hash } from "ohash"

const route = useRoute()
const config = useRuntimeConfig()


const topic_url = config.public.TOPIC_API_URL + route.params.post_id;

const { data } = await useFetch("/api/microcms", {
    params: { id: route.params.post_id },
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

const url = config.public.HOMEPAGE_ROOT_URL + route.fullPath;

const breadcrumbs = [
    {
        text: 'TOP',
        disabled: false,
        href: '/',
    },
    {
        text: '記事一覧',
        disabled: false,
        href: '/blog/pages/1/',
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


const topic_list = ref();

onMounted(async () => {
    Prism.highlightAll();
})

</script>

<style lang="scss">
.post_box {
    background-color: #edf2f6;
    padding-top: 100px;
    position: relative;
    display: flex;

    main {
        width: 60%;
        padding: 0 0 100px 100px !important;
        flex: none !important;

        #content_box {

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

            ol,
            ul {
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

    @media screen and (max-width: 768px) {
        main {
            width: 100%;
            padding:0  20px !important ;
        }
    }
}

#amenomuboko_box {
    margin-bottom: 100px;
}

#side_menu {
    margin-right: 100px;
    position: fixed;
    right: 0;
    width: 200px;
}

@media screen and (max-width: 768px) {
    #side_menu {
        display: none;
    }
}
</style>