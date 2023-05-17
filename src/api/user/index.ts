import _ from 'lodash';
import instance from "../index";

const userBaseUrl = "/api/v1/user/"

export async function login(body: API.UserLoginReq, options?: { [key: string]: any }) {
    let params = new FormData();
    _.forIn(body,function(value:string,key:string){
        return params.append(key,value)
    })
    return instance<API.CommonResp>(userBaseUrl+'login',{
        method:'POST',
        data:params,
        ...(options||{}),
    })
}

export async function register(body: API.UserRegisterReq, options?: { [key: string]: any }) {
    let params = new FormData();
    _.forIn(body,function(value:string,key:string){
        return params.append(key,value)
    })
    return instance<API.CommonResp>(userBaseUrl+'register',{
        method:'POST',
        data:params,
        ...(options||{}),
    })
}

export async function getPersonInfo() {
    return instance<API.CommonResp>(userBaseUrl+'show_info',{
        method:'GET',
    })
}

export async function updatePersonInfo(body: API.UpdateUserInfoReq, options?: { [key: string]: any })  {
    let params = new FormData();
    _.forIn(body,function(value:string,key:string){
        return params.append(key,value)
    })
    return instance<API.CommonResp>(userBaseUrl+'update',{
        method:'POST',
        data:params,
        ...(options||{}),
    })
}

export async function changeAvatar(body: { file: string }, options?: { [key: string]: any }) {
    let params = new FormData();
    _.forIn(body, function (value, key) {
      return params.append(key, value);
    })
    return instance<API.CommonResp>(userBaseUrl+`avatar`, {
      method: 'POST',
      data: params,
      ...(options || {}),
    });
  }