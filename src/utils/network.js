import {HTTP, HTTPS} from '@constants/api';

/**
 * change url http to htpps
 * @param {String} url  - url for change
 * @returns {String} url  - url with https
 */
export function changeHttp (url){
    const result = url ? url.replace(HTTP, HTTPS) : url;
    return result
} 

/**
 * send Fetch request
 * @param {String} url - url for request 
 * @returns {Promise} - result Promise
 */
export const getApiResource = async (url)=>{
    try{
        const res = await fetch(url);
        if (!res.ok){
            console.error('Could not catch', res.status)
            return false;
        }
        return await res.json();
    } catch(error){
        console.error('Could not catch', error.massage);
        return false
    }
}

// (async ()=>{
//         const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//         console.log(body);
// })();

// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body=>console.log(body));

export const makeConcurrentRequest = async (url) =>{
    const result = await Promise.all(url.map( res =>{
        return fetch (res).then(res=>res.json())
    }));
    return result;
}


