import axios from 'axios';
import { AccessTokenId, BASE_URL } from './constants';


export function generateUrl(path) {

    return BASE_URL + path;
}

export function apiReq(endPoint, data, method, headers) {
    return new Promise((resolve, reject) => {

        headers = {
            ...headers
        }
        const accessToken = getData(AccessTokenId);

        if (accessToken) {
            headers = {
                ...headers,
                // Authorization: `Bearer ${accessToken}`
            }
        }

        if (method == 'get' || method == 'delete') {
            data = {
                params: data,
                headers
            }
        }
        axios[method](endPoint, data, { headers }).then(({ data, status: httpStatus }) => {
            const { code } = data;
            if (httpStatus === 500) {
                return reject(data);
            }

            if ((code === 200) || (code === 201) || (code === 205)) {
                return resolve(data);
            }

            return reject(data)
        }).catch((err) => {
            return reject(err);
        });
    })
}

export function apiPost(endPoint, data, headers = {}) {
    return apiReq(generateUrl(endPoint), data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {

    return apiReq(generateUrl(endPoint), data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}) {
    return apiReq(generateUrl(endPoint), data, 'get', headers);
}

export function apiPut(endPoint, data, headers = {}) {
    return apiReq(generateUrl(endPoint), data, 'put', headers);
}



export function getData(label) {
    const data = window && window.localStorage.getItem(label);
    return JSON.parse(data)
}

export function setData(label, data) {
    if (window && window.localStorage)
        localStorage.setItem(label, JSON.stringify(data));
}

export function removeData(label) {
    if (window && window.localStorage)
        localStorage.removeItem(label);
}

export function capitalizeFirstLetter(string = "") {
    return string && string.charAt(0).toUpperCase() + string.slice(1) || "";
}

export function trimText(text, len = 20) {
    if (text.length <= len) return text;
    return text.substring(0, len - 1) + "...";
}