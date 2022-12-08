import { RadioBrowserApi, StationSearchType } from "radio-browser-api"
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
        let response = await api.getStationsBy(StationSearchType.byTag, 'jazz');
        return Promise.resolve(response);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Finally');
    }
}
export const busqueda1 = async () => {
    try {

    } catch (error) {

    } finally {

    }
}

