import instance from "../index";
import _ from 'lodash';

const BaseCartUrl = "/api/v1/carts/"

export async function createCartAPI (body?: API.CartCreateReq, options?: { [key: string]: any }) {
    let params = new FormData();
    _.forIn(body,function(value:string,key:string){
        return params.append(key,value)
    })
    return  instance<API.CommonResp>(BaseCartUrl+`create`, {
        method: 'POST',
        ...(options || {}),
        data:params,
    });
}

export async function listCartAPI (body?: any, options?: { [key: string]: any }) {
    return  instance<API.CategoryListResp>(BaseCartUrl+`list`, {
        method: 'GET',
        ...(options || {}),
    });
}

