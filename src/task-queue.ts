import {axios} from './axios';
import {toPara} from './utils';


export const taskQueue = async () => {
    await axios.post('/jt-sign/paradise/getTask', {
        para: toPara({phone: process.env.PHONE})
    }).then((data)=>{
        console.log(data)
    })
}