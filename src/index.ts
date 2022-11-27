import {feed} from "./feed"
import {to} from 'await-to-js'
import {checkIn} from './check-in'
import {taskQueue} from "./task-queue"
// import {gradeEquity} from "./grade-equity"
// import {login} from "./login";
import {message} from "./message";

const main = async () => {
    if (!process.env.PHONE) {
        message.error('未设置 PHONE')
        return
    }
    message.info(`👤【用户】${process.env.PHONE}`);
    //签到
    await to(checkIn())
    await to(taskQueue())
    // await gradeEquity()
    await to(feed())
    // login()
}

main().finally(message.finally)