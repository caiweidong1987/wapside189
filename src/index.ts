import {checkIn} from './check-in';
import {getUserAgent} from "./utils";
import {axios} from './axios'
import {message} from './message';
import {taskQueue} from "./task-queue";

const main = async () => {
    global.window = global
    if (!process.env.PHONE) {
        message.error('未设置 PHONE')
        return
    }
    axios.defaults.headers.common['User-Agent'] = getUserAgent(process.env.PHONE)
    message.info(`👤【用户】${process.env.PHONE}`);
    //签到
    // await checkIn()
    await taskQueue()

}

main().finally(message.finally)