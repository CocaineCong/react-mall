import React, {useEffect, useState} from "react";
import {Avatar, Card,message} from 'antd';
import {Link} from 'react-router-dom'
import '../../assets/styles/product.scss'
import {listProduct} from "../../api/product";
import {Code} from "../../constant";
import CarouselComp from "../../components/Carousel";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProductList: React.FC = () => {
    const [items, setItems] = useState<API.ProductListRespDataItem[]>([]);
    const [pageNum,setPageNum]=useState<number>(1);
    const [pageSize,setPageSize]=useState<number>(15);

    const getList = async ()=> {
        let data:any = await listProduct({
            page_num: pageNum,
            page_size: pageSize,
        })
        if (data.status === Code.SuccessCode){
            let items = data?.data?.item
            // 遍历 persons 数组
            items.forEach((item:any) => {
                item.info = item.info.slice(0, 13);
                item.info = item.info+"..."
            });
            setItems(items || []);
        } else {
            message.error(data?.data?.msg)
        }
    }

    useEffect(()=>{
        getList()
    },[])

    return(
        <div>
            {/* <CarouselComp /> */}
            <div className='productCardList'>
                {
                    items?.map((item)=>(
                        <Link className='productList' to={`/Product/Details/${item.id}`} target="_blank" key={item.id}>
                            <Card
                                bordered={true}
                                style={{ width: 220 }}
                                cover={
                                    <img style={{height:200,padding:7}} src={item.img_path}/>
                                }
                            >
                                <Meta
                                    title={"$"+item.price}
                                />
                                 <Meta
                                    avatar={<Avatar src={item.boss_avatar} />}
                                    title={item.title}
                                    description={item.info}
                                />
                                 
                                 
                            </Card>
                        </Link>
                    ))
                }
            </div>
        </div>
        
    )

};

export default ProductList;
