<template>
    <div id="toc_list">
        <h2>目次</h2>
        <BlogUiTocNode :tocList="tocList" />
        <!-- <BlogUiAdsensePortrait /> -->
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    blogContent: {
        type: String,
        required: true
    }
});

let tag_val = "h.";

const pattern: RegExp = new RegExp("<" + tag_val + "(?: .+?)?>.*?<\/" + tag_val + ">", "g");
const blogContent = props.blogContent.match(pattern)


let tocList: any[] = [];

onBeforeMount(async () => {
    if (!!blogContent) {

        let h2Flag = 0;
        let h3Flag = 0;
        let h4Flag = 0;

        blogContent.forEach(function (t) {
            let item = {
                id: "",
                name: "",
                children: [],
            };
            item.name = t.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');

            const id = t.match(/\"(.+)\"/);
            if (id) {
                item.id = id[1];
            } else {
                item.id = "";
            }
            

            if (t.includes("h2")) {
                h2Flag++;
                h3Flag = 0;
                h4Flag = 0;
                tocList.push(item);
            } else if (t.includes("h3")) {
                h4Flag = 0;
                tocList[h2Flag - 1].children.push(item);
                h3Flag += 1;
            } else if (t.includes("h4")) {
                tocList[h2Flag - 1].children[h3Flag - 1].children.push(item);
                h4Flag += 1;
            }
        });
    }

})



</script>


<style lang="scss" scoped>

</style>