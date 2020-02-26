
export const getHashcode = (text) => {
console.log(getSecret());
    const hash = window.CryptoJS.HmacSHA256(text, getSecret());
    console.log('hash', window.CryptoJS.enc.Base64.stringify(hash) )
    return window.CryptoJS.enc.Base64.stringify(hash);
}

export const convertToBase64 = () => {

}

export const getSecret = () => {

    const smsApi =JSON.parse(localStorage.getItem('smsAPI'));
    return smsApi.secretKey;
}

export const getAPIKey = () => {

    const smsApi =JSON.parse(localStorage.getItem('smsAPI'));
    return smsApi.apiKey;
}

export const getTimeStamp = () => {
    return Math.round((new Date()).getTime() / 1000);
}

