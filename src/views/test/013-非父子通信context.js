import React, { Component } from 'react'
import './css/main.css'

//定义一个全局的context
const GlobalContext = React.createContext();

export default class App extends Component {
    state = {
        isCreated: true,
        service: "打电话需要付费"
    }

    render() {
        return (
            <GlobalContext.Provider value={
                {
                    service:this.state.service+"有我在,不用付费了",
                    //切换显示隐藏
                    onChangeShow: () => {
                        this.setState({
                            isCreated: !this.state.isCreated
                        })
                    },

                    onChangeService: () => {
                        this.setState({
                            service: "打电话免费"
                        });
                    }
                }
            }>
                <div className="appBody">
                    {
                        this.state.isCreated ? <SiderBar></SiderBar> : null
                    }
                    <Main></Main>
                </div>


            </GlobalContext.Provider>
        )
    }
}

//实现一个需求:
//一个页面中有侧边栏组件,主内容组件  左右结构,然后主内容组件中有  header组件,content组件,footer组件
// 分析:可以看出结构是:侧边栏和Mian是兄弟组件, hearder,content和侧边栏,可以说是 叔叔和侄子的关系
// 我要实现,header组件中一个按钮,切换侧边栏的隐藏和显示
//这里采用的是context通信,跨级通信方式 有旧版本和新版本两种方式   
//React16.x之前的是旧版本
//React16.x之后的是新版本

// 这里采用的 是新版本

//React.createContext 方法用于创建一个 Context 对象。该对象包含 Provider 和 Consumer两个属性，分别为两个 React 组件。
//Provider 组件。用在组件树中更外层的位置。它接受一个名为 value 的 prop，其值可以是任何 JavaScript 中的数据类型。
//Consumer 组件。可以在 Provider 组件内部的任何一层使用。它接收一个名为 children 值为一个函数的 prop。这个函数的参数是 Provider 组件接收的那个 value prop 的值，返回值是一个 React 元素（一段 JSX 代码）。
//实际上context通信,原理是生产消费者模式  Provider(生产者)  Consumer(消费者)
// 子孙组件都是属于消费者
// App父组件属于生产者
class SiderBar extends Component {
    render() {
        return (
            <div className="sideBar">
                侧边栏组件
            </div>
        );
    }
}

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Header></Header>
                <Content ></Content>
            </div>
        );
    }
}


class Header extends Component {
    render() {
        return <GlobalContext.Consumer>
            {
                context => (
                    <div className="header">
                        头部组件
                        <button onClick={() => {
                            console.log("头部组件定义的")
                            context.onChangeShow();
                        }

                        }>切换</button>
                        {
                            context.service
                        }
                        <button onClick={
                            ()=>{
                                context.onChangeService()
                            }
                        }>付费</button>
                    </div>
                )
            }

        </GlobalContext.Consumer>

    }
}

class Content extends Component {
    render() {
        return (
            <div className="content">
                内容组件
            </div>
        );
    }
}
