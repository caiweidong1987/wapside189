import qs from 'qs'
import dayjs from "dayjs";
import {v4 as uuidv4} from 'uuid';
import {message} from './message';
import {clientXML, userLoginNormald} from './services';
import {toEncode, toLoginAuthCipherAsymmertric, toPhoneNum, toTargetId} from "./utils";

export const login = async () => {
    const phone = process.env.PHONE
    const password = process.env.PASSWORD
    const timestamp = dayjs().format('YYYYMMDDHHmmss')
    const uuid = uuidv4().replaceAll("-", "")
    // const {responseData} = await userLoginNormald({
    //     "headerInfos": {
    //         timestamp,
    //         "code": "userLoginNormal",
    //         "broadAccount": "",
    //         "broadToken": "",
    //         "clientType": "#9.6.1#channel50#iPhone 14 Pro Max#",
    //         "shopId": "20002",
    //         "source": "110003",
    //         "sourcePassword": "Sid98s",
    //         "token": "",
    //         "userLoginName": phone
    //     },
    //     "content": {
    //         "attach": "test",
    //         "fieldData": {
    //             "loginType": "4",
    //             "accountType": "",
    //             "isChinatelecom": "0",
    //             "systemVersion": "15.4.0",
    //             "phoneNum": toPhoneNum(),
    //             "deviceUid": uuid.slice(0, 16),
    //             "authentication": password,
    //             "loginAuthCipherAsymmertric": toLoginAuthCipherAsymmertric(`iPhone 14 15.4.${uuid.slice(0, 12)}${phone}${timestamp}${password}0$$$0.`)
    //         }
    //     }
    // })
    // if (responseData.resultCode !== '0000') {
    //     message.error(responseData.resultDesc)
    //     return Promise.reject(responseData.resultDesc)
    // }
    // const {loginSuccessResult} = responseData.data
    const loginSuccessResult = {
        token: 'V1.0Cd++PPr+d8o3ANel575RLaJRwzWKfWgbMNp4sJ3CZtAFJlkTO+vusaDifhT/JRW+YqbAI8Na+d30Ub/Aq7tyqeI+xnqCnDQ5MwfvZIbNX69O0qW5oeyio5zo7KjqTu+y',
        userId: '20160000000019878329',
    }
    // return toTargetId(loginSuccessResult.userId)
    const data = await clientXML({body:`<Request>
        <HeaderInfos>
            <Code>getSingle</Code>
            <Timestamp>${timestamp}</Timestamp>
            <BroadAccount></BroadAccount>
            <BroadToken></BroadToken>
            <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>
            <ShopId>20002</ShopId>
            <Source>110003</Source>
            <SourcePassword>Sid98s</SourcePassword>
            <Token>${loginSuccessResult.token}</Token>
            <UserLoginName>${phone}</UserLoginName>
        </HeaderInfos>
        <Content>
            <Attach>test</Attach>
            <FieldData>
                <TargetId>${toEncode(loginSuccessResult.userId,"1234567`90koiuyhgtfrdewsaqaqsqde","\0\0\0\0\0\0\0\0")}</TargetId>
                <Url>4a6862274835b451</Url>
            </FieldData>
        </Content>
    </Request>`})
    console.log(data)
}