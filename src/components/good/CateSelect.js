// 商品品类业务组件
import React, { Component } from 'react'
import {
    Select
} from 'antd';

import { getCates } from '@/store/actions/good'
//引入高阶组件
import { connect } from 'react-redux';

//将state中的数据变成当前组件的props
function mapStateToProps(state) {
    return {
        cateList: state.good.cateList
    }
}

//将Action动作转为当前组件的props
function mapDispatchToProps(dispatch) {
    return {
        getCates: (params) => dispatch(getCates(params))
    }
}


class CateSelect extends Component {
    componentDidMount() {
        //调用接口
        this.props.getCates();
    }

    createSelect() {
        let { cateList } = this.props;
        return cateList.map((ele) => (
            <Select.Option key={ele._id} value={ele.cate}>{ele.cate_zh}</Select.Option>
        ));
    }

    render() {
        let { value } = this.props;

        return (
            <div>
                <Select value={value}  onChange={(value)=>this.props.onCateChange(value)} style={{ width: "100%", textAlign: "left" }} placeholder="商品品类" >
                <Select.Option key={-1} value={''}>全部品类</Select.Option>
                    {this.createSelect()}
                </Select>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CateSelect);