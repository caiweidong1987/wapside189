import Base64 from 'crypto-js/enc-base64'
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import ECB from "crypto-js/mode-ecb";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Hex from "crypto-js/enc-hex";
import NodeRSA from 'node-rsa';

const rsakey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6
JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65
dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORc
Adcbpk2L+udld5kZNwIDAQAB
-----END PUBLIC KEY-----`

const pubbkey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB";
export const toEncode = (data: Record<string, any>) => {
    const encrypted = AES.encrypt(
        Utf8.parse(JSON.stringify(data)),
        Utf8.parse('34d7cb0bcdf07523'),
        {
            mode: ECB,
            padding: Pkcs7
        }
    )
    return Hex.stringify(Base64.parse(encrypted.toString()))
}
export const toPara = (data: Record<string, any>) => {
    const key = new NodeRSA(rsakey);
    const text = JSON.stringify(data)
    const encrypted = key.encrypt(Buffer.from(text), 'hex');
    console.log(encrypted)
    return encrypted
}
export const getUserAgent = (phone: string) => `CtClient;9.3.3;Android;10;MI 9;${Base64.parse(phone.substring(5, 11)).toString()}!#!${Base64.parse(phone.substring(0, 5)).toString()}`