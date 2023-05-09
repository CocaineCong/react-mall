import axios from "axios";

let instance = axios.create({})
// http index 拦截器
instance.interceptors.request.use(
    config => {
        config.headers.set('access_token',window.localStorage.getItem('access_token'))
        config.headers.set('refresh_token',window.localStorage.getItem('refresh_token'))
        return config
    },
    err => {
        return Promise.reject(err)
    })

// 添加相应拦截器
instance.interceptors.response.use(function (response){
    // 对响应头的数据做处理
    return response.data;
}, function (error){
    return Promise.reject(error)
});


export default instance
