import React, {useEffect, useState} from 'react';

/**
 * 图片加载失败就显示默认图片
 * 使用hook方式
 * @param {*} src  图片路径
 * @param {*} style  图片样式
 * @param {*} defaultImg  默认显示的图片路径
 */
const MyImg = ({src, style, defaultImg}:any) => {
    const [imgSrc, handleImageErrored] = useState(src);
    useEffect(() => {
        if (!imgSrc) {
            handleImageErrored(defaultImg.default)
        } else {
            handleImageErrored(src)
        }
    }, [src])
    return (
        <img style={style}
             src={imgSrc}
             onError={() => handleImageErrored(defaultImg.default)}
        />
    );
}
export default MyImg;
