import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';

import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;


export default class SiderCom extends Component {

    render() {
        return (
            <div>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {
  
                            this.props.menuList.map(function (ele) {
                                return (<SubMenu key={ele.id} title={ele.text}>
                                    {
                                        ele.children.map((child) => (
                                            <Menu.Item key={child.id}>
                                                <NavLink exact activeClassName='active' to={child.path}>{child.text}</NavLink>
                                            </Menu.Item>
                                        ))
                                    }
                                </SubMenu>)
                            })
                        }
                    </Menu>
                </Sider>
            </div>
        )
    }
}
