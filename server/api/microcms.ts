export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { limit = 10, offset = 0, filters = "", fields = "", post_id } = query;

  const baseUrl = 'https://izanagiblog.microcms.io/api/v1/blog';
  const apiKey = process.env?.X_MICROCMS_API_KEY;
  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'API key not configured'
    });
  }

  const headers = {
    "X-MICROCMS-API-KEY": apiKey
  };

  const url = post_id ? `${baseUrl}/${post_id}` : baseUrl;
  const params = post_id ? undefined : { limit, offset, filters, fields };

  const data = await $fetch(url, { headers, params });
  return data;
});