import React, { useEffect, useState } from 'react';
import "../assets/styles/product-detail-img-list.scss"
import { Carousel, message } from 'antd';
import { useParams } from 'react-router-dom';
import { getProductImg } from '../api/product';
import { Code } from '../constant';

const ProductDetailsImgList = (obj:any) => {
  const [imgList,setImgList]=useState<API.ProductImgListResp[]>();

  const getImgList = async ()=>{
    console.log("id",obj)
    let data:any = await getProductImg({id:obj.productId})
    if (data.status === Code.SuccessCode){
      setImgList(data?.data?.item)
    } else {
      message.error(data.error)
    }
  }

  useEffect(() => {
    getImgList();
  }, [])

  return (
    <div className="product-carousel">
      <Carousel autoplay>
        {imgList?.map((image, index) => (
          <div key={index}>
            <img className="carousel-image"  src={image.img_path} alt={`Product Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsImgList;
