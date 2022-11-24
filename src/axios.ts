import externalAxios from 'axios'
import {AxiosResponse} from 'axios'

// axios
export const axios = externalAxios.create({
    baseURL: "https://wapside.189.cn:9001",
});

axios.interceptors.response.use((response: AxiosResponse) => {
    console.log('response.data', response.data)
    const {resoultCode, resoultMsg, data} = response.data;
    if (resoultCode === "0") return data
    return Promise.reject(resoultMsg)
});
