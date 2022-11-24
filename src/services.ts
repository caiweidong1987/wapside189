import {axios} from './axios';

export const sign = (data: { encode: string }): Promise<any> => axios.post('/jt-sign/api/home/sign', data)