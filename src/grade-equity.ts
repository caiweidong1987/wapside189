import * as service from './services'
import {toPara} from "./utils";
import {message} from './message';

export const gradeEquity = async () => {
    const {userInfo} = await service.getParadiseInfo({para: toPara({phone: process.env.PHONE})})
    if (userInfo.paradiseDressup.level < 5) {
        message.warning(`【等级权益】当前${userInfo.paradiseDressup.level}级。小于5级，不领取等级权益`)
        return
    }
//     url = "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList"
//     right_list = self.req(url, "POST", body)[f"V{self.level}"]
//     for data in right_list:
// # print(dumps(data, indent=2, ensure_ascii=0))
//     if "00金豆" in data["righstName"] or "话费" in data["righstName"]:
//     rightsId = data["id"]
//     self.level_ex(rightsId)
//     continue
//     def level_ex(self, rightsId):
// # self.get_level()
//     url = "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights"
//     data = {
//         "para": self.telecom_encrypt(f'{{"phone":{self.phone},"rightsId":"{rightsId}"}},"receiveCount":1')
// }
//     print_now(self.req(url, "POST", data))
}