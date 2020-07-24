//引入axios 
import axios from 'axios';

//创建一个axios的实例对象
var instance = axios.create({
    //baseUrl
    baseUrl: "http://localhost:9000",
    //设置超时时间 ms
    timeout: 7000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});



// 封装请求拦截器
instance.interceptors.request.use((config) => {
    //console.log(config);
    // 在这里做一些检测或者包装等处理
    // console.log('请求拦截', config)
    // 鉴权 token添加
    config.headers.Authorization = localStorage.getItem('token') || ''

    return config
})

// 封装响应拦截器
instance.interceptors.response.use((response) => {
   // console.log(response.data);
    // 请求成功
    // console.log('响应拦截', response)
    // 数据过滤，根据后端标识字符来进行数据

    if (response.data && response.data.code === 0) {

        return response.data.data || response.data;
    }
}, (error) => {
    // 请求失败
    return Promise.reject(error)
})

// 暴露axios实例
export default instance;


