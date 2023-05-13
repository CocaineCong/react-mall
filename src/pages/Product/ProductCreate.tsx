import React, { useState,useEffect } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, DatePicker, message } from 'antd';
import "../../assets/styles/product-create.scss"
import CollectionCreateForm from "../../components/ProductDetailUploadImg"
import _ from "lodash";
import { createProduct } from '../../api/product';
import feedBack from "../../utils/apiFeedback";
import {useNavigate} from "react-router-dom";
import { getCategoryListAPI } from '../../api/category';

type RequiredMark = boolean | 'optional';

const ProductDetailCreate: React.FC = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [file, setFile] = useState()
    const [imageUrl, setImageUrl] = useState<string>('');
    const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
    const [categoryList, setCategoryList] = useState<API.CategoryListDataItem[]>();
    const [content,setContent]=useState('')
    const [open, setOpen] = useState(false);
    
    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setOpen(false);
    };
    
    const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
        setRequiredMarkType(requiredMarkValue);
    };
    
    const handleEditorChange = (text: string) => {
        setContent(text)
    }

    const sendCategoryApi = async (key?: number) => {
        const data:any = await getCategoryListAPI()
        setCategoryList(data?.data?.item);
    }

    const getBase64 = (img: any, callback: any) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      };
    const beforeUpload = (file: any) => {
    //控制上传图片格式
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error({
            icon: 'fail',
            content: '您只能上传JPG/PNG 文件!',
        });
        return;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error({
            icon: 'fail',
            content: '图片大小必须小于2MB!',
        });
        return;
    }
    if (isJpgOrPng && isLt2M) {
        getBase64(file, (imageUrl: any) => {
        // setLoading(false);
        setImageUrl(imageUrl);
        });
        setFile(file);
    }
    return false;
    };

    useEffect(() => {
        sendCategoryApi();
    }, [])

    const onFinish = async (values:any)=>{
        let v = _.cloneDeep(values)
        createProduct({
            ...v,
            image:values?.image?.file,
        }).then(res=>{
            if (feedBack(res, "创建成功并提交审核", "创建失败")) {
                navigate("/home");
              }
        })
    }
    
    return (
        <div className="productDetailCreateBox">
            <div className="productDetailCreateContent">
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{ requiredMarkValue: requiredMark }}
                    onValuesChange={onRequiredTypeChange}
                    requiredMark={requiredMark}
                >
                    <Form.Item label="名字" required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="标题" required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="价格" required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="优惠的价格" required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="数量" required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        label="简述"
                        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            onClick={() => {
                                setOpen(true);
                            }}
                        >
                            提交
                        </Button>
                        
                        <CollectionCreateForm
                            open={open}
                            onCreate={onCreate}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />
                    </Form.Item>
    
                </Form>
            </div>
        </div>
    );
};

export default ProductDetailCreate;