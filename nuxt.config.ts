// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-security'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true
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
        lang: 'ja',
        prefix: 'og: https://ogp.me/ns#'
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css',
          integrity:
            'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer'
        }
      ],
      style: [],
      script: [
        {
          src: 'https://platform.twitter.com/widgets.js'
        }
      ],
      noscript: []
    }
  },
  vite: {
    build: {
      target: ['es2022', 'edge89', 'firefox89', 'chrome89', 'safari15']
    },
    plugins: [tailwindcss()]
  },
  build: {
    transpile: ['lodash-es', 'shiki']
  },
  nitro: {
    esbuild: {
      options: {
        // Node.js のバージョンのみ指定すればOK
        target: 'es2022'
      }
    }
  },

  routeRules: {
    '/privacy': { prerender: true },
    '/blog/**': { isr: 3600 },
    '/blog/category/**': { isr: 3600 },
    '/blog/tags/**': { isr: 3600 },
    '/blog/post/**': { isr: true }
  },
  
  security: {
    strict: false,
    headers: {
      crossOriginResourcePolicy: 'same-origin',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginEmbedderPolicy: 'credentialless',
      contentSecurityPolicy: {
        'base-uri': ["'none'"],
        'font-src': ["'self'", 'https:', 'data:'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:', "images.microcms-assets.io"],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
        'script-src': [
          "'self'",
          'https:',
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'"
        ],
        'upgrade-insecure-requests': true
      },
      originAgentCluster: '?1',
      referrerPolicy: 'no-referrer',
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: false
      },
      xContentTypeOptions: 'nosniff',
      xDNSPrefetchControl: 'off',
      xDownloadOptions: 'noopen',
      xFrameOptions: 'SAMEORIGIN',
      xPermittedCrossDomainPolicies: 'none',
      xXSSProtection: '0',
      permissionsPolicy: {
        camera: false,
        autoplay: false,
        geolocation: false,
      }
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000,
      maxUploadFileRequestInBytes: 8000000,
      throwError: true
    },
    rateLimiter: {
      tokensPerInterval: 150,
      interval: 300000,
      headers: false,
      driver: {
        name: 'lruCache'
      },
      throwError: true
    },
    xssValidator: {
      throwError: true
    },
    // corsHandler: {
    //   origin: [],
    //   methods: ['GET'],
    //   preflight: {
    //     statusCode: 204
    //   }
    // },
    allowedMethodsRestricter: {
      methods: ['GET'],
      throwError: true
    },
    hidePoweredBy: true,
    basicAuth: false,
    enabled: true,
    csrf: false,
    nonce: true,
    removeLoggers: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
      nitroHeaders: true,
      exportToPresets: true
    },
    sri: true
  }
})
