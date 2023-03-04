import axios from 'axios'
import config from '../config'
import { ElMessage } from 'element-plus'
const NETWORK_ERROR='网络请求异常，请稍后重试'
// 创建一个axios实例对象
const service = axios.create({
    baseURL:config.baseApi
})
// 在请求之前todo
service.interceptors.request.use((req)=>{
    // 可以自定义header
    // jwt-token认证会使用
    return req
})

// 在请求之后todo

service.interceptors.response.use((res)=>{
    const {code,data,msg} =res.data
    // 根据后端协商 视情况
    if(code==200){
        return data
    }else{
    // 网络请求错误
    ElMessage.error(msg||NETWORK_ERROR)
    return Promise.reject(msg||NETWORK_ERROR)
    }
})

// 封装的核心函数
function request(options){
    // {}
    options.method=options.method||'get'
    // 消除大小写
    if(options.method.toLowerCase()=='get'){
        options.params=options.data
    }
    // 对mock的处理
    // 此为总体的mock 可以调整单个接口的mock开关
    let isMock=config.mock
    if(typeof options.mock !== 'undefined'){
        isMock = options.mock
    }
    // 对线上环境作处理
    if(config.env=='prod'){
        // 如果是线上环境就不用mock
        service.defaults.baseURL=config.baseApi
    }else{
        service.defaults.baseURL=isMock?config.mockApi:config.baseApi
    }
    return service(options)
}
export default request