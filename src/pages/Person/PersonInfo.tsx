import {Button, Form, Input, message, Select} from 'antd';
import {useEffect, useState} from 'react';
import {getPersonInfo} from "../../api/user";
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
    const [nickname,setNickName]=useState('')
    const [email,setEmail]=useState('')
    const [data, setData] = useState('');

    const GetUserInfo = async () => {
        const res:any = await getPersonInfo()
        console.log("res:any",res)
        if(res.status === Code.SuccessCode){
            let { email, nick_name } = res.data;
            setNickName(nick_name)
            setEmail(email)
            form.setFieldsValue(res.data)
            console.log("res.data",res.data)
        } else {
            message.error("操作成功").then()
        }
    }

    const onFinish = (values:any) => {
        console.log('Received values of form: ', values);
    };

    const parentToChild = () => {
        setData(email);
    }
    
    const showModal = () => {
        form.setFieldsValue("表格数据")   //对象形式(user:{data})
    };
    
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
                        <Input defaultValue={nickname} placeholder="设置网名"/>
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