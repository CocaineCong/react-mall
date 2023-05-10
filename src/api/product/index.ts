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
        data:params,
        ...(options || {}),
    });
}

export async function getProduct (id?:any, options?: { [key: string]: any }) {
    return instance<API.CommonResp>(productBaseUrl+`show`, {
        method: 'GET',
        ...(options || {}),
    });
}