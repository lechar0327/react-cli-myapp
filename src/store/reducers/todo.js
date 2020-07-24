//获取专职于TODO功能的字典
import { TODO_ADD, TODO_DELETE} from '../actionTypes';

// 初始化state
let initState = {
    msg: "hello world",
    list: [{
        id: 1, task: "吃饭"
    }, {
        id: 2, task: "睡觉"
    }]
}

// 1.state不能直接修改,也就是任何时候,state都没有被改变
// 2.state的改变不是原来的state,而是我们深拷贝了一个新的state,去替换旧的
// 3.reducer 这个函数里抛出去的是深拷贝的state
export default function reducer(state = initState, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TODO_ADD:
            newState.list.push(action.payload);
            break;
        case TODO_DELETE:
            newState.list.filter((ele) => {
                return ele.id !== action.payload;
            });
        default:
            break;
    }

    return newState;
}