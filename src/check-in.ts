import {toEncode, toPara} from './utils';
import * as service from "./services";
import {message} from './message';

export const checkIn = async () => {
    const {data} = await service.sign({
        encode: toEncode({
            date: +new Date,
            signSource: "smlprgrm",
            phone: process.env.PHONE
        })
    })
    if (data.code === 0) {
        message.error(`【签到】${data.msg}`)
        return
    }
    message.info(`🎉【签到】+${data.coin}金豆`)
    message.info(`🎉【连续签到】${data.continuousDay}天`)
    message.info(`🎉【本周签到】${data.continuousDay}天`)
    if (data.continuousDay == 7) {
        message.warning(`未完成，第七天的时候再来开发`)
        // const {date} = await service.activityMsg({para: toPara({phone: process.env.PHONE})})
        // console.log(date.id)
    }
}