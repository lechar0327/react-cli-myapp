//获取专职于TODO功能的字典
import { TODO_ADD} from '../actionTypes';

// 提供一个action信息
export function addTodo(payload) {
    return {
        type: TODO_ADD,
        payload
    }
}