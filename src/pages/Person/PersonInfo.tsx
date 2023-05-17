import {Button, Form, Input, message, Select} from 'antd';
import {useEffect, useState} from 'react';
import {getPersonInfo, updatePersonInfo} from "../../api/user";
import {Code} from "../../constant";

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function PersonInfoModel(){
    const [form] = Form.useForm();
    const [nickname,setNickname]=useState('')
    const [email,setEmail]=useState('')
    const [data, setData] = useState('');

    const GetUserInfo = async () => {
        const res:any = await getPersonInfo()
        if(res.status === Code.SuccessCode){
            let { email, nickname } = res.data;
            setNickname(nickname)
            setEmail(email)
            form.setFieldsValue(nickname)
        } else {
            message.error(res.error).then()
        }
    }

    const onFinish = async(values:{
        nick_name:string
    })=>{
        const data:any = await updatePersonInfo({...values});
        if (data.status === Code.SuccessCode) {
            message.success(data.msg)
        } else {
            message.error(data.error)
        }
    }

    useEffect(() => {
        GetUserInfo()
    }, [])

    return (
        <div>
            <div>
                <Form
                    {...formItemLayout}
                    form={form}
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
                    scrollToFirstError
                >

                    <Form.Item
                        name="nick_name"
                        label="昵称"
                        rules={[
                            {
                                message: 'Please input your nickname!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input defaultValue={nickname} placeholder="请输入默认值!"/>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            修改个人信息
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

export default PersonInfoModel;