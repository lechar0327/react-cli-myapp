import React, { Component } from 'react'
import './css/main.css'

// 发布订阅模式实现
const Event = {
    //存储消息
    cacheList: {},

    /**
     * 订阅消息
     * @param {消息类型} type 
     * @param {回调函数} callback 
     */
    subscribe(type, callback) {
        //如果存在此类型的消息,就push
        if (this.cacheList[type]) {
            this.cacheList[type].push(callback);
        }
        else {
            // 无此类消息,直接赋值回调函数
            this.cacheList[type] = [callback];
        }

    },
    //发布消息
    dispatch(type, data) {
        // 发布消息时,如果没有此类型的消息,直接退出
        if (!this.cacheList[type]) {
            return;
        }
        else {
            //循环执行回调函数
            var currentCache = this.cacheList[type];
            console.log(currentCache.length);
            
            for (let index = 0; index < currentCache.length; index++) {
                currentCache[index](data);
            }
        }
    }
}
export default class App extends Component {
    state = {
        isCreated: true
    }

    //组件订阅消息,此时涉及到一个生命周期,当组件加载完成时执行的钩子函数
    componentDidMount() {
        Event.subscribe('taggle', (data) => {
            console.log('执行回调函数' + data);

            this.setState({
                isCreated: !this.state.isCreated
            });
        })

        console.log(Event.cacheList);
        
    }

    render() {
        return (
            <div className="appBody">
                {
                    this.state.isCreated ? <SiderBar></SiderBar> : null
                }
                <Main></Main>
            </div>
        )
    }
}

//实现一个需求:
//一个页面中有侧边栏组件,主内容组件  左右结构,然后主内容组件中有  header组件,content组件,footer组件
// 分析:可以看出结构是:侧边栏和Mian是兄弟组件, hearder,content和侧边栏,可以说是 叔叔和侄子的关系
// 我要实现,header组件中一个按钮,切换侧边栏的隐藏和显示
// 这种方式,使用发布订阅模式:这里会涉及到生命周期,当组件加载完成时,触发一个钩子函数,然后订阅消息
/**
 * 发布订阅模式优点:
 * 1.耦合度低,发布者和订阅者互不干扰,他们能够独立运行,不用担心开发过程中两者之间的关系
 * 2.易于扩展,让系统无论什么时候都可以扩展,该订阅的订阅,该发布的发布
 * 3.灵活性,只要遵守一份协议,不需要担心不同的组件是如何组合在一起的
 */

/***
 * 这里也可以这么认为,非嵌套组件的通信,这类组件的通信可以考虑通过发布订阅模式或者采用context实现
 * 1.如果采用context,就是利用组件的共同父组件的context对象进行通信
 * 2.如果利用中间人模式,也就是利用父组件实现中转传递,但是会增加子组件和父组件之间的耦合度,如果嵌套深的话,不易找到父组件
 * 3.最好的方式是 发布订阅模式
 */



class SiderBar extends Component {
    render() {
        return (
            <div className="sideBar">
                侧边栏组件
                <button onClick={()=>{
                     Event.subscribe('taggle',(data)=>{
                        console.log('订阅消息');
                     });
                }}>订阅消息</button>
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
        return (
            <div className="header">
                头部组件
                <button onClick={() => {
                    console.log("头部组件定义的")
                    Event.dispatch('taggle', '头部组件发布消息');
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
