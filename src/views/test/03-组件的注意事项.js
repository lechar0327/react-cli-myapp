import React,{Component} from 'react';

//此处的App 可以小写,但是我们要遵循业界的一个规范,大写
export default class App extends Component{
    /**
     * 组件注意事项
     * 1.组件名,在被引用时 首字母必须大写 编译时会被认为是自定义组件,如果写成了小写,会被认为是原生js的dom节点
     * 2.组件的最外层必须有一个标签包裹,不能有兄弟元素
     * 3.return加上小括号,可以回车,如果内容多了,肯定不会写成一行,原生中return后面没有跟内容,会返回undefind
     * 4.组件是可以嵌套的
     * 5.组件声明的3种方式:
     *                  无状态函数式写法,
     *                  React.Component的class类写法(推荐使用这种)
     *                  React.createClass() 废弃了
     * 6.注释写法
     *          单行注释:  {//这里注释}
     *          多行注释:  {/星号(*)   星号/}
     * 7.样式写法
     *          class=> className
     *          for=>htmlFor (label标签中的for)
     *          行内样式写法 (facebook推荐,个人不推荐这种写法)注意font-size的写法 驼峰写法 
     * 
     */
    render(){
        return(
            <div>
                组件注意事项
      
                {/* 我是单行注释 也可以使用两个斜杆  */}

                {
                /* 
                 我是多行注释
                */
               }

                {/* 组件可以嵌套  */}
                <A/>
            </div>
            // 必须最外层包一层,否则报错
            // <div>组件注意事项</div>
        );

    }
}

class A extends Component{
    render(){
        return(
            <div>我是嵌套组件</div>
        )
    }
}