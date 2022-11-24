import {checkIn} from './check-in';
import {getEncode, getUserAgent} from "./utils";
import {axios} from './axios'
import {message} from './message';



const phone = '17778018790'
const main = async () => {
    axios.defaults.headers.common['User-Agent'] = getUserAgent(phone)
    await checkIn()

}

main().finally(message.finally)