import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname: 'liuqiao',
        count: 0
    }
    render() {
        return (
            <div>
                我的名字是:{this.state.myname}
                <button onClick={this.handleClick1}>按钮一</button>
                <button onClick={this.handleClick2}>按钮二</button>
                计算器:{this.state.count}
                <button onClick={this.culeCount}>计数</button>
            </div>
        )
    }

    
    culeCount = () => {
        this.setState({
            count: this.state.count + 1
        });

        this.setState({
            count: this.state.count + 1
        });

        this.setState({
            count: this.state.count + 10
        });

        // 这里多个setState操作,会被合并,只会执行最后一次的setState,进行了批量更新优化
    }

    //此时的setState是异步的
    handleClick1 = () => {
        this.setState({
            myname: 'xiaoming'
        }, () => {
            //2.再打印
            console.log("我是异步的" + this.state.myname);
            // 原理:状态更新是异步的,这里的回调函数,会等待状态更新完,并且dom更新完之后,才会被调用,原因是
            //      创建虚拟dom,diff算法对比旧的dom节点,和文档碎片,进行最小化重新渲染
        });

        //1.先打印
        console.log(this.state.myname);
    }

    //此时的setState是同步的

    // setState在ajax,原生事件,setTimeout是同步的
    //在原生事件和setTimeout是不会进行批量更新
    handleClick2 = () => {
        setTimeout(() => {
            this.setState({
                myname: 'xiaohong'
            });
            console.log(this.state.myname);
            this.setState({
                myname: 'xiaofang'
            });
            console.log(this.state.myname);

        }, 0);
    }

    //官网的一句话:setState 并不保证是同步的
   // 所以,得出结论:setState是否同步异步,是得看情况的,当setState在ajax,原生事件,setTimeout是同步的,
   //其他情况 是异步的
}
