import {post} from "./request"

export function login(userinfo){
    return post('/users/',userinfo)
}

export function auth(username, password){
    return post('/login',{username, password})
}