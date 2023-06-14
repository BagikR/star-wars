import {
    HTTPS, HTTP, SWAPI_ROOT, SWAPI_PEOPLE, GUIDE_IMG_EXTENSION, URL_IMG_PERSON, SWAPI_PARAM_PAGE
} from "@constants/api"

export const getPeoplePageID = (url) =>{
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length);
    return Number(id);    
}

const getID = (url, category) => {
    const id = url
        .replace((HTTPS || HTTP) + SWAPI_ROOT + category, '')
        .replace(/\//g, '');
    return id;
}

export const getPeopleId = url => getID(url, SWAPI_PEOPLE);

export const getPeopleImg = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
