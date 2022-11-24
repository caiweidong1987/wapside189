import {axios} from './axios';

export const taskQueue = async () => {
    axios.post('/jt-sign/paradise/getTask', {
        para:''
    })
}