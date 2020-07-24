import React, { Component } from 'react'
import './style.scss'
import { Form, Input, Button, Checkbox } from 'antd';
import loginapi from '@/utils/api/login'
import { withRouter } from 'react-router-dom';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};



class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        //将当前路由变为login
        this.props.history.replace('/login');
    }

    onFinish = values => {
        loginapi.login(values).then(res => {
            // console.log('success');
            localStorage.setItem('token', res.token);
            this.props.history.replace('/');
            console.log(this.props);
            this.props.loginHandle();
        });
    };


    render() {
        return (
            <div className="login">
                <div className="login-box">
                    <Form
                        {...layout}
                        name="basic"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        >
                            <Input placeholder="请输入用户名" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="pwd"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="请输入密码" />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);