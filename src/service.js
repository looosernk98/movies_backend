const axios = require('axios')

const getApi = async (url, params) => {
    try {
        const response = await axios.get(url, {
            params,
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTgxZDE1ZmViNmRlZmU4NmZkYWFmOGEyM2VlMDQwNSIsInN1YiI6IjYxNmE5MjY4NTM4NjZlMDA5M2NhZTBmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBqIwkJS549JTTvQ4L2d2Bh6eMtwALTE63p7V0rcmGo',
            }
        });
        return response?.data;
    } catch (error) {
        console.error(error);
    }
}
const postApi = async (url, params, payload) => {
    try {
        const response = await axios.get(url, payload,{
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTgxZDE1ZmViNmRlZmU4NmZkYWFmOGEyM2VlMDQwNSIsInN1YiI6IjYxNmE5MjY4NTM4NjZlMDA5M2NhZTBmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBqIwkJS549JTTvQ4L2d2Bh6eMtwALTE63p7V0rcmGo',
            },
            params,
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

module.exports={
    getApi,
    postApi
}