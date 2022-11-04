
export const useYomotsuhirasaka = async (searchApiUrl: string, word: string) => {

    const searchContents = await $fetch(searchApiUrl, {
        method: "get",
        mode: "cors",
        params: {
            word: word,
        },
        headers: {
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        console.log(error.data)
    })

    return searchContents;

}