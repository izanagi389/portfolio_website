<template>
    <v-container id="content_link_box" class="mx-auto">
        <h2 class="text-center text-h2">{{ title }}</h2>
        <v-row justify="space-around">
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex" style="max-width: 400px">
                <v-card>
                    <a :href="card.href" v-if="!card.maintenance">
                        <v-img :src="card.src" class="white--text align-end img_wrap menu_link_style"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" :height="card.height"
                            :width="card.width" cover>
                            <v-card-title class="text-white" v-text="card.title"></v-card-title>
                        </v-img>
                    </a>
                    <a @click="snackbar = true" v-else>
                        <v-img :src="card.src" class="white--text align-end img_wrap menu_link_style"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" :height="card.height"
                            :width="card.width" cover>
                            <v-card-title class="text-white" v-text="card.title"></v-card-title>
                        </v-img>
                    </a>
                    <v-snackbar v-model="snackbar">
                        {{ maintenanceText }}
                        <template v-slot:actions>
                            <v-btn color="pink" variant="text" @click="snackbar = false">
                                Close
                            </v-btn>
                        </template>
                    </v-snackbar>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">

type CardDataType = {
    title: string;
    src: string;
    flex: number;
    height: number;
    width: number;
    href: string;
    maintenance: boolean;
}

const title: String = "Contents";
const snackbar = ref(false);
const maintenanceText: String = "メンテナンス中です";

const cards: Array<CardDataType> = [
    {
        title: 'Develop blog',
        src: '/images/product/developBlog.webp',
        flex: 4,
        height: 250,
        width: 400,
        href: "/blog/pages/1/",
        maintenance: false,
    }
]


</script>

<style lang="scss" scoped>
h2 {
    margin: 100px 0;
    font-family: Great Vibes !important;
}

#content_link_box {
    max-width: 1080px !important;
}
</style>