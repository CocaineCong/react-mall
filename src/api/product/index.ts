import _ from 'lodash';
import instance from "../index";

const productBaseUrl = "/api/v1/product/"

export async function listProduct (body?: API.ProductListReq, options?: { [key: string]: any }) {
    let params = new FormData();
    _.forIn(body, function (value, key) {
      return params.append(key, value);
    })
    return instance<API.ProductListResp>(productBaseUrl+`list`, {
        method: 'GET',
        params:params,
        ...(options || {}),
    });
}

export async function getProduct (body?:any, options?: { [key: string]: any }) {
    return instance<API.CommonResp>(productBaseUrl+`show`, {
        method: 'GET',
        params:body,
        ...(options || {}),
    });
}

export async function getProductImg (body?:any, options?: { [key: string]: any }) {
    return instance<API.CommonResp>(productBaseUrl+`imgs/list`, {
        method: 'GET',
        params:body,
        ...(options || {}),
    });
}

export async function createProduct(body:API.ProductCreateReq,options?:{[key:string]:any}){
    let params = new FormData();
    _.forIn(body,function(value,key){
        return params.append(key,value);
    })
    return instance<API.CommonResp>(productBaseUrl+`create`,{
        method:'POST',
        data:params,
        ...(options||{}),
    });
}