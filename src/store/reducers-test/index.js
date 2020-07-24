//初始化一个state
let initState = {
    msg: 'hello msg',
    list: []
}

//处理action
export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'HOME':
            console.log("收到数据 " + state);
            let newState = JSON.parse(JSON.stringify(state));
            newState.msg = action.payload;
            return newState;
        case 'Cat':
            return state;

        default:
            return state;
    }
}