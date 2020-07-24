import fetch from './fetch'
//获取菜单接口
function login(params) {
    return fetch({
        method: "GET",
        url: "/api/user/login",
        params
    });
}

export default {
    login
}


 

