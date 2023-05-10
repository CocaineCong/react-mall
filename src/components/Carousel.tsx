import React, {useEffect, useState} from 'react';
import { Carousel } from 'antd';
import {getCarouselListAPI} from "../api/carousel";

const contentStyle: React.CSSProperties = {
    height: '280px',
    color: '#fff',
    lineHeight: '280px',
    width:'1200px',
    textAlign: 'center',
    background: '#364d79',
    borderRadius: '20px',
};

const CarouselComp: React.FC = () => {
    // const [carouselList, setCarouselList] = useState([]);
    
    // const listCarousel = async () => {
    //     const {data} = await getCarouselListAPI()
    //     setCarouselList(data.items)
    // }
    
    // useEffect(()=>{
    //     listCarousel().then()
    // },[])
    
    return (
        <Carousel autoplay effect="fade">
            {/* {
                carouselList?.map((item)=>(
                    <div>
                        <img style={contentStyle} src={item.img_path} alt=""/>
                    </div>
                ))
            } */}
            <div>
               <h3 style={contentStyle}>2</h3>
            </div>
            <div>
               <h3 style={contentStyle}>3</h3>
            </div>
            <div>
               <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )
}

export default CarouselComp;