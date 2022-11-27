import {toPara} from "./utils";
import {food} from './services';
import {message} from './message';
import {sleep} from "@hudiemon/utils";

export const feed = async (): Promise<any> => {
    const {resoultCode, resoultMsg} = await food({para: toPara({phone: process.env.PHONE})})
    await sleep(1000, 2000)
    if (resoultCode === '1') {
        message.success(`【成长乐园】${resoultMsg}`)
        return
    }
    await feed()
}