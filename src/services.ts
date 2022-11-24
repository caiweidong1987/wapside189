import {axios} from './axios';
import {getEncode} from "./utils";

export const sign = (data: { encode: string }) => axios.post('/jt-sign/api/home/sign', {data})