<template>
    <div id="latestBlog">
        <h2>{{ title }}</h2>
        <ol>
            <li v-for="c in contents" :key="`latest-title-${c.id}`">
                <a :href="`/blog/articles/${c.id}/`" v-bind="props"><span>{{ c.title }}</span></a>
            </li>
        </ol>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    contents: {
        type: Object,
        required: true,
    }
})

const contents: object = props.contents
const title: String = "最新記事"


</script>

<style lang="scss" scoped>
#latestBlog {
    h2 {
        padding-top: 10px;
    }

    ol {
        counter-reset: num;
        list-style-type: none !important;
        padding: 0;
        margin: 0;
        padding: 10px;

        li {
            position: relative;
            padding-left: 30px;
            line-height: 1.5em;
            padding: 0.5em 0.5em 0 30px;


            &:first-child {
                margin-top: 45px;
            }

            &:nth-child(n + 2) {
                margin: 45px 0;
            }

            a {
                display: inline-block;
                width: 100%;
                color: black;

                &:before {
                    position: absolute;
                    counter-increment: num;
                    content: counter(num);
                    display: inline-block;
                    background: #39A9F4;
                    border: #39A9F4 1px solid;
                    color: #fff;
                    font-family: 'Arial', sans-serif;
                    font-weight: bold;
                    font-size: 14px;
                    border-radius: 50%;
                    left: 0;
                    width: 22px;
                    height: 22px;
                    line-height: 22px;
                    text-align: center;
                    top: 10px;
                }

                &:visited,
                &:active {
                    color: inherit;
                }

                // https://www.nxworld.net/15-text-link-hover-effect-and-design.html#%E6%96%87%E5%AD%97%E3%81%8C%E7%B8%A6%E5%9B%9E%E8%BB%A2
                span {
                    display: block;
                    transition: .5s;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                &:hover span {
                    -webkit-transform: rotateX(360deg);
                    transform: rotateX(360deg);
                    font-weight: bold;
                }

            }


        }
    }
}
</style>