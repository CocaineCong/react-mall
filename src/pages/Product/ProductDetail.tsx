import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import '../../assets/styles/ProductDetails.scss'

const ProductDetails: React.FC = () => {
  const onFinish = (values:any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div></div>
  );
};

export default ProductDetails;