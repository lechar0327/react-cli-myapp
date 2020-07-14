import React, { Component } from 'react'

//一般不适用ref,因为ref这种方式,权限太大了,可以直接获取整个子组件 的对象

export default class App extends Component {
    render() {
        return (
            <div>

                <button onClick={() => {
                    console.log(this.refs.mychild.state.myname);
                    this.refs.mychild.handleEvent("父组件的问候");
                }}>子组件对象</button>
                {/* ref属性加载组件上,此时调用它的组件会获取到整个子组件的对象 */}
                <Child ref='mychild' />
            </div>
        )
    }
}

class Child extends Component {
    state = {
        myname: 'liuqiao'
    }
    render() {
        return (
            <div>
                我的名字:{this.state.myname}
            </div>
        )
    }

    handleEvent = (text) => {
    
        console.log("父组件来了" + text);
        this.setState({
            myname: text
        });
    }
}

