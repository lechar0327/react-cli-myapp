import { Cate_SELECT, GOOD_QUERY ,GOODBASEINFO_QUERY} from '../actionTypes';
import { goodapi } from '@/utils'

//异步获取品类的Action
export function getCates(params) {
    return function (dispatch) {
        goodapi.getCates(params).then(res => {
            //查询成功的Action
            dispatch({
                type: Cate_SELECT,
                payload: res.data
            });
        }).catch((err) => {
            //失败的Action
            dispatch({
                type: Cate_SELECT,
                payload: ''
            });
        });
    };
}

//异步获取商品列表的Action
export function getGoodsList(params) {
    return function (dispatch) {
        goodapi.getGoodsList(params).then(res => {
            //查询成功的Action
            dispatch({
                type: GOOD_QUERY,
                payload: res
            });
        }).catch((err) => {
            //失败的Action
            dispatch({
                type: GOOD_QUERY,
                payload: ''
            });
        });
    };
}

//异步获取商品基本信息
export function getGoodBaseInfo(params) {
    return function (dispatch) {
        goodapi.getGoodBaseInfo(params).then(res => {
            //查询成功的Action
            dispatch({
                type: GOODBASEINFO_QUERY,
                payload: res
            });
        }).catch((err) => {
            //失败的Action
            dispatch({
                type: GOODBASEINFO_QUERY,
                payload: ''
            });
        });
    }
}
