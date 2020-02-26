import {getTimeStamp, getHashcode, getAPIKey} from "./helper";

// export function generateUrl() {
//
//     const url = process.env.REACT_APP_API_URL;
//
// }

export const generateHeaders = () => {

    const randomString = 'this is random'
    const timeStamp = getTimeStamp()
    const url = process.env.REACT_APP_API_URL;
    const timeStampplus = timeStamp + "\n";
    const randomStringplus = 'this is random' + "\n";
    const method = 'POST' + "\n";
    const uri = '/v2/sms/' + "\n";
    const host =url + "\n";
    const port = '443' + "\n";
    const end = "\n";

    const stringForHash = timeStampplus + randomStringplus + method + uri + host + port + end;
    const hash = getHashcode(stringForHash);

    const apiKey = getAPIKey();
    const auth = `id="${apiKey}" ts="${timeStamp}" nonce="${randomString}" mac="${hash}"`;

    return auth;
    
    //console.log(timeStamp, url)

}