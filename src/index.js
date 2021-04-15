import axios from 'axios'
import Vue from 'vue'
import { Message } from 'element-ui'


// 创建axios实例
const http = axios.create({
    baseURL: '/xuptbbs',
    timeout: 120000 // 请求超时时间                     
})

// 添加request拦截器 
http.interceptors.request.use(
    function (config) {
        config.headers['Content-Type'] = 'application/json ';
        return config
    },
    function (error) {
        Promise.reject(error)
    })

// 添加respone拦截器
http.interceptors.response.use(
    function (response) {
        if (response.status && response.status == 200) {
            return response.data;
        }
    },
    function (error) {
        Message.error('请求失败!');
        return Promise.reject(error.response)
    }
)
function get(url, params) {
    console.log(url, params)
    return http({
        url: url,
        method: 'get',
        timeout: 180000,  // 单独配置超时时间,
        params,
        
    })
        .then(response => {
            return response;
        })
        .catch((error) => {
            console.log("get error" + error);
        })
}
function post(url, data) {
    return http({
        url: url,
        method: 'post',
        data: data,
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log("get error" + error);
        })
}
function postJson(url, params) {
    return http({
      url,
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data:params
    })
  }
export {
    get,
    post,
    postJson
}
