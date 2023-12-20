import CryptoJS from 'crypto-js';

export function encryptText(str) {
    const encryptedText = CryptoJS.AES.encrypt(str.trim(), process.env.REACT_APP_AES_SECRET_KEY).toString();
    return encryptedText || null;
}