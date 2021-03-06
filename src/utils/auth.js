import Cookies from "js-cookie";

const TokenKey = 'tusir-token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken(token) {
    return Cookies.remove(TokenKey)
}