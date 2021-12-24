import axios from 'axios';

const KEY = 'AIzaSyDJyf0EneyqjblR5NRq-H0LRMJ-wDJaoOo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults : 5,
        key : KEY
    }
});