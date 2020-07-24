import React, { Component } from 'react'
import {
    Row,
    Col,
    InputNumber,
    Input,
    Radio,
    Form,
    Checkbox,
    DatePicker,
    Upload,
    Switch
} from 'antd';
import CateSelect from '@/components/good/CateSelect'
import { uploadIcon } from '@/utils/img/img'
const { TextArea } = Input;
export default class GoodFrom extends Component {
    state = {
        imageUrl: uploadIcon,
        cate: '',
        status: 1,
    }
    componentDidMount() {

        this.props.form.setFieldsValue({ price: 1113 });
    }
    render() {
        ;
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };

        //处理图片上传
        const handleChange = ({ file }) => {
            if (file.response) {
                this.setState({
                    imageUrl: file.response.data
                });

                this.props.getImgUrl(file.response.data);
            }

        }

        //单选按钮,控制上架下架
        const onChangeStatus = (value) => {
            this.props.getStatusValue(value);
        }


        const onCateChange = (value) => {
            this.setState({
                cate:value
            });
        }

        return (


            <div>
                <Form
                    {...layout}
                    name="basic"

                    form={this.props.form}
                >
                    <Form.Item
                        label="商品名称"
                        name="name"
                        rules={[{ required: true, message: '请输入商品名称!' }]}
                    >
                        <Input autoComplete="off" />
                    </Form.Item>

                    <Form.Item
                        label="商品价格"
                        name="price"
                        rules={[{ required: true, message: '请输入商品价格!' }]}
                    >
                        <InputNumber autoComplete="off" />
                    </Form.Item>

                    <Form.Item
                        label="品类:"
                        name="cate"
                        rules={[{ required: true, message: '请选择品类!' }]}
                    >
                        <CateSelect onCateChange={onCateChange} value={this.state.cate}></CateSelect>
                    </Form.Item>

                    <Form.Item name="attribute" label="服务属性">
                        <Checkbox.Group>
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="免费退货" style={{ lineHeight: '32px' }}>
                                        免费退货
                                             </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="全部包邮" style={{ lineHeight: '32px' }}>
                                        全部包邮
                                              </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="售后服务" style={{ lineHeight: '32px' }}>
                                        售后服务
                                              </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="追溯跟踪" style={{ lineHeight: '32px' }}>
                                        追溯跟踪
                                            </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="是否秒杀" style={{ lineHeight: '32px' }}>
                                        是否秒杀
                                            </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item
                        label="商品状态:"

                    >
                        <Radio.Group onChange={onChangeStatus} value={this.props.status}>
                            <Radio value={1}>下架</Radio>
                            <Radio value={0}>上架</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        label="上传图片:"
                        valuePropName="fileList"
                        rules={[{ required: true, message: '请上传图片!' }]}
                    >
                        <Upload
                            name="file"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="/api/upload"
                            onChange={handleChange}
                        >
                            <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} />
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="备注:"
                        name="remark"
                    >
                        <TextArea rows={4} ></TextArea>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
