>**非对称加密算法：一般公钥加密，私钥解密。其实还有其他用法，详情参考[RSA算法](https://baike.baidu.com/item/RSA%E7%AE%97%E6%B3%95/263310)**  
>**对称加密算法：加密解密使用相同的密钥。**

## jsencrypt 加密
```javascript
import JSEncrypt from 'jsencrypt';

const encrypt = new JSEncrypt();
//加密前设置公钥
encrypt.setPublicKey(publicKty);
//加密
const encrypted = encrypt.encrypt(plaintext);
```
## jsencrypt 解密
```javascript
import JSEncrypt from 'jsencrypt';

const encrypt = new JSEncrypt();
//解密前设置私钥
encrypt.setPrivateKey(privateKey);
const decrypted = encrypt.decrypt(encrypted);
```
## node-forge 加密
```javascript
import forge from 'node-forge';

const publicObj = forge.pki.publicKeyFromPem(publicKey);
const plaintextBytes = forge.util.encodeUtf8(plaintext);
const encryptedBytes = publicObj.encrypt(plaintextBytes);
const encrypted = forge.util.encode64(encryptedBytes);
```
## node-forge 解密
```javascript
import forge from 'node-forge';

const privateObj = forge.pki.privateKeyFromPem(privateKey);
const decrypted = privateObj.decrypt(forge.util.decode64(encrypted));
```
## 明文
```javascript
const plaintext = 'Hello World';
```
## Public Key 公钥
```javascript
const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCKYbNglYAgZvW2DuVpyvqIjmK4
yOr2kYDqPQpvTxf3yY3ymtpEV1MG0tZ2bSgd9ThiRZXN/V1LqIxS0vu2AHSc32jX
AZ89xe/H8YPt1UzDacC5tvKhyxo5skKBGMOdIWX4tYJ4tOVaTyPF6rOfpeWe7tY3
G6qqlFv4QhmIBoOPLwIDAQAB
-----END PUBLIC KEY-----`;
```
## Private Key 私钥
```javascript
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCKYbNglYAgZvW2DuVpyvqIjmK4yOr2kYDqPQpvTxf3yY3ymtpE
V1MG0tZ2bSgd9ThiRZXN/V1LqIxS0vu2AHSc32jXAZ89xe/H8YPt1UzDacC5tvKh
yxo5skKBGMOdIWX4tYJ4tOVaTyPF6rOfpeWe7tY3G6qqlFv4QhmIBoOPLwIDAQAB
AoGANliMY+ASw6br1KYg/t1SaxLQPpXZgSA/qr5yPKipVwz3DFI4aiKJXuKqizPv
T2Sg0idV3+IjI7V79oMZi66+HM0q3UZrMVu0WI+ydQYHbQDtHZ2mgXC4WuHVI4tn
shqEhzxrW3sH8n6KVYGeTXnlWboxgvOtWH92GtNFIY2kPBECQQDyJEgdCGzGqbCF
BUcOCelkk8grOKbgOGenHBC60vBGYi6jE8HnKnWjwV55x2qKc9seU9SvbAiJ87Dz
gq4wGq3VAkEAkk0v7pctOyJSWIMj2/cMyHYu7WD9LE+7YkKnL54QwT9UsfyH1Tw9
oARzN9UUx4ximmN/30gUjiawckwV8h9W8wJBANqDj2hT4AXvwFJqjtLGcw7Gpk8K
0t1pSXDuzNIr5ZU+qSOVgtif4oWizSVMpoLHRqg5sqeT8Ki9d6Ro+9SBXvkCQHzU
GyeqGc+w0y3uhvQx8NhB7nxgGuRqC2olkNzSM12PmcZbv9IzGimkYmKrDpXMtH0i
lIKAz/kSDc8YGEmEb/0CQHX8x/sKiQDjBro+Z5tSjxTU3Y5LSDVqApQ2yb6adATx
i3x8bDI3EL2YNCkHdKGfko8gHAKLy1AUtZb601a9F4U=
-----END RSA PRIVATE KEY-----`
```
## 环境支持
|     库      | browser | Node.js | 维护情况 |
|:----------:|:-------:|:-------:|:----:|
| jsencrypt  |    ✅    |    ❌    |  ✅   |
| node-forge |    ✅    |    ✅    |  ✅   |
|  node-rsa  |    ✅    |    ✅    |  ❌   |  

**注意：node-rsa不建议使用**