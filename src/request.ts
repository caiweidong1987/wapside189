import axios from 'axios'
import type {AxiosResponse} from 'axios'
import {getUserAgent} from "./utils";


// axios
export const request = axios.create({
    baseURL: "https://wapside.189.cn:9001",
    headers: {
        "User-Agent": getUserAgent(process.env.PHONE)
    }
})
request.interceptors.response.use((response: AxiosResponse) => {
    return response.data
})
