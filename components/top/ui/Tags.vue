<template>
    <v-card v-scroll.self="onScroll" class="overflow-y-auto pa-4">
        <v-chip-group column active-class="primary--text">
            <template v-for="tag in props.tagList">
                <v-chip :href="'/blog/tags/' + tag + '/1/'" :key="tag" v-if="!(tag.length == 0)" :text="tag"></v-chip>
            </template>
        </v-chip-group>
    </v-card>
</template>

<script lang="ts" setup>

const props = defineProps({
    tagList: {
        type: Object,
        required: true,
    }
})


let scrollInvoked = ref(0);

const onScroll = (() => {
    scrollInvoked.value++
})

</script>

<style lang="scss">
.v-chip {
    flex: none !important
}
</style>
