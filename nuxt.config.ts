// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  compatibilityDate: '2024-07-06',
  css: ['assets/css/main.css'],
  runtimeConfig: {
    public: {
      site_title: "Izanagi's-portfolio-site"
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ja', prefix: 'og: https://ogp.me/ns#'
      },
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "stylesheet",
          "href": "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap",
        },
        {
          "rel": "stylesheet",
          "href": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
          "integrity": "sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==",
          "crossorigin": "anonymous",
          "referrerpolicy": "no-referrer"
        }
      ],
      style: [],
      script: [
        {
           "src": "https://platform.twitter.com/widgets.js",
        }
      ],
      noscript: []
    }
  },

})