<template>
    <main class="max-w-7xl pt-14 ml-auto mr-auto">
        <section>
            <PartsTitle :title="'Privacy Policy'" />
            <div class="bg-white p-10 m-10">
                <template v-for="p in privacy">
                    <h2 v-if="p.title.length > 0">{{ p.title }}</h2>
                    <div v-if="p.content.length > 0">{{ p.content }}</div>
                </template>
            </div>
        </section>
    </main>
</template>

<script setup lamg="ts">

const runtimeConfig = useRuntimeConfig();
const site_name = runtimeConfig.public.site_title;

// 参考 https://xs832297.xsrv.jp/blog-privacy-policy/#s1
const privacy = [
    {
        title: "",
        content: site_name + "（以下、「当サイト」とします。）は、訪問者のプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーは、当サイトがどのように情報を収集、使用、管理するかを説明しています。"
    },
    {
        title: "個人情報の収集と利用",
        content: "当サイトでは、コメント投稿やお問い合わせ時に、名前（ハンドルネーム）、メールアドレス等の個人情報をお尋ねすることがあります。これらの情報は、お問い合わせへの回答や必要な情報を電子メールでご連絡する場合にのみ使用し、これらの目的以外では使用いたしません。"
    },
    {
        title: "クッキー（Cookie）について",
        content: "当サイトは、Googleアドセンスによる広告配信や訪問者のサイト利用状況の把握のためにクッキー（Cookie）を使用することがあります。クッキーは、訪問者のブラウザを通じて情報を収集しますが、個人を特定するものではありません。Cookieを無効にする方法は「<a href='https://policies.google.com/technologies/ads?gl=jp'>広告ーポリシーと規約ーGoogle</a>」をご確認ください。"
    },
    {
        title: "アクセス解析ツールについて",
        content: "当サイトでは、Googleアナリティクスを使用して、サイトの利用状況を分析しています。Googleアナリティクスもクッキーを使用してデータを収集しますが、個人を特定する情報は含まれません。なお、この規約に関しては、「<a href='https://marketingplatform.google.com/about/analytics/terms/jp/''>Googleアナリティクス利用規約</a>」または「<a href='https://policies.google.com/technologies/partner-sites'>Googleポリシーと規約」をご覧ください。</a>"
    },
    {
        title: "情報の共有と開示",
        content: "当サイトは、法的要求がある場合や、当サイトの権利、財産、安全の保護のために必要と判断される場合を除き、個人情報を第三者に開示または共有しません。"
    },
    {
        title: "プライバシーポリシーの変更について",
        content: "当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイト上で公開することで効力を発揮します。"
    },
]
</script>

<style>
h2 {
    font-weight: bold;
    font-size: 25px;
    padding: 30px 0 10px 0;
}
</style>