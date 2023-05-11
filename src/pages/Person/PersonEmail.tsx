import {Button, Form, Input, message, Modal, Select, Upload} from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {ProFormCaptcha} from "@ant-design/pro-components";

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

//@ts-ignore
const CollectionCreateForm: React.FC  = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    
    return (
        <Modal
            open={open}
            title="邮箱绑定"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields().then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type:'email',
                            message: '请输入正确的邮箱!',
                        },
                    ]}
                >
                    <Input size='large' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="请输入邮箱"/>
                </Form.Item>
                
                <ProFormCaptcha fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={'prefixIcon'}/>,
                }} captchaProps={{
                    size: 'large',
                }} placeholder={'请输入验证码'} captchaTextRender={(timing, count) => {
                    if (timing) {
                        return `${count} ${'获取验证码'}`;
                    }
                    return '获取验证码';
                }} name="captcha" rules={[
                    {
                        required: true,
                        message: '请输入验证码！',
                    },
                ]} onGetCaptcha={async () => {
                    message.success('获取验证码成功！验证码为：1234');
                }}/>
            </Form>
        </Modal>
    );
};


const PersonEmail: React.FC = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            // @ts-ignore
            url: localStorage.getItem('avatar'),
        },
    ]);
    
    const [open, setOpen] = useState(false);
    
    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    
    const onCreate = (values:any) => {
        console.log('Received values of form: ', values);
        setOpen(false);
    };
    
    
    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    
    return (
        <div>
            <h1>更换头像</h1>
            <ImgCrop>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                    {fileList.length < 5 && '+ Upload'}
                </Upload>
            </ImgCrop>
            <Form
                style={{
                    maxWidth: 400,
                    marginTop:30,
                }}
                >
                <h1>更换邮箱</h1>
                <Form.Item
                    name="email"
                    label="邮箱"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                    ]}
                >
                    <Input placeholder="若需要更改密码或使用邮箱登陆，则必须绑定邮箱"/>
                </Form.Item>
                <Form.Item >
                    <Button
                        type="primary"
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        绑定邮箱
                    </Button>
                    {/*@ts-ignore*/}
                    <CollectionCreateForm open={open}
                                          onCreate={onCreate}
                                          onCancel={() => {
                                              setOpen(false);
                                          }}
                    />
                </Form.Item>
            </Form>
        </div>
    );
};

export default PersonEmail;