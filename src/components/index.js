import React, { Component } from 'react'
//引入查询菜单的Action
import { queryMenu } from '@/store/actions/menu'
//引入高阶组件
import { connect } from 'react-redux';
import loadable from '@loadable/component';
import { Layout } from 'antd';

// 动态加载
const TopCom = loadable(() => import('./layout/TopCom'));
//const FooterCom = loadable(() => import('./layout/FooterCom'));
const ContainerCom = loadable(() => import('./layout/ContainerCom'));
const SiderCom = loadable(() => import('./layout/SiderCom'));

//将state中的数据变成当前组件的props
function mapStateToProps(state) {
    return {
        menuList: state.menu.menuList
    }
}  

//将Action动作转为当前组件的props
function mapDispatchToProps(dispatch) {
    return {
        getMenuList: (params) => dispatch(queryMenu(params))
    }
}

class LoyoutCom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoad: false
        }
    }

    componentDidMount() {
        //调用接口
        this.props.getMenuList();

    }

    render() {

        return (
            <Layout>
                <TopCom></TopCom>
                <Layout>
                    <SiderCom menuList={this.props.menuList}></SiderCom>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <ContainerCom menuList={this.props.menuList}></ContainerCom>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoyoutCom);
