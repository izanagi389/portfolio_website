// export type Article = {
//     id: string,
//     title: string,
//     article: string,
// }
export default defineEventHandler(async (event) => {

  const query = getQuery(event)

  const limit = query.limit != undefined ? query.limit : 10;
  const offset = query.offset != undefined ? query.offset : 0;
  const filters = query.filters != undefined ? query.filters : "";

  const post_id = query.post_id;

  let data;

  if (post_id != undefined) {
    data = await $fetch(`https://izanagiblog.microcms.io/api/v1/blog/${post_id}`, {
      headers: {
        "X-MICROCMS-API-KEY": process.env?.X_MICROCMS_API_KEY
      }
    })
  } else {
    data = await $fetch('https://izanagiblog.microcms.io/api/v1/blog', {
      headers: {
        "X-MICROCMS-API-KEY": process.env?.X_MICROCMS_API_KEY
      },
      params: {
        "limit": limit,
        "offset": offset,
        "filters": filters
      }
    })
  }


  return data

})