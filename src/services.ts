import {axios} from './axios';

export const sign = (data: { encode: string }) => axios.post('/jt-sign/api/home/sign', {data})