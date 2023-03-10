import React from 'react';
import {useParams} from "react-router-dom";
import GoodsImgs from "../components/GoodsImgs";
import '../assets/goods.less'
import GoodsInfo from "../components/GoodsInfo";
import Header from "../components/Header";

function GoodsDetail(){
    const params = useParams()
    let {id}=params;

    return(
        <div className='goodsImgsContainer'>
            <Header />
            <div className='goodsImgsBox'>
                <GoodsImgs id={id}></GoodsImgs>
            </div>

            <div className='goodsInfoBox'>
                <GoodsInfo id={id}></GoodsInfo>
            </div>
        </div>
    )
}

export default GoodsDetail;
