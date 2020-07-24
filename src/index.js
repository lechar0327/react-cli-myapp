import React from 'react';//引入react核心包
import ReactDOM from 'react-dom';//react-dom封装dom操作
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import App from './App'; //引入一个组件
//通过ReactDOM.render来渲染组件
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

 