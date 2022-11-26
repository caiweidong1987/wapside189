import Base64 from 'crypto-js/enc-base64'
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import ECB from "crypto-js/mode-ecb";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Hex from "crypto-js/enc-hex";
import forge from 'node-forge';

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
    const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6
JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65
dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORc
Adcbpk2L+udld5kZNwIDAQAB
-----END PUBLIC KEY-----`
    const publicObj = forge.pki.publicKeyFromPem(publicKey);
    const plaintext = JSON.stringify(data);
    const len = 32;
    if (plaintext.length < len) {
        return forge.util.bytesToHex(publicObj.encrypt(plaintext));
    }
    const result = [];
    const splitCount = Math.ceil(plaintext.length / len);
    for (let i = 0; i < splitCount; i++) {
        result.push(plaintext.substring(i * len, (i + 1) * len));
    }
    return result.map((str) => forge.util.bytesToHex(publicObj.encrypt(str))).join('');

}
export const getUserAgent = (phone: string) => `CtClient;9.3.3;Android;10;MI 9;${Base64.parse(phone.substring(5, 11)).toString()}!#!${Base64.parse(phone.substring(0, 5)).toString()}`