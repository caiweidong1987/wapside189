import {request} from './request';

/**
 * 签到
 */
export const sign = (data: { encode: string }): Promise<any> => request.post('/jt-sign/api/home/sign', data)
export const getTask = (data: { para: string }): Promise<any> => request.post('/jt-sign/paradise/getTask', data)
export const polymerize = (data: { para: string }): Promise<any> => request.post('/jt-sign/paradise/polymerize', data)
export const food = (data: { para: string }): Promise<any> => request.post('/jt-sign/paradise/food', data)
export const getParadiseInfo = (data: { para: string }): Promise<any> => request.post('/jt-sign/paradise/getParadiseInfo', data)
export const getLevelRightsList = (data: { para: string }): Promise<any> => request.post('/jt-sign/paradise/getLevelRightsList', data)
export const activityMsg = (data: { para: string }): Promise<any> => request.post('/jt-sign/reward/activityMsg', data)
export const convertReward = (data: { para: string }): Promise<any> => request.post('/jt-sign/reward/convertReward', data)
export const userLoginNormald = (data: any): Promise<any> => request.post('https://appgologin.189.cn:9031/login/client/userLoginNormal', data)
export const clientXML = (data: any): Promise<any> => request.post('https://appgologin.189.cn:9031/map/clientXML', data)