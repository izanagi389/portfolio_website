// export type Article = {
//     id: string,
//     title: string,
//     article: string,
// }

export const useFetchArticles = async (limit:Number) => {

    const l = limit == undefined ? limit : 10;


    const data = await useFetch("/blog", {
        baseURL: "https://izanagiblog.microcms.io/api/v1",
        headers: {
          "X-MICROCMS-API-KEY": process.env?.X_MICROCMS_API_KEY
        },
        params: {
            "limit": limit
        }
      })
     return data.data.value.contents

}