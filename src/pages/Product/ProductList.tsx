import React, {useEffect, useState} from "react";
import {Avatar, Card,message} from 'antd';
import {Link} from 'react-router-dom'
import '../../assets/styles/product.scss'
import {listProduct} from "../../api/product";
import {Code} from "../../constant";

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
            console.log("data",data)
            console.log("data.data",data.data)
            setItems(data?.data?.item || []);
        } else {
            message.error(data?.data?.msg)
        }
    }

    useEffect(()=>{
        getList()
    },[])

    return(
        <div>
            <CarouselComp />
            <div className='productCardList'>
                {
                    items?.map((item)=>(
                        <Link className='productList' to={`/product/${item.id}`} target="_blank" key={item.id}>
                            <Card hoverable
                                  cover={<img alt="example" style={{height:220,padding:5}} src={`${item.img_path}`} />} >
                        
                                <div className={'productListAvatarContainer'}>
                            
                                    <div className={'productListAvatarLeft'}>
                                        <Meta title={`${item.title}`} description={`${item.info}`} />
                                    </div>
                            
                                    <div className={'productListAvatarRight'}>
                                        <div className={'productListAvatarRightName'}>
                                            {item.boss_name}
                                        </div>
                                
                                        <div className={'productListAvatarRightAvatar'}>
                                            <Avatar src={<img src={item.boss_avatar} alt="avatar" />} />
                                        </div>
                                    </div>
                        
                                </div>
                            </Card>
                        </Link>
                    ))
                }
            </div>
        </div>
        
    )

};

export default ProductList;
