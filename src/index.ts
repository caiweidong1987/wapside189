import {checkIn} from './check-in';
import {getUserAgent} from "./utils";
import {axios} from './axios'
import {message} from './message';

const main = async () => {
    if (!process.env.PHONE) {
        message.error('未设置 PHONE')
        return
    }
    axios.defaults.headers.common['User-Agent'] = getUserAgent(process.env.PHONE)
    message.info(`👤【用户】${process.env.PHONE}`);
    //签到
    await checkIn()

}

main().finally(message.finally)