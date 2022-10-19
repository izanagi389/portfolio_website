const config = useRuntimeConfig();
let url: string = `https://${config.MICRO_CMS_SERVICE_DOMAIN}.microcms.io/api/v1/blog`

export default defineEventHandler(async (event) => {

  const q = getQuery(event);

  const post_id: string = !!q.id ? "/" + q.id : "";
  const post_offset = !!q.offset ? q.offset : "";
  const post_limit = !!q.limit ? q.limit : "10";
  const post_order = !!q.order ? q.order : "";
  const post_fields = !!q.fields ? q.fields : "";
  const filter = q.filter ? `${q.filterKeyName}[contains]${q.filter}` : "";
  const query = !!q.query ? q.query : "";

  const parameters: string = `${post_id}?fields=${post_fields}&filters=${filter}&limit=${post_limit}&offset=${post_offset}&orders=${post_order}&q=${query}`;
  const ENDPOINT: string = url + encodeURI(parameters);

  let data: unknown;

  await $fetch(`${ENDPOINT}`, {
    method: "GET",
    headers: {
      "X-MICROCMS-API-KEY": config.MICRO_CMS_API_KEY,
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip',
      'Accept-Charset': 'utf-8',
      'Content-Encoding': 'gzip',
    }
  }
  ).then((response) => {
    data = response
  })

  const json = data

  return json;
})