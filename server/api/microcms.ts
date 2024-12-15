// export type Article = {
//     id: string,
//     title: string,
//     article: string,
// }
export default defineEventHandler(async (event) => {

    const query = getQuery(event)

    const limit = query.limit != undefined ? query.limit : 10;
    const offset = query.offset != undefined ? query.offset : 0;

    const data = await $fetch('https://izanagiblog.microcms.io/api/v1/blog', {
        headers: {
          "X-MICROCMS-API-KEY": process.env?.X_MICROCMS_API_KEY
        },
        params: {
            "limit": limit,
            "offset": offset
        }
      })
    return data

})