import React, { useEffect, useState } from 'react';
import { Card, Form, message, Input, Button, Tabs, Affix, Radio, Avatar, Spin } from 'antd';
import { ArrowLeftOutlined,LoadingOutlined } from '@ant-design/icons';
import '../../assets/styles/product-details.scss'
import { useLocation,useParams } from 'react-router-dom';
import { getProduct, getProductImg } from '../../api/product';
import { Code } from '../../constant';
import ProductDetailHeader from './ProductDetailHeader';
import ProductDetailsImgList from '../../components/ProductDetailImgList';

const { TabPane } = Tabs;

const ProductDetails: React.FC = () => {
  const {id} = useParams();
  const productId:string = id || ''
  const [productDetail,setProductDetail]=useState();
  const [goodsInfo,setGoodsInfo]=useState();
  const [imgList,setImgList]=useState<API.ProductImgListResp[]>();

  const getProductDetail = async ()=>{
    let data:any = await getProduct({id:id})
    console.log("data any",data)
    if (data.status === Code.SuccessCode){
      setProductDetail(data.data)
    } else {
      message.error(data.error)
    }
  }

  const commentChange = (e:any) => {
    // console.log(e.target.value);
  };

  const getImgList = async ()=>{
    let data:any = await getProductImg({id:id})
    if (data.status === Code.SuccessCode){
      setImgList(data?.data?.item)
    } else {
      message.error(data.error)
    }
  }

  const callback = (key:any) => {
    // console.log(key);
  };

  const renderTabBar = (props:any,DefaultTabBar:any) => {
    // console.log(props, DefaultTabBar);
    return (
      <Affix offsetTop={51}>
        <DefaultTabBar {...props} className="site-custom-tab-bar" />
      </Affix>
    );
  };

  useEffect(() => {
    getProductDetail();
    getImgList();
  }, [])

  return (
    <div className="detail">
      <div className="container">
          <div className="detail-wrapper">
            <div className="detail-imglist">
              {/* <ProductDetailsImgList productId={productId}/> */}
            </div>
            <ProductDetailHeader />
            <div className="detail-content">
              <div className="info">
                <Tabs
                  defaultActiveKey="1"
                  onChange={callback}
                  size="large"
                  renderTabBar={renderTabBar}
                >
                  <TabPane
                    tab="商品详细"
                    key="1"
                    style={{ borderRight: '1px solid #000' }}
                    forceRender={true}
                  >
                    <div className="main-body">
                      <div>
                        {imgList?.map((img, index) => {
                          return (
                            <img src={img.img_path} key={index} style={{ width: '100%' }} />
                          );
                        })}
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="评论" key="2">
                    <div className="main-body">
                      {/* 整个评论的盒子头部 */}
                      <div className="comment-top-container">
                        {/* 头部 */}
                        <h3 className="comment-top-positive-rate">96%满意</h3>
                        {/* 卡片切换筛选评论部分 */}
                        <div className="comment-top-tabs">
                          <div className="tabbar-container">
                            <Radio.Group onChange={commentChange} defaultValue="a">
                              <Radio.Button className="tabbar-item" value="comment-all">
                                全部(620)
                              </Radio.Button>
                              <Radio.Button
                                className="tabbar-item"
                                value="comment-imgs"
                              >
                                有图(84)
                              </Radio.Button>
                              <Radio.Button
                                className="tabbar-item"
                                value="comment-goodComment"
                              >
                                好评(5)
                              </Radio.Button>
                            </Radio.Group>
                          </div>
                        </div>
                      </div>
                      {/* 整个评论盒子的内容部分 */}
                      <div className="comment-items">
                        <div className="comment-item">
                          <div className="t-div">
                            {/* 头像 */}
                            <div className="myimg">
                              <Avatar
                                size={44}
                                src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/p01eOiQoJe7J/l3UcHCbM4kFlpf.jpg"
                              />
                            </div>
                            {/* 用户信息 */}
                            <div className="info">
                              <span className="name">山*</span>
                              <div className="attach">
                                <span>2021-04-04 13:55</span>
                              </div>
                            </div>
                          </div>
                          {/* 评论文字内容 */}
                          <div className="m-div">
                            小米11至尊非常的不错非常的好外观大气上档次,拍照第一,而且这次有ip68防水防尘功能，我一直用小米手机，支持小米手机，
                          </div>
                          {/* 评论图片 */}
                          <div className="img-div">
                          <div className="imggroup-container">
                              {/* <Image.PreviewGroup>
                                <Image
                                  width={70}
                                  height={70}
                                  src="https://img.youpin.mi-img.com/comment/f190a3810fb8f8a4c097e83113f856ba.jpg?w=3240&h=4320"
                                />
                                <Image
                                  width={70}
                                  height={70}
                                  src="https://img.youpin.mi-img.com/comment/23bb92a2ad9a2c05d9173314f99592a6.jpg?w=3240&h=4320"
                                />
                                <Image
                                  width={70}
                                  height={70}
                                  src="https://img.youpin.mi-img.com/comment/4e664f5c0ccc2a747f4cef52fa4fb029.jpg?w=960&h=720"
                                />
                              </Image.PreviewGroup> */}
                          </div>
                          {/* 底下border */}
                          <div className="b-div"></div>
                        </div>
                        {/* two */}
                        <div className="comment-item">
                          <div className="t-div">
                            {/* 头像 */}
                            <div className="myimg">
                              <Avatar
                                size={44}
                                src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/88ba33bf-df75-49b6-b9cd-db4922511f3e.jpg"
                              />
                            </div>
                            {/* 用户信息 */}
                            <div className="info">
                              <span className="name">L*u</span>
                              <div className="attach">
                                <span>2021-04-04 22:49</span>
                                <span className="margin">|</span>
                                <span>12GB+256GB、陶瓷白、标配</span>
                              </div>
                            </div>
                          </div>
                          {/* 评论文字内容 */}
                          <div className="m-div">
                            小米11至尊非常的不错非常的好外观大气上档次,拍照第一,而且这次有ip68防水防尘功能，我一直用小米手机，支持小米手机，
                          </div>
                          {/* 评论图片 */}
                          <div className="img-div">
                            <div className="imggroup-container">
                              {/* <Image.PreviewGroup>
                                <Image
                                  width={70}
                                  height={70}
                                  src="https://img.youpin.mi-img.com/comment/f190a3810fb8f8a4c097e83113f856ba.jpg?w=3240&h=4320"
                                />
                                <Image
                                  width={70}
                                  height={70}
                                  src="https://img.youpin.mi-img.com/comment/23bb92a2ad9a2c05d9173314f99592a6.jpg?w=3240&h=4320"
                                />
                                <Image
                                  width={70}
                                  height={70}
                                  src="https://img.youpin.mi-img.com/comment/4e664f5c0ccc2a747f4cef52fa4fb029.jpg?w=960&h=720"
                                />
                              </Image.PreviewGroup> */}
                            </div>
                          </div>
                          {/* 底下border */}
                          <div className="b-div"></div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </TabPane>
                  <TabPane tab="商品参数" key="3">
                    <div className="main-body">
                      <div>
                        {/* {goodsParams.map((img, index) => {
                          return (
                            <MyImg
                              key={index}
                              style={{ width: '100%' }}
                              src={img}
                              defaultImg={require('../../../assets/images/error/img_error.png')}
                            />
                          );
                        })} */}
                      </div>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
              <div className="best">
              <div className="flagship">
                <div className="icon-container">
                  {/* <img src={brandInfo?.brandLogo ? brandInfo.brandLogo : ''} /> */}
                  <img src={''} />
                  <div className="title-container">
                    <div className="title-content">
                      <h6 title={'小米'}>
                        {'小米'}
                      </h6>
                      {<span className="title-tag">自营</span>}
                    </div>
                    <p>{''}</p>
                  </div>
                  <div className="enter-btn">
                    <a className="m-btns m-btn-xs m-btn-brown" href="#">
                      <Button type="primary">进入</Button>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="recommend-title">
                  <span className="special-line"></span>
                  相关推荐
                  <span className="special-line"></span>
                </h2>
                <div>待补充</div>
              </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
};

export default ProductDetails;