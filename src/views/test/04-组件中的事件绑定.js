//rcc 快捷方式生成
import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* 给元素设置ref属性,可以通过this.refs.username.value获取dom的值 */}
                    
                    用户名: <input type="text" placeholder="请输入用户名" ref='username' />
                    密码:   <input type="password" placeholder="请输入密码" ref='pwd' />
                    {/*
                     1.匿名箭头函数写法 
                      比较简洁,适合处理代码少,简洁的逻辑
                    */}
                    <button onClick={() => {
                        console.log(this.refs.username.value)
                    }}>提交(匿名箭头函数写法)</button>

                     {/*
                      2.自定义函数写法 
                       会存在this指向问题,需要使用bind强制改变this指向
                       注意,必须使用bind才可以,call和 apply不行
                       原因是call和apply改变this指向后,会立即执行函数
                    */}
                    <button onClick={this.submitLogin.bind(this)}>提交(自定义函数写法)</button>
                    {/*
                      3.自定义声明式箭头函数写法 
                        一般推荐这种方式
                    */}
                    <button onClick={this.submitOK}>提交(自定义声明式箭头函数写法)</button>
                    {/*
                      4.改编第一种  箭头函数做中转
                    */}
                    <button onClick={(e)=>this.submitLogin('liuqiao','123')}>改编第一种  箭头函数做中转</button>

                </div>
            </div>
        )
    }

    submitLogin() {
        console.log('外部自定义函数', this.refs.username.value);
    }

    submitOK=()=>{
        console.log('外部自定义函数', this.refs.username.value);
    }
}



