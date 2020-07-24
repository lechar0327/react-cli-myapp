import fetch from './fetch'
//获取菜单接口
function getMenuList(params) {
    return fetch({
        method: "GET",
        url: "/api/menu/queryMenu",
        params
    });
}

export default {
    getMenuList
}


 

