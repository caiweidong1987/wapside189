import {toEncode} from './utils';
import * as service from "./services";
import {message} from './message';

export const checkIn = async () => {
    const {code, msg} = await service.sign({
        encode: toEncode({
            date: +new Date,
            signSource: "smlprgrm",
            phone: process.env.PHONE
        })
    })
    if (code === 0) {
        message.error(`【签到】${msg}`)
        return
    }
    message.info(`🎉【签到】操作成功`)
}