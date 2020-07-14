import React, { Component } from 'react';

//导入样式
import './css/test.css'  //react脚手架已经内嵌了webpack,做好了处理 css-loader,style-loader

//简写,直接导出定义的App组件
export default class App extends Component {
    render() {
        //可以直接定义变量
        let a = 10;
        let b = 20;
        let color = 'red';
        // style改造对象写法
        let styleObj = {
            background: 'red',
            fontSize: '30px'
        }
        // 在react中,使用{}进行插值运算,只能写表达式
        return (
            <div>
                <label>{a + b + color}</label>
                {/* 嵌套一个变量写法 */}
                <div style={styleObj}>{a + b + color}</div>
                {/* 嵌套一个类的写法 */}
                <div style={{ background: 'yellow' }}>{a + b + color}</div>
                {/* 三目运算符运算 */}
                <div>{a > b ? a : b}</div>

                {/* 重点,一般使用这种方式写样式 */}
                <div className='box'>推荐这种方式写样式</div>
                {
                /* 
                注意:react@16之前,类样式的必须写成className,不能写class
                     react@16之后,类样式可以写className,也可以class,但是会报警告
                     原因class是js关键字 
                */}
            </div>
        );
    };
}