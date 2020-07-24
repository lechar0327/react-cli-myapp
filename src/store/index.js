//引入创建Store的函数和合并Reducers的函数方法
import { createStore, combineReducers, applyMiddleware } from 'redux';
//Reducers单元模块
import todoReducers from './reducers/todo';
import menuReducers from './reducers/menu';
import goodReducers from './reducers/good'

//引入中间件,作用是把异步行为(比如调接口)的action转为3个同步的action
import thunk from 'redux-thunk';

//合并 Reducers
const reducers = combineReducers({
    todo: todoReducers,
    menu: menuReducers,
    good: goodReducers
})
export default createStore(reducers, applyMiddleware(thunk));

