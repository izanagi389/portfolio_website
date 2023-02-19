import { mkdirSync, writeFileSync, readFileSync, copyFile } from 'fs'
import { Readable } from 'stream'
import { dirname } from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'
import { defineNuxtModule, createResolver } from '@nuxt/kit'

// https://github.com/benoitdemaegdt/nuxt3-sitemap
export default defineNuxtModule({
    meta: {
        name: 'sitemap',
        version: '0.0.1',
        configKey: 'sitemap',
        compatibility: { nuxt: '^3.0.0' },
    },
    defaults: {
        hostname: 'http://localhost:3000',
    },
    async setup(options, nuxt) {
        async function generateSitemap(routes) {
            const sitemapRoutes = routes.map((route) => route.path)

            // https://github.com/ekalinin/sitemap.js#generate-a-one-time-sitemap-from-a-list-of-urls
            const stream = new SitemapStream({ hostname: options.hostname })
            return streamToPromise(Readable.from(sitemapRoutes).pipe(stream)).then(
                (data) => data.toString()
            )
        }

        function createSitemapFile(sitemap, filepath) {
            const dirPath = dirname(filepath)
            mkdirSync(dirPath, { recursive: true })
            writeFileSync(filepath, sitemap)
        }

        const resolver = createResolver(import.meta.url)
        const filePath = resolver.resolve(
            nuxt.options.srcDir,
            'node_modules/.cache/.sitemap/sitemap.xml'
        )

        nuxt.options.nitro.publicAssets = nuxt.options.nitro.publicAssets || []
        nuxt.options.nitro.publicAssets.push({
            baseURL: '/',
            dir: dirname(filePath),
        })

        nuxt.hook('nitro:build:before', (nitro) => {
            const paths = []

            const EXCLUDED_KEYWORDS = ['_payload.js', '200.html', '404.html', "privacy-policy", "privacy-policy/", "contact/", "contact", "search", "search/"]
            nitro.hooks.hook('prerender:route', (route) => {
                const shouldBeAddedToSitemap = EXCLUDED_KEYWORDS.every(
                    (excludedKeyword) => !route.route.includes(excludedKeyword)
                )
                if (shouldBeAddedToSitemap) {
                    paths.push({ path: route.route })
                }
            })
            nitro.hooks.hook('close', async () => {
                const sitemap = await generateSitemap(paths)
                createSitemapFile(sitemap, filePath)

                const outptFilepath = resolver.resolve(
                    nuxt.options.srcDir,
                    '.output/public/sitemap.xml'
                )

                copyFile(filePath, outptFilepath, (err) => {
                    if (err) {
                        console.log('sitemap.xml No created')
                        console.log(err)
                    } else {
                        console.log('sitemap.xml created')
                    }
                });
            })
        })
    },
})
