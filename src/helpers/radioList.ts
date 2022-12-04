//import { RadioBrowser } from 'radio-browser';
const RadioBrowser = require('radio-browser');

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
        await RadioBrowser.getStations(filter)
    } catch (error) {
        console.log(error);
    }
}

