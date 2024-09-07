<template>
    <main class="pt-20">
        <div class="">タグページ</div>
    </main>
</template>

<script setup>
const route = useRoute()
console.log(route.params.tag)
</script>