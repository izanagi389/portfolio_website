
export const useAmenomuboko = async (related_title_url, topic_url) => {

    const [related_data, topic_list] = await Promise.all([
        $fetch(related_title_url, {
            method: "GET",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            }
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error.data)
        }),
        $fetch(topic_url, {
            method: "GET",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            }
        }).then((response) => {
            return response["corpus"].split(",");
        }).catch((error) => {
            console.log(error.data)
        })
    ])

    return [related_data, topic_list];

}