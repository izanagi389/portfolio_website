<template>
    <footer class="h-8 text-center bg-white">
        <small class="m-2">{{year}} - Izanagi's Site</small>
    </footer>
</template>

<script setup>
const today = new Date();
const year = today.getFullYear();
</script>