import Base64 from 'crypto-js/enc-base64'
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import ECB from "crypto-js/mode-ecb";
import Pkcs7 from "crypto-js/pad-pkcs7";
import Hex from "crypto-js/enc-hex";

export const getEncode = (data: Record<string, any>) => {
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

export const getUserAgent = (phone: string) => `CtClient;9.3.3;Android;10;MI 9;${Base64.parse(phone.substring(5, 11)).toString()}!#!${Base64.parse(phone.substring(0, 5)).toString()}`