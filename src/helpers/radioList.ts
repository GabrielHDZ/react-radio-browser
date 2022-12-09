import { RadioBrowserApi, StationSearchType } from "radio-browser-api";

const api = new RadioBrowserApi("my radio");


export const radio = async () => {
    return await api.searchStations({
        countryCode: 'US',
        tag: 'jazz',
        limit: 100
    })
}


