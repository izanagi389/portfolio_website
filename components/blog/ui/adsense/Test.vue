<template>
    <div class="sidebar_wrap" ref="sidebar_wrap">
        <div class="ad" ref="adaside">
            <div ref="adins"></div>
            <div ref="adspush"></div>
        </div>
    </div>
</template>
  
<script setup lang="ts">

const sidebar_wrap = ref()
const adins = ref()
const adspush = ref()

const config = useRuntimeConfig();

const adsenseID = ref(config.ADSENCE_CLIENT_ID);

onMounted(() => {
    const ins = document.createElement("ins") as HTMLElement
    ins.classList.value = "adsbygoogle"
    ins.style.display = "inline-block"
    ins.style.width = "100%"
    ins.style.height = "250px"
    ins.setAttribute("data-ad-client", adsenseID.value)
    ins.setAttribute("data-ad-slot", "6171367194")
    ins.setAttribute("data-ad-format", "auto")
    adins.value.appendChild(ins)

    const src = document.createElement("script") as HTMLScriptElement
    src.text = "(adsbygoogle = window.adsbygoogle || []).push({});"
    adspush.value.appendChild(src)
})
</script>

<style>
/* ➍ 広告未配信なら広告セクションを非表示にする */
ins.adsbygoogle[data-ad-status="unfilled"] {
  display: none !important;
}
</style>