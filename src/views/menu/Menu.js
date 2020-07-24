import React, { Component } from 'react';
import { Table } from 'antd';
import { Row, Col, Button, Input, Divider, Modal, Form } from 'antd';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
            ModalText: 'Content of the modal',
            //是否可见弹出框
            visible: false,
            //确定按钮的loading
            confirmLoading: false,
            row: {},
        };

    }

    componentDidMount() {

    }

    columns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: '20%'
        },
        {
            title: '菜单名称',
            dataIndex: 'text',
            width: '15%'
        },
        {
            title: '跳转路径',
            dataIndex: 'path',
        },
        {
            title: '组件',
            dataIndex: 'component',
        },
        {
            title: '图标',
            dataIndex: 'icon',
        },
        {
            title: '操作',
            dataIndex: '',
            key: 'x',
            render: (text, row, index) => {
                return (
                    <div className='table-handle'>
                        <a onClick={this.MenuOperation.bind(this, "edit", row)}>修改</a>
                    </div>
                );
            }
        },
    ];

    //菜单操作
    MenuOperation(type, row) {
        switch (type) {
            case "edit":
                this.setState({ "visible": true });
                break;

            default:
                break;
        }
        console.log(row.id);
    }

    //编辑弹框
    modelBtnClick(type, values) {
        switch (type) {
            case "ok":
                console.log(values);
                break;
            case "cancel":
                this.setState({ "visible": false });
                break;
            default:
                break;
        }
    }

    render() {
        // console.log(this.props.menuList);
        let { menuList } = this.props;

        let data = menuList;

        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div>
                <Row align="middle">
                    <Col span={2}>
                        <span>菜单名称:</span>
                    </Col>
                    <Col span={5}>
                        <span><Input placeholder="菜单名称" /></span>
                    </Col>
                    <Col offset={1}>
                        <span>
                            <Button type="primary" size="large" >查询</Button>
                        </span>
                    </Col>
                </Row>
                <Divider orientation="left">菜单列表</Divider>
                <Table columns={this.columns} dataSource={data} rowKey='id' />

                <Modal
                    title="编辑菜单"
                    visible={this.state.visible}
                    onOk={this.modelBtnClick.bind(this, "ok")}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.modelBtnClick.bind(this, "cancel")}
                >
                    <div>
                        <Form
                            {...layout}
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="菜单名称"
                                name="text"
                                rules={[{ required: true, message: '请输入菜单名称!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="跳转路径"
                                name="path"
                                rules={[{ required: true, message: '请输入跳转路径!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="组件名:"
                                name="component"
                                rules={[{ required: true, message: '请输入组件名!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="图标:"
                                name="icon"
                            >
                                <Input />
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default Menu;