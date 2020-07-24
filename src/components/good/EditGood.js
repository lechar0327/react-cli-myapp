import React, { useState } from 'react'

import GoodFrom from './GoodFrom'
import { Modal, Form, Alert } from 'antd';
import { goodapi } from '@/utils'
export default function EditGood(props) {
    let { visible, changVisible } = props;

    //确定按钮的loading
    let [confirmLoading] = useState(false);
    //图片初始化
    let [img, setImgUrl] = useState('');
    //单选按钮商品状态初始化
    let [status, setStatus] = useState(1);

    const [form] = Form.useForm();

    const modelBtnClick = (type) => {
        switch (type) {
            case "ok":
                saveGood();
                break;
            case 'cancel':
                changVisible();
                break;
            default:
                break;
        }
    }

    const saveGood = async () => {
        try {
            const fieldsValue = await form.validateFields();
            let { name, price, cate, remark, attribute } = fieldsValue;

            let data = {
                name,
                price,
                cate,
                img,
                status,
                remark,
                attribute
            };

            goodapi.addGoods(data).then((res) => {
                changVisible();
            });

        } catch (err) {
            console.log(err)
        }
    }

    const getImgUrl = (imgUrl) => {
        setImgUrl(imgUrl);
    }

    const getStatusValue = (value) => {
        setStatus(value);
    }
    return (
        <div>
            <Modal
                title="编辑商品"
                width={820}
                maskClosable={false}
                visible={visible}
                onOk={() => { modelBtnClick("ok") }}
                confirmLoading={confirmLoading}
                onCancel={() => { modelBtnClick('cancel') }}
            >
                <GoodFrom form={form} getImgUrl={getImgUrl} status={status} getStatusValue={getStatusValue}></GoodFrom>

            </Modal>
        </div>
    )

}
