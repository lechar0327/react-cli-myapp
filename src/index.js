import React from 'react';//引入react核心包
import ReactDOM from 'react-dom';//react-dom封装dom操作
import './index.css';//用于处理页面的样式
import App from './013-生命周期'; //引入一个组件

// import * as serviceWorker from './serviceWorker';

//通过ReactDOM.render来渲染组件
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

