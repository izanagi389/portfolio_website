import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(async () => {

  let article_id: string[] = []

  const limit = 100
  const fields = "id"
  let offset = 0;

  let data: {contents: {id: string}[], totalCount?: number} = await getArticleIds(limit, fields, offset)
  article_id = data.contents.map(article => `/blog/articles/${article.id}`)
  const totalCount = data.totalCount


  if(totalCount !== undefined) {
    offset += limit
    while (totalCount > offset) {
      data = await getArticleIds(limit, fields, offset)
      article_id.concat(data.contents.map(article => `/blog/articles/${article.id}`));
      offset += limit
    }
  }
  

  return article_id satisfies SitemapUrlInput[]
})


const getArticleIds = async (limit: Number, fields: string, offset: Number): Promise<{ contents: { id: string; }[]; }> => {
  return await $fetch('https://izanagiblog.microcms.io/api/v1/blog', {
    headers: {
      "X-MICROCMS-API-KEY": process.env?.X_MICROCMS_API_KEY
    },
    params: {
      "limit": limit,
      "fields": fields,
      "offset": offset
    }
  })
}