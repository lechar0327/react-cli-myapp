import React, { Component } from 'react'
import '@/assets/css/todolist.css'

import { connect } from 'react-redux'
import { addTodo } from '@/store/actions/todo'
//将stroe中的数据变成组件中的数据
function mapStateToProps(state) {
    return {
        msg: state.msg,
        list: state.todo.list
    };
}

function mapActionToProps(dispatch) {
    return {
        addTodo: (payload) => dispatch(addTodo(payload)),
    }
}



class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
    }

    createTodoList = () => {
        return this.props.list.map((item, index) =>
            <li key={item.id} draggable="true"><input type="checkbox" onChange={this.update} />
                <p id="p-0">{item.task}</p>
                {/* 强制改变this指向,事件传参 */}
                <a href="#!" onClick={this.del.bind(this, index)}>-</a>
            </li>
        )
    }

    InputChangeValue = (e) => {
        this.setState({
            task: e.target.value
        });
    }

    save = (e) => {
        let { task } = this.state;
        if (e.keyCode === 13) {
            this.props.addTodo({
                id: Date.now(),
                task: task
            })
        }
    }

    del = () => {

    }

    update = () => {

    }
    render() {
        return (
            <div>
                <header>
                    <section>

                        <label htmlFor="title">ToDoList</label>
                        <input type="text" id="title" onKeyUp={this.save} name="title" value={this.state.task} onChange={this.InputChangeValue} placeholder="添加ToDo" autoComplete='off' required="required" />

                    </section>
                </header>
                <section>
                    <h2 onClick={this.save}>正在进行 <span id="todocount">0</span></h2>
                    <ol id="todolist" className="demo-box">
                        {
                            this.createTodoList()
                        }

                    </ol>
                    <ol id="todolist" className="demo-box"></ol>
                    <h2>已经完成 <span id="donecount">0</span></h2>
                    <ul id="donelist"></ul>
                </section>
                <footer>
                    Copyright © 2014 todolist.cn <a href="www.baidu.com">clear</a>
                </footer>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapActionToProps)(Todo);