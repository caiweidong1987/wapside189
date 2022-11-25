import {axios} from './axios';

/**
 * 签到
 * @param {object} data
 * @param {string} data.encode 时间戳与手机号加密后的字符
 * @returns {Promise<number>} code 0:成功
 * @returns {Promise<string>} msg
 */
export const sign = (data: { encode: string }): Promise<{ code: number, msg: string }> => axios.post('/jt-sign/api/home/sign', data)