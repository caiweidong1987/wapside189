import * as server from "./services";
import {toPara} from "./utils";
import {sleep} from "@hudiemon/utils";
import {message} from './message';

export const feed = async (): Promise<any> => {
    const {resoultCode, resoultMsg} = await server.food({para: toPara({phone: process.env.PHONE})})
    await sleep(1000, 2000)
    if (resoultCode === '1') {
        message.success(`【成长乐园】${resoultMsg}`)
        return
    }
    await feed()
}