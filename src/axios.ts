import externalAxios from 'axios'
import {AxiosResponse} from 'axios'
import iconv from 'iconv-lite'

// axios
export const axios = externalAxios.create({
    baseURL: "https://wapside.189.cn:9001",
    responseEncoding: 'utf-8',
    transformResponse: [function (data) {
        console.log(data)
        return data;
    }],
});

axios.interceptors.response.use((response: AxiosResponse) => {
    const {resoultCode, resoultMsg, data} = response.data;
    if (resoultCode === "0") return data
    return Promise.reject(resoultMsg)
});
