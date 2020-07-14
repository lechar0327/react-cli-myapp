import React, { Component } from 'react'
import './css/main.css'
export default class App extends Component {
    state = {
        isCreated: true
    }

    render() {
        return (
            <div className="appBody">
                {
                    this.state.isCreated ? <SiderBar></SiderBar> : null
                }
                <Main onAppEvent={
                    () => {
                        this.setState({
                            isCreated: !this.state.isCreated
                        })
                    }
                }> </Main>
            </div>
        )
    }
}

//实现一个需求:
//一个页面中有侧边栏组件,主内容组件  左右结构,然后主内容组件中有  header组件,content组件,footer组件
// 分析:可以看出结构是:侧边栏和Mian是兄弟组件, hearder,content和侧边栏,可以说是 叔叔和侄子的关系
// 我要实现,header组件中一个按钮,切换侧边栏的隐藏和显示
// 这种方式是中间人模式的通信,也就是一层一层的传递, header组件触发,main组件的回调函数,main组件再触发App组件的回调函数

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
                <Header onContentEvent={
                    () => {
                        this.props.onAppEvent()
                    }
                }></Header>
                <Content ></Content>
            </div>
        );
    }
}


class Header extends Component {
    render() {
        return (
            <div className="header">
                头部组件
                <button onClick={() => {
                    console.log("头部组件定义的")
                    this.props.onContentEvent()
                }

                }>切换</button>
            </div>
        );
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
