import React, { Component } from 'react'

export default class App extends Component {
    //es6写法
    // constructor(){
    //     super();
    //     this.state={
    //         name: 'liuqiao',
    //         age: 18
    //     }
    // }

   // 注意,这里是es7的写法

    //不是状态,单纯只是变量
    a=10;

    //状态
    state = {
        name: 'liuqiao',
        age: 18
    }

    render() {
        return (
            <div>
                姓名:  {this.state.name}
                年龄:  {this.state.age}
                我的名字叫:{this.a}
                <button onClick={this.change}>更改</button>
            </div>
        )
    }

    change = () => {
        this.setState({
            name: 'xiaoming'
        });
    }
}
