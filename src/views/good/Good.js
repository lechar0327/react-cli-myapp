import React, { Component } from 'react';
import { Table } from 'antd';
import moment from "moment";
import {
    Row,
    Col,
    Button,
    Input,
    Divider,
    DatePicker,
    Tag
} from 'antd';
import CateSelect from '@/components/good/CateSelect'
import EditGood from '@/components/good/EditGood'
//引入查询菜单的Action
import { getGoodsList } from '@/store/actions/good'
//引入高阶组件
import { connect } from 'react-redux';

const { RangePicker } = DatePicker;

//将state中的数据变成当前组件的props
function mapStateToProps(state) {
    return {
        goodList: state.good.goodList,
        goodBaseInfo: state.good.goodBaseInfo
    }
}

//将Action动作转为当前组件的props
function mapDispatchToProps(dispatch) {
    return {
        getGoodsList: (params) => dispatch(getGoodsList(params)),
        getGoodBaseInfo: (params) => dispatch(getGoodBaseInfo(params))
    }
}


class Good extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //是否可见弹出框
            visible: false,
            //商品品类默认值
            cate: '',
            name: '',
            startDate: '',
            endDate: ''
        };

    }

    componentDidMount() {
        let params = {
            name: this.state.name,
            cate: this.state.cate,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            time: new Date().getTime
        }

        this.props.getGoodsList(params);
    }

    columns = [
        {
            title: 'id',
            dataIndex: '_id',
            width: '20%',
            key: '_id'
        },
        {
            title: '商品名称',
            dataIndex: 'name',
            width: '15%',
            key: 'name',
        },
        {
            title: '商品图片',
            dataIndex: 'img',
            key: 'img',
            render: (text, row, index) => {
                return (
                    <div>
                        <img style={{ display: 'inline-block', width: '50px', height: '50px' }} src={row.img} alt="" />
                    </div>
                )
            }
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            render: (text, row, index) => {
                return (
                    <div>
                        <div>
                            {row.price.$numberDecimal}
                        </div>
                    </div>
                )
            }
        },
        {
            title: '品类',
            dataIndex: 'cate',
            key: 'cate',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, row, index) => {
                return (
                    <div>
                        <div>
                            {row.status == 0 ? '下架' : '上架'}
                        </div>
                    </div>
                )
            }
        },
        {
            title: '属性',
            dataIndex: 'attribute',
            key: 'attribute',
            render: attribute => {
                return (
                    <div>
                        {attribute.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';

                            return (
                                <Tag color={color} key={tag}>
                                    {tag}
                                </Tag>
                            );
                        })}
                    </div>
                )
            }
        },
        {
            title: '创建时间',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text, row, index) => {
                return (
                    <div>
                        <div>
                            {moment(text).format("YYYY-MM-DD HH:mm:ss")}
                        </div>
                    </div>
                )
            }
        },
        {
            title: '操作',
            dataIndex: '',
            key: 'x',
            render: (text, row, index) => {
                return (
                    <div className='table-handle'>
                        <a onClick={this.goodOperation.bind(this, "edit", row)}>修改</a>
                    </div>
                );
            }
        },
    ];


    //商品操作
    goodOperation(type, row) {
        switch (type) {
            case "edit":
                this.setState({ visible: true });

                break;
            case "add":
                this.setState({ visible: true });
                break;
            default:
                break;
        }
        //console.log(row.id);
    }

    //改变弹框的隐藏显示属性,控制弹框关闭
    changVisible() {
        this.setState({
            visible: false
        });
    }

    //input受控组件取值
    changeValue = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    };

    //获取品类下拉框的值
    onCateChange = (value) => {
        this.setState({
            cate: value
        });
    }

    // 根据日期进行筛选
    dateFilter(dates) {
        if (dates != null) {
            let startDate = dates[0].format('YYYY-MM-DD')
            let endDate = dates[1].format('YYYY-MM-DD')
            // dates[1].valueOf()获取时间戳
            this.setState({
                startDate, endDate
            });
        }
        else {
            this.setState({
                startDate: '',
                endDate: ''
            });
        }
    }

    //商品查询按钮
    queryGoods = () => {
        let { name, cate, startDate, endDate } = this.state;

        let params = {
            name,
            cate,
            startDate,
            endDate
        }

        this.props.getGoodsList(params);
        //getGoodsList(params)
    }

    render() {

        let { goodList } = this.props;
        let { name } = this.state;
        let data = goodList;

        return (
            <div >
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Row align="middle" style={{ textAlign: 'center' }}>
                        <Col span={2}>
                            <span>商品名称:</span>
                        </Col>
                        <Col span={3}>
                            <span><Input autoComplete="off" name='name' value={name} onChange={this.changeValue} placeholder="商品名称" /></span>
                        </Col>
                        <Col span={2}>
                            <span>商品品类:</span>
                        </Col>
                        <Col span={3}>
                            <span>
                                <CateSelect name="cate" onCateChange={this.onCateChange} value={this.state.cate} ></CateSelect>

                            </span>
                        </Col>
                        <Col span={2}>
                            <span>日期选择:</span>
                        </Col>
                        <Col span={6}>
                            <RangePicker
                                format='YYYY-MM-DD'
                                showTime
                                onChange={this.dateFilter.bind(this)}
                            />
                        </Col>
                        <Col offset={1}>
                            <span>
                                <Button type="primary" onClick={this.queryGoods} size="large" >查询</Button>
                            </span>
                        </Col>
                        <Col offset={1}>
                            <span>
                                <Button type="primary" style={{ backgroundColor: "green", border: '0px solid' }} size="large" onClick={this.goodOperation.bind(this, 'add')}>添加商品</Button>
                            </span>
                        </Col>
                    </Row>
                </div>

                <Divider orientation="left">商品列表</Divider>
                <Table columns={this.columns} dataSource={data.list} rowKey='_id' />
                <EditGood visible={this.state.visible} changVisible={this.changVisible.bind(this)}></EditGood>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Good);