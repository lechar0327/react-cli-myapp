// 应用案例todolist ,父子组件讲解

import React, { Component } from 'react'
import './css/todolist.css'
export default class App extends Component {
    state = {
        list: []
    }
    render() {
        return (
            <div>
                <header>
                    <section>
                        <form onSubmit={this.save} id="form">
                            <label htmlFor="title">ToDoList</label>
                            <input type="text" id="title" name="title" ref='title' placeholder="添加ToDo" autoComplete='off' required="required" />
                        </form>
                    </section>
                </header>
                <section>
                    <h2 onClick={this.save}>正在进行 <span id="todocount">0</span></h2>
                    <List mylist={this.state.list} onEvent={(index) => {
                        console.log("定义一个回调函数,传递给"+index);
                        this.del(index);
                    }} />

                    <h2>已经完成 <span id="donecount">0</span></h2>
                    <ul id="donelist"></ul>
                </section>
                <footer>
                    Copyright © 2014 todolist.cn <a href="">clear</a>
                </footer>
            </div>
        )
    }

    state = {
        list: []
    }

    //保存功能
    save = (e) => {
        e.preventDefault();
        this.setState({
            //展开运算符,[...a,b]方式可以合并数组
            list: [...this.state.list, this.refs.title.value]
        });

    }

      //删除功能
      del = (index) => {
        //    使用splice删除
        //this.state.list.splice() 不能直接修改原状态

        //这里的思路是:因为不能直接修改原状态,通过一个新的数组,将原状态里的数组,赋值给新数组,然后在新数组中进行删除,然后再赋值
        // let newList = this.state.list;这种赋值方式不可取,是引用赋值,照样会修改原状态
        let newList = [...this.state.list];//展开运算符赋值

        newList.splice(index, 1);

        this.setState({
            list: newList
        });
    }

    update = () => {
        console.log('update');

    }
}

class List extends Component {
    render() {
        let newList = this.props.mylist;
        console.log(newList);

        return (
            <ol id="todolist" className="demo-box">
                {
                    newList.map((item, index) =>
                        <li key={item} draggable="true"><input type="checkbox" onChange={this.update} />
                            <p id="p-0">{item}</p>
                            {/* 强制改变this指向,事件传参 */}
                            <a href="#!" onClick={this.del.bind(this, index)}>-</a>
                        </li>
                    )
                }

            </ol>
        );
    }

    //删除功能
    del = (index) => {
        //   this.props.mylist 这个属性是不能修改的,只能通知父组件去处理,使用回调函数,通知父组件
        this.props.onEvent(index);
    }

}

//结论:父组件向子组件通信: 通过props属性向子属性传递信息  this.props.xxxx
//     子组件向父组件通信: 回调函数(一般情况下,回调函数会与setState成对出现)