
import { Route } from 'react-router-dom';
import React, { Component } from 'react'
import { Layout } from 'antd';
import routeMap from '@/views/index';
const { Content } = Layout;

export default class ContainerComponent extends Component {
    // 生成视图容器
    createRoutes() {
        let res = []
        this.props.menuList.map(ele => {
            if (ele.children) {
                ele.children.map(ele => {
                    if (ele.path === "/menu") {
                        res.push(
                            <Route
                                exact
                                path={ele.path}
                                render={() => {
                                    const Menu = routeMap[ele.component];
                                    return (<Menu menuList={this.props.menuList}></Menu>)
                                }}
                                key={ele.id}>
                            </Route>)
                    } else {
                        res.push(
                            <Route
                                exact
                                path={ele.path}
                                component={routeMap[ele.component]}
                                key={ele.id}>
                            </Route>
                        )
                    }
                    return false;
                })
            }
            return false;
        })
        return res
    };

    render() {

        return (
            <Layout style={{ padding: '0 24px 24px',height:'100%' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        paddingTop: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {this.createRoutes()}
                </Content>
            </Layout>
        )
    }
}

