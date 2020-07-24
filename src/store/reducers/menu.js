import { MENU_QUERY } from '../actionTypes';

let initState = {
    menuList: []
}

//创建一个处理菜单数据的reducer

// action 作用是给reducer一个改变state的动作信号
export default function reducer(state = initState, action) {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case MENU_QUERY:
            return { ...state, ...{ menuList: action.payload } }
        default:
            return state;
    }
}