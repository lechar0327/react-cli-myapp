import { Cate_SELECT, GOOD_QUERY,GOODBASEINFO_QUERY } from '../actionTypes';

let initState = {
    cateList: [],
    goodList: [],
    goodBaseInfo: {}
}

//创建一个处理品类数据的reducer

// action 作用是给reducer一个改变state的动作信号
export default function reducer(state = initState, action) {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case Cate_SELECT:
            newState = { ...state, ...{ cateList: action.payload } }
            return newState;
        case GOOD_QUERY:
            newState = { ...state, ...{ goodList: action.payload } }

            return newState;
        case GOODBASEINFO_QUERY:
            newState = { ...state, ...{ goodBaseInfo: action.payload } }
            console.log(newState);
            return newState;
        default:
            return state;
    }
}