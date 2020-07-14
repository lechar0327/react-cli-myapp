import React, { Component } from 'react'
import myPropTypes from 'prop-types' // 包含数据类型验证方法

export default class App extends Component {
    //state是组件内部的状态
    //props是组件与组件之间通信的桥梁
    render() {
        let obj = {
            myModule: 'list',
            //注意这里的数据类型,如果这样传会当成字符串
            isShow: false
        }
        return (
            <div>
                <div style={{ background: 'red' }}>
                    home页面使用

                    {/* myModule是该组件的属性,自定义 */}
                    <Navbar myModule='home' />
                </div>
                <div style={{ background: 'blue' }}>
                    列表页面使用
                    <Navbar {...obj} />
                </div>
                <div style={{ background: 'yellow' }}>
                    内容页面使用
                    <Navbar myModule='content' />
                </div>
            </div>
        )
    }
}

class Navbar extends Component {
    // 使用props关键字进行访问属性  this.props.myModule

    // 涉及到数据通信取值,所以我们使用属性时,需要做属性验证

    // 关键字static 进行属性验证
    static propTypes={
        myModule:myPropTypes.string,//必须是字符串才可以传
        isShow:myPropTypes.bool//必须是bool类型
    }

    // 还可以设置默认属性(当组件不传属性时,设置默认属性)
    static defaultProps={
        isShow:true
    }


    render() {
        return (
            <div>
                我是导航栏 {this.props.myModule}

                {
                    this.props.isShow ? <button>显示</button> : null
                }
            </div>
        )
    }
}
