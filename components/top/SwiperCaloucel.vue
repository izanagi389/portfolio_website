<template>
    <v-container id="blog_caloucel_box" class="mx-auto">
        <h2 class="text-center text-h2">{{ swiperData.title }}</h2>
        <swiper-container :slides-per-view="swiperData.views" :autoplay="swiperData.autoPlay" :delay="0" :speed="swiperData.speed" :loop="swiperData.loop" @slidechange="onSlideChange">
            <template v-for="content in data['contents']">
                <swiper-slide>
                    <a :href="`/blog/articles/${content.id}/`">
                        <picture>
                            <source :srcset="`${content.thumbnail.url}?fm=webp&h=${swiperData.imageWidth}`" />
                            <img :src="`${content.thumbnail.url}?h=${swiperData.imageWidth}`" />
                        </picture>
                        <p>{{ content.title }}</p>
                    </a>
                </swiper-slide>
            </template>
        </swiper-container>
    </v-container>
</template>

<script>

import { hash } from 'ohash'
import { register } from 'swiper/element/bundle';

register();

export default {
    setup() {
        let swiperData = ref({
            title: "Latest Article",
            views: 0,
            imageWidth: 300,
            autoPlay: {
                delay: 0
            },
            speed: 3000,
            loop: true
        })
        const { data } = useFetch("/api/microcms", {
            key: hash(['api-fetch', "/api/microcms", "aaa"])
        })

        const onSlideChange = (e) => {
           
        };

        const calculateWindowWidth = () => {
            let windowWidth = window.innerWidth < 1080 ? window.innerWidth : 1080;
            swiperData.value.views = Math.floor(windowWidth / swiperData.value.imageWidth);
        }

        onMounted(() => {
            calculateWindowWidth();
            window.addEventListener('resize', calculateWindowWidth);
        })

        onBeforeUnmount(() => {
            window.addEventListener('resize', calculateWindowWidth);
        })

        return {
            data,
            swiperData,
            onSlideChange,
        };
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 200px;
    position: relative;
}

p {
    position: absolute;
    color: white;
    top: 75%;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 22%;
    background-color: rgba(129, 212, 250, 0.5);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media screen and (max-width: 600px) {
    p {
        top: 85%;
        -webkit-line-clamp: 1;
    }
}

h2 {
    margin-bottom: 10vw;
    font-family: Great Vibes !important;
}

#blog_caloucel_box {
    // max-width: 80%;
    // margin: 0 auto;
    padding: 0 10px;
    margin-bottom: 100px;
    margin-top: 20vw;
    max-width: 1080px !important;
}
</style>