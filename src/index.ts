import {axios} from './axios'
import {feed} from "./feed";
import {message} from './message';
import {checkIn} from './check-in';
import {getUserAgent} from "./utils";
import {taskQueue} from "./task-queue";
import {gradeEquity} from "./grade-equity";

const main = async () => {
    if (!process.env.PHONE) {
        message.error('未设置 PHONE')
        return
    }
    axios.defaults.headers.common['User-Agent'] = getUserAgent(process.env.PHONE)
    message.info(`👤【用户】${process.env.PHONE}`);
    //签到
    await checkIn()
    await taskQueue()
    await feed()
    await gradeEquity()
}

main().finally(message.finally)