import {Cascader, message} from 'antd';
import React, {useEffect, useState} from "react";
import {getCategoryListAPI} from "../api/category";
import { Code } from '../constant';

const CascadeModel: React.FC = () => {
    const [option, setOption] = useState<string[]>();
    const [categoryList, setCategoryList] = useState<API.CategoryListDataItem[]>();

    const listCategory = async () => {
        const data:any = await getCategoryListAPI()
        if(data.status === Code.SuccessCode){
            setCategoryList(data?.data?.item)
        }else{
            message.error(data?.data?.msg)
        }
    }

    const onChoose = (value: string[]) => {
        setOption(value)
    };

    useEffect(()=>{
        listCategory().then()
    },[])

    return (
        <Cascader options={categoryList} placeholder="请选择分类" />
    )
}


export default CascadeModel;