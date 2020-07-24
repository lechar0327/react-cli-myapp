import fetch from './fetch'
//获取商品分类
function getCates(params) {
    return fetch({
        method: "GET",
        url: "/api/cate/queryCates",
        params
    });
}

//添加商品
function addGoods(data) {
    return fetch({
        method: "POST",
        url: "/api/good/insertGoods",
        data
    });
}

//获取商品列表
function getGoodsList(params) {
    return fetch({
        method: "GET",
        url: "/api/good/queryGoodsList",
        params
    });
}

// 获取商品基本信息
function getGoodBaseInfo(params) {
    return fetch({
        method: "GET",
        url: "/api/good/queryGoodsBaseInfo",
        params
    });
}

export default {
    getCates,
    addGoods,
    getGoodsList,
    getGoodBaseInfo
}




