// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-security',
    'nuxt-gtag',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  experimental: {
    payloadExtraction: false
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
        },
        {
          name: 'google-site-verification',
          content: 'E9I6tDnNeksUxZCoW73VKeAh7FPb9I8RR0pH_1ncPRE'
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
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@headlessui/vue', '@heroicons/vue']
    }
  },
  build: {
    transpile: ['lodash-es', 'shiki']
  },
  nitro: {
    esbuild: {
      options: {
        target: 'es2022'
      }
    },
    compressPublicAssets: true
  },

  routeRules: {
    '/privacy': { prerender: true },
    '/blog/**': { isr: 3600 },
    '/blog/category/**': { isr: 3600 },
    '/blog/tags/**': { isr: 3600 },
    '/blog/articles/**': { isr: true }
  },

  security: {
    strict: false,
    headers: {
      crossOriginResourcePolicy: 'same-origin',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginEmbedderPolicy: 'credentialless',
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'base-uri': ["'none'"],
        'font-src': ["'self'", 'https:', 'data:'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:', 'https:', 'images.microcms-assets.io'],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'script-src-elem': [
          "'self'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
          'https://platform.twitter.com',
          'https://vercel.live'
        ],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
        'style-src-elem': ["'self'", 'https:', "'unsafe-inline'"],
        'style-src-attr': ["'unsafe-inline'"],
        'connect-src': [
          "'self'",
          'https:',
          'https://vercel.live'
        ],
        'worker-src': ["'self'", 'blob:'],
        'manifest-src': ["'self'"],
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
        geolocation: false
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
  },

  gtag: {
    id: process.env?.GTAG_ID
  },

  site: {
    indexable: true,
    name: `${process.env?.SITE_NAME}`
  },

  robots: {
    disallow: ['/blog/$', '/privacy', '/api/', '/contact']
  },

  sitemap: {
      sources: [
        '/api/__sitemap__/urls',
      ],
  }
})
