<template>
     <div id="word_cloud" style="width:100%; height:100vh; display: block"></div>
</template>

<script setup lamg="ts">
import gsap from 'gsap';


import cloud from "d3-cloud";
import * as d3 from 'd3'

onMounted(() => {
    gsap.fromTo(
        "#c-top-title span", // アニメーションさせる要素
        {
            autoAlpha: 0, // アニメーション開始前は透明
            y: 50, // 20px下に移動
        },
        {
            autoAlpha: 1, // アニメーション後は出現(透過率0)
            y: 0, // 20px上に移動
            // repeat: -1, // リピート無限
            // repeatDelay: 1.2, // 1.2秒遅れでリピート
            stagger: 0.2, // 0.2秒遅れて順番に再生
        }
    );

    let words = [
        "Hello", "world", "normally", "you", "want", "more", "words",
        "than", "this"]

    let links = ["http://localhost/test", "http://localhost/test", "http://localhost/test", "http://localhost/test","http://localhost/test", "http://localhost/test","http://localhost/test", "http://localhost/test","http://localhost/test", "http://localhost/test","http://localhost/test"]

    var w = window.innerWidth / 2
    var layout = cloud()
        .size([w, 500])
        .words(words.map(function (d) {
            return { text: d, size: 10 + Math.random() * 90, test: "haha" };
        }))
        .padding(5)
        .rotate(function () { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .fontSize(function (d) { return d.size; })
        .on("end", draw);

    layout.start();

    function draw(words) {
        d3.select("#word_cloud").append("svg")
            .attr("width", layout.size()[0])
            .attr("height", layout.size()[1])
            .append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .append("g")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .attr("text-anchor", "middle")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function (d) { return d.text; })
            .on("click", function (d, i) {
                const text = d.target.textContent;
                window.location.href = `/tags/${text}`
            });
    }
})

</script>