export const useConnpassEvents = (connpassData) => {
    type eventsDataType = {
        name: string,
        start: string,
        end: string,
        color: string,
        url: string
    }

    const calendarFormatter = ((data: any, color: string) => {
        let events: Array<eventsDataType> = []

        if (data !== undefined) {
            data.forEach((event: any) => {
                events.push({
                    name: event.title,
                    start: event.started_at.toString().split("T")[0],
                    end: event.ended_at.toString().split("T")[0],
                    color: color,
                    url: event.event_url
                })
            })
        }

        return events;
    })

    return calendarFormatter(connpassData, "orange");
}