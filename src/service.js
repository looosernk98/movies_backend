const axios = require('axios')

const BASE_URL = 'https://api.themoviedb.org/3';

const getApi = async (url, queryParams) => {
    try {
        const apiURL = BASE_URL + url;
        const response = await axios.get(apiURL, {
            params:{
                ...queryParams
            },
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTgxZDE1ZmViNmRlZmU4NmZkYWFmOGEyM2VlMDQwNSIsInN1YiI6IjYxNmE5MjY4NTM4NjZlMDA5M2NhZTBmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBqIwkJS549JTTvQ4L2d2Bh6eMtwALTE63p7V0rcmGo',
            }
        });
        return response?.data;
    } catch (error) {
        console.error(error);
        throw new Error(error)
    }
}
const postApi = async (url, payload) => {
    try {
        const apiURL = BASE_URL + url;
        const response = await axios.post(apiURL, { ...payload},{
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTgxZDE1ZmViNmRlZmU4NmZkYWFmOGEyM2VlMDQwNSIsInN1YiI6IjYxNmE5MjY4NTM4NjZlMDA5M2NhZTBmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBqIwkJS549JTTvQ4L2d2Bh6eMtwALTE63p7V0rcmGo',
            },
        });
        return response;
    } catch (error) {
        console.error(error);
        throw new Error(error)
        
    }
}

module.exports={
    getApi,
    postApi
}