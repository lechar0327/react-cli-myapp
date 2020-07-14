import React, { Component } from 'react';//引入react核心包

/**
 * 声明组件有3种方式
 * 1.es5写法:React.createClass()  最老版本的用法,不建议使用,已经废弃了
 * 2.es6写法:React.Component
 *           支持 class语法 (状态 属性  生命周期)  
 *            
 * 3.无状态函数式写法: (又称为纯组件SFC)
 *           function Child (){ return <div>child</div> }     
 *           不支持状态  属性 生命周期
 * 
 *          react@16.8 =>  支持状态  属性  "生命周期"  React Hooks        
 */

//  1.函数式组件
function Person() {
    //注意:此处return后面内容换行后必须用小括号括起来,因为原生js,是会返回undefind
    return (
        <div>
            我是父组件

            {/* 组件嵌套 */}
            <Child />
        </div>
    );

}

function Child() {
    return (
        <div>我是子组件</div>
    );
}

// 2.class类组件
class Animal extends React.Component {
    render() {
        return (
            <div>
                动物组件
                {/* 组件嵌套 */}
                <Cat></Cat>
            </div>
        )
    }
}

//这里通过解构赋值得到了Component  (import React, { Component } from 'react';)
class Cat extends React.Component {
    render() {
        return (
            <div>
                猫猫组件
            </div>
        )
    }
}
export default Animal