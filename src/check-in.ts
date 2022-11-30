import {toEncode, toPara} from './utils';
import dayjs from 'dayjs'
import {message} from './message'
import * as service from './services'

export const checkIn = async () => {
    const {data} = await service.sign({
        encode: toEncode(JSON.stringify({
            date: +new Date,
            signSource: "smlprgrm",
            phone: process.env.PHONE
        }),'34d7cb0bcdf07523')
    })

    if (data.code === 0) {
        message.info(`🎉【签到】${data.msg}`)
        return
    }
    message.info(`🎉【签到】+${data.coin}金豆`)
    message.info(`🔄【连续签到】${data.continuousDay}天`)
    message.info(`📦【本周签到】${data.continuousDay}天`)
    const {date, recordNum} = await service.activityMsg({para: toPara({phone: process.env.PHONE})})
    if (!recordNum) return
    const {code,msg} = await service.convertReward({para: toPara({rewardId: date.id, month: dayjs().format('YYYYMM')})})
    if(code==="1"){
        message.warning(`【兑换话费】${msg}`)
        return
    }
    message.success(`【兑换话费】${msg}`)
}