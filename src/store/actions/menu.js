import { MENU_QUERY } from '../actionTypes';
import { menuapi } from '@/utils'

//异步获取菜单的Action
export function queryMenu(params) {

    return function (dispatch) {
        menuapi.getMenuList(params).then(res => {
            //查询成功的Action
            dispatch({
                type: MENU_QUERY,
                payload: res.list
            });
        }).catch((err) => {
            //失败的Action
            dispatch({
                type: MENU_QUERY,
                payload: ''
            });
        });
    };
}

