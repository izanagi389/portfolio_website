
export const useSuggest = async (suggestApiUrl: string, word: string) => {

    let suggestList = []

    if (!!word) {
        await $fetch(suggestApiUrl, {
            params: {
                word: word,
                limit: 5
            },
        }).then((response) => {
            suggestList = [];
            for (const element of response[Symbol.iterator]()) {
                if (!!element) { suggestList.push(element["Word"]) }
            }
        }).catch((error) => {
            console.log(error.data)
        });
    } else {
        suggestList = [];
    }
    return suggestList;
}
