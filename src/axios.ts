import externalAxios from 'axios'
import {AxiosResponse} from 'axios'
import iconv from 'iconv-lite'

// axios
export const axios = externalAxios.create({
    baseURL: "https://wapside.189.cn:9001",
    headers:{
        'Accept':'*/*',
        'Content-Type':'application/json',
        Cookie:"pBlLEdekNHvBO=5DIofYda24waI_o9152wqUoScsUhExIxQecx90dBCr2Lu1S_iY1wrQtxX4QXjDua9xzYojtkcRmloRa.fA_1oyG"
    },
    responseType: 'arraybuffer',
    transformResponse: [function(data) {
        console.log(iconv.decode(data, 'gbk'))
        return iconv.decode(data, 'gbk');
    }],
});
axios.interceptors.request.use((config)=>{
    return config
})
axios.interceptors.response.use((response: AxiosResponse) => {
    console.log(response)
    const {resoultCode, resoultMsg, data} = response.data;
    if (resoultCode === "0") return data
    return Promise.reject(resoultMsg)
});
