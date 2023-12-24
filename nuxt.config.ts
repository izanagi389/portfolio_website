// const nonce = "fnaso";

export default defineNuxtConfig({
    sourcemap: false,
    modules: [
        'nuxt-simple-sitemap',
        'nuxt-gtag',
    ],
    gtag: {
        id: process.env.GOOGLE_ANALYTICS_ID
    },
    site: {
        url:  process.env.HOMEPAGE_ROOT_URL,
      },
    typescript: {
        shim: false,
    },
    build: {
        transpile: ['vuetify', 'swiper']
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            ignore: [
                "/app/middle_name/",
                "/blog/articles/h6sc9bho3/%60/blog/articles/$%7Bcontent.id%7D%60",
                // 容量不足によりプログラム可能な検索えんじにに切り替えたため自作検索ページは除外
                "/blog/search/",
            ],
            routes: [
                '/',
            ]
        }

    },
    vite: {
        define: {
            "process.env.DEBUG": "false"
        }
    },
    css: ['vuetify/lib/styles/main.sass', "@/assets/css/default.scss"],
    app: {
        baseURL: "/",
        buildAssetsDir: "/static/",
        cdnURL: "",
        head: {
            title: "Izanagi's site",
            htmlAttrs: {
                lang: "ja"
            },
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Izanagiのポートフォリオサイトです。Nuxt＋Jamstackで構成されたサイトです。'
                },
                {
                    name: 'format-detection',
                    content: 'telephone=no'
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'Izanagi Home Page'
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: 'Izanagiのポートフォリオサイトです。Nuxt＋Jamstackで構成されたサイトです。'
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: process.env.HOMEPAGE_ROOT_URL
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: '/favicon.ico'
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'og:site_name',
                    property: 'og:site_name',
                    content: 'Izanagi Home Page'
                },
                {
                    hid: 'twitter:card',
                    property: 'twitter:card',
                    content: 'summary'
                },
                {
                    hid: 'twitter:site',
                    property: 'twitter:site',
                    content: process.env.TWITTER_MY_USER_ID
                },
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico' },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css',
                }
            ],
            script: [
                { async: true, src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADSENCE_CLIENT_ID}`, crossorigin: 'anonymous' },
                { async: true, src: 'https://cse.google.com/cse.js?cx=d419fbd8dd7914262' }
            ]
        },

    },

    runtimeConfig: {
        MICRO_CMS_API_KEY: process.env.MICRO_CMS_API_KEY,
        MICRO_CMS_SERVICE_DOMAIN: process.env.MICRO_CMS_SERVICE_DOMAIN,
        public: {
            FORM_RUN_URL: process.env.FORM_RUN_URL,
            TWITTER_MY_USER_ID: process.env.TWITTER_MY_USER_ID,
            HOMEPAGE_ROOT_URL: process.env.HOMEPAGE_ROOT_URL,
            CONNPASS_NICKNAME: process.env.CONNPASS_NICKNAME,
            GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
            RELETE_TITLES_API_URL: process.env.RELETE_TITLES_API_URL,
            SUGGEST_API_URL: process.env.SUGGEST_API_URL,
            SEARCH_API_URL: process.env.SEARCH_API_URL,
            TOPIC_API_URL: process.env.TOPIC_API_URL,
            RELETE_TITLES_API_URL_V2: process.env.RELETE_TITLES_API_URL_V2,
            MY_EVENTS_API_URL: process.env.MY_EVENTS_API_URL,
            HOLIDAY_JP_API_FILENAME: process.env.HOLIDAY_JP_API_FILENAME,
            HOLIDAY_JP_API_URL: process.env.HOLIDAY_JP_API_URL,
            ADSENCE_CLIENT_ID: process.env.ADSENCE_CLIENT_ID
        }

    },
    // SSG,ISG以外の時に利用
    routeRules: {
        // リダイレクト
        //     '/blog': { redirect: { to: '/blog/pages/1/', statusCode: 302 } },
        //     '/blog/': { redirect: { to: '/blog/pages/1/', statusCode: 302 } },
        //     '/blog/pages': { redirect: { to: '/blog/pages/1/', statusCode: 302 } },
        //     '/blog/pages/': { redirect: { to: '/blog/pages/1/', statusCode: 302 } },

        //     // 静的ページ
        //     '/blog/articles/**': { static: true },
        //     '/blog/tags/**': { static: true },

        //     // swr 
        //     '/blog/pages/**': { swr: true },
    },
});