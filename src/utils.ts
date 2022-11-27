import {reduce} from 'lodash';
import forge from 'node-forge';
import AES from "crypto-js/aes";
import Hex from "crypto-js/enc-hex";
import ECB from "crypto-js/mode-ecb";
import Utf8 from "crypto-js/enc-utf8";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Base64 from 'crypto-js/enc-base64'


export const toEncode = (message: any, key: string) => {
    const cipher = AES.encrypt(
        Utf8.parse(message),
        Utf8.parse(key),
        {
            mode: ECB,
            padding: Pkcs7,
        }
    ).toString()
    return Hex.stringify(Base64.parse(cipher))
}
export const toPara = (data?: Record<string, any>) => {
    const publicKey = forge.pki.publicKeyFromPem(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6
JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65
dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORc
Adcbpk2L+udld5kZNwIDAQAB
-----END PUBLIC KEY-----`);
    const plaintext = JSON.stringify({
        phone: process.env.PHONE,
        ...data
    });
    const len = 32;
    if (plaintext.length < len) {
        return forge.util.bytesToHex(publicKey.encrypt(plaintext));
    }
    const result = [];
    const splitCount = Math.ceil(plaintext.length / len);
    for (let i = 0; i < splitCount; i++) {
        result.push(plaintext.substring(i * len, (i + 1) * len));
    }
    return result.map((str) => forge.util.bytesToHex(publicKey.encrypt(str))).join('');

}
export const getUserAgent = (phone?: string) => {
    const agent = "CtClient;9.3.3;Android;10;MI 9;";
    if (!phone) return agent
    return `${agent}${Base64.parse(phone.substring(5, 11)).toString()}!#!${Base64.parse(phone.substring(0, 5)).toString()}`
}
export const toPhoneNum = () => {
    return reduce(process.env.PHONE, (result, item) => {
        result += String.fromCharCode(item.charCodeAt(0) + 2)
        return result
    }, '')
}
export const toLoginAuthCipherAsymmertric = (data: string) => {
    const publicKey = forge.pki.publicKeyFromPem(`-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofd
    WzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18
    qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMi
    PMpq0/XKBO8lYhN/gwIDAQAB
    -----END PUBLIC KEY-----`);
    return forge.util.encode64(publicKey.encrypt(data))
}
export const toTargetId = (input: string, key: string = "1234567`90koiuyhgtfrdewsaqaqsqde") => {
    // const iv = "\0\0\0\0\0\0\0\0"
    var iv = forge.random.getBytesSync(8);
    var cipher = forge.cipher.createCipher('AES-ECB', key,);
    cipher.start({iv: iv});
    cipher.update(forge.util.createBuffer(Buffer.from(input)));
    cipher.finish();
    var encrypted = cipher.output;
    console.log(encrypted.toHex());
    return encrypted.toHex();
}