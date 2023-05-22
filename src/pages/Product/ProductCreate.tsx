import React, { useState,useEffect } from 'react';
import { InfoCircleOutlined,PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload, message, Select } from 'antd';
import "../../assets/styles/product-create.scss"
import CollectionCreateForm from "../../components/ProductDetailUploadImg"
import _ from "lodash";
import { createProduct } from '../../api/product';
import feedBack from "../../utils/apiFeedback";
import {useNavigate} from "react-router-dom";
import { getCategoryListAPI } from '../../api/category';
import {
    Image,
  } from "antd-mobile";
import { Code } from '../../constant';
const {Option} = Select;

type RequiredMark = boolean | 'optional';

const ProductDetailCreate: React.FC = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [file, setFile] = useState()
    const [formData, setFormData] = useState<object>();
    const [imageUrl, setImageUrl] = useState<string>('');
    const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
    const [categoryList, setCategoryList] = useState<API.CategoryListDataItem[]>();
    const [content,setContent]=useState('')
    const [open, setOpen] = useState(false);
    
    const sendCategoryApi = async (key?: number) => {
        const data:any = await getCategoryListAPI()
        if(data.status === Code.SuccessCode){
            setCategoryList(data?.data?.item);
        }else{
            message.error(data?.data?.msg)
        }
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
                navigate("/PublishSuccess");
              }
        })
    }
    
    return (
        <div className="productDetailCreateBox">
            <div className="productDetailCreateContent">
                <Form
                    form={form}
                    layout="vertical"
                    requiredMark={requiredMark}
                    onValuesChange={(_, allValues) => {
                        setFormData({...allValues})
                      }}
                    initialValues={formData ? {
                    ...formData,
                    image: "image"
                    } : {
                    image: "image"
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item label="名字" name="name" required tooltip="This is a required field">
                        <Input placeholder="请输入商品名字" />
                    </Form.Item>
                    <Form.Item label="标题" name="title" required tooltip="This is a required field">
                        <Input placeholder="请输入商品标题" />
                    </Form.Item>
                    <Form.Item label="价格" name="price" required tooltip="This is a required field">
                        <Input placeholder="请输入商品价格" />
                    </Form.Item>
                    <Form.Item label="优惠的价格" name="discount_price" required tooltip="This is a required field">
                        <Input placeholder="请输入商品优惠后的价格" />
                    </Form.Item>
                    <Form.Item label="数量" name="num" required tooltip="This is a required field">
                        <Input placeholder="请输入商品数量" />
                    </Form.Item>
                    {/* TODO 有问题 */}
                    {/* <Form.Item label="分类" name="category" required tooltip="This is a required field">
                        <Select>
                            {categoryList?.map(value => <Option value={categoryList.category_name || ''}>{categoryList.category_name}</Option>)}
                        </Select>
                    </Form.Item> */}
                    <Form.Item
                        label="简述"
                        name="info"
                        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                    >
                        <Input placeholder="请输入商品详情" />
                    </Form.Item>   
                    <Form.Item name='image' rules={[{required: true, message: "请输入必填信息"}]} label='封面图' className="apply-upload">
                        <Upload
                            name="image"
                            listType="picture-card"
                            className="cover_img"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            // onChange={handleChange}
                            accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        >
                            {imageUrl ? <Image src={imageUrl} alt="img" className="cover_img" fit="cover"/> : <PlusOutlined/>}
                        </Upload>
                    </Form.Item>
                    <Form.Item name="submit">
                        <Button htmlType="submit" size='large'>创建</Button>
                    </Form.Item>    
                </Form>
            </div>
        </div>
    );
};

export default ProductDetailCreate;