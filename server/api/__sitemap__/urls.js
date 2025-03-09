import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {

    let article_id = []
    
    let data = await $fetch('https://izanagiblog.microcms.io/api/v1/blog', {
      headers: {
        "X-MICROCMS-API-KEY": process.env?.X_MICROCMS_API_KEY
      },
      params: {
        "limit": "100",
        "fields": "id",
      }
    })

    article_id = data.contents.map(m => `/blog/articles/${m.id}`)
    return article_id
})
