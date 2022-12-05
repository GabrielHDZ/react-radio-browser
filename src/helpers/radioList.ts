import { RadioBrowserApi } from "radio-browser-api"
const api = new RadioBrowserApi('my radio');

type useFilter = {
    limit: number,
    by: string,
    searchTerm: string,

}

let filter: useFilter = {
    limit: 5,
    by: 'tag',
    searchTerm: 'jazz'
}


export const start = async () => {
    try {
        await api.searchStations({
            language: 'english',
            tag: 'jazz',
            limit: 100
        })
    } catch (error) {
        console.log(error);
    }
}

