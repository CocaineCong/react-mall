import React, { useEffect, useState } from 'react';
import '../../assets/styles/product-details-header.scss';
import { connect } from 'react-redux';
import { Button, Input, message, Radio } from 'antd';
import qs from 'qs';

const ProductDetailHeader: React.FC = () =>{
  const [giftIsShow, setGiftIsShow] = useState(false); // 是否隐藏显示赠品详情
  const [productNum, setProductNum] = useState(1); // 商品件数
//   const [goodsInfo, setGoodsInfo] = useState({}); // 基本商品信息
  const [services, setServices] = useState([{"text":"假一赔十！"}]); // 服务信息
//   const [brandInfo, setBrandInfo] = useState({}); // 商家信息
  const [goodsSkus, setGoodsSkus] = useState([]); // 商品sku
  const [productInfo, setProductInfo] = useState([]); // 商品组合信息
  const [goodsPid, setGoodsPid] = useState(); /// 当前商品选中的规格 pid
  const [isBuy, setIsBuy] = useState(true); // 当前规格是否可以购买
  const [goodBuyLimit, setGoodBuyLimit] = useState(20); // 商品限购数量
  const goodsInfo={
    name:"这里是这个商品的标题",
    summary:"这是我们放的是这个商品的描述详情",
    marketPrice:5000,
    merchantName:"得物",
  }
  const brandInfo = {
    merchantName:"商家名称",
    merchantAddress:"这是商家地址",
  }
  useEffect(() => {
    
  }, []);

  // 赠品框显示或者隐藏
  const changeGiftIsShow = () => {
    setGiftIsShow(!giftIsShow);
    // console.log(giftIsShow);
  };
  // 商品数量添加或者减少
  const addOrReduce = (type?:any, value?:any) => {
    const newValue = formatNum(value ? value : '');
    // console.log(value, newValue);

    if (type === 'add') {
      // 增加
      if (productNum >= goodBuyLimit) {
      } else {
        setProductNum(productNum + 1);
      }
    } else if (type === 'reduce') {
      //减少
      if (productNum <= 1) {
      } else {
        setProductNum(productNum - 1);
      }
    } else if (type === 'none') {
      // console.log(newValue);
      // 输入框输入
      if (newValue >= goodBuyLimit) {
        // 商品限购数不能超过??
        // console.log(newValue);
        setProductNum(goodBuyLimit);
      } else {
        // 正常输入
        // console.log(newValue);
        setProductNum(newValue);
      }
    }
  };
  // 格式化输入框的数字
  const formatNum = (value:any) => {
    let newValue = value.replace(/^(0+)|[^\d]+/g, '');
    if (value === '0') {
      // 最小值不能小于1
      newValue = 1;
    } else if (newValue != '') {
      newValue = parseInt(newValue);
    }
    return newValue;
  };

  // 加入购物车
  const addCart = async () => {
    if (true) {
      // 当前为登陆状态
        console.log('登陆');
      //   console.log(goodsPid);
    //   if (goodsPid) {
    //     // 添加购物车情况
    //     const addCartStatus = await orderAddCart(
    //       goodsInfo.gid,
    //       goodsPid,
    //       productNum
    //     );
    //     // 获取购物车条数
    //     const cart_count = await getCartCount();
    //     // console.log(addCartStatus, cart_count);
    //     props.changeCartCount(cart_count.count);
    //     message.success(addCartStatus.message);
    //   } else {
    //     setIsBuy(false);
    //     message.error('该商品已售罄');
    //   }
    } else {
      // 未登陆状态
        console.log('未登陆');
    //   props.changeModalVisible(true);
    }
  };

  // 立即购买
  const buyNow = async () => {
    if (true) {
      // 当前为登陆状态
      //   console.log('登陆');
      //   console.log(goodsPid);
      if (goodsPid) {
        // 添加购物车 cart_type 设置为1 表示立即购买
        // const cart_type = 1;
        // const addCartStatus = await orderAddCart(
        //   goodsInfo.gid,
        //   goodsPid,
        //   productNum,
        //   cart_type
        // );
        // message.success(addCartStatus.message);
        // // 跳转确认页
        // props.history.push({
        //   pathname: '/tr/checkout',
        //   search: qs.stringify({ checkType: 1, sourceType: 1, cart_type: 1 }), // search:
        // });
      } else {
        setIsBuy(false);
        message.error('该商品已售罄');
      }
    } else {
      // 未登陆状态
      //   console.log('未登陆');
    //   props.changeModalVisible(true);
    }
  };

  return (
    <div className="detail-header">
      {/* <Thumb
        mainImg={goodsInfo?.img800 ? goodsInfo?.img800 : goodsInfo?.img800s}
        thumbs={goodsInfo?.img_md}
      /> */}
      {/* 商品活动 */}
      <div className="sku-container">
        <div className="name">
          <div className="good-name ">{goodsInfo.name}</div>
        </div>
        <div className="summary">{goodsInfo.summary}</div>
        <div className="promotion-box">
          <div className="promotion-wrap">
            <div className="pro-tit fl">
              <span>促销:</span>
              <div className="d-gift-info interactive">
                <div className="d-gift-container" onClick={changeGiftIsShow}>
                  <span className="d-gift-type">赠品</span>
                  <span className="d-gift-text">购买赠送2件商品</span>
                  <i
                    className={`iconfont ${
                      giftIsShow ? 'iconup1' : 'icondown'
                    }`}
                  ></i>
                </div>
                <div className={`gifts-popover ${giftIsShow ? 'show' : 'hide'}`}>
                  <div className="gifts-item">小米67W充电器套装 白色</div>
                  <div className="gifts-item">小米蓝牙耳机Air2 SE</div>
                </div>
              </div>
            </div>

            <div className="d-gift-info ">
              <div className="d-gift-container two">
                <span className="d-gift-type">购物返券</span>
                <span className="d-gift-text">
                  购物并确认收货返50元直减券/20元直减券/10元直减券/5元直减券;
                </span>
              </div>
              <div className="return-coupon-tips-container">
                <div className="return-coupon-tips-title">
                  <img
                    className="return-coupon-tips-img"
                    src="https://img.youpin.mi-img.com/editor1/5f0d5a18e31100de961d91b9b52e7010.png?w=36&amp;h=36"
                  />
                  <span className="return-coupon-tips-text">
                    返券活动名额有限，返完为止；一个订单内对单个活动仅进行一次返券；优惠券有领取上限，到达上限后将不再发券；具体券信息以实际到账为准；优惠券到账会有短信通知，请及时查收。
                  </span>
                </div>
              </div>
            </div>
            <div>
            <div
            className="promotion-wrap"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}
          >
            <span className="pro-tit fl" style={{ width: '45px' }}>
              更多:
            </span>
            <span
              className="pro-tit fl"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span className="staticWords">
                【至高享24期免息；加199元得499元无线充电套装；赠价值897元体检套餐】
              </span>
              <span className="staticWords hyperlinkWords">
                需加购物车才能勾选无线充&gt;&gt;
              </span>
            </span>
          </div>
            </div>
          </div>
        </div>

        {/* 商品价格部分 */}
        <div className="card">
          <div className="price-line">
            <h5 className="sku-title">售价</h5>
            <div className="price">
              <span className="money-symbol">¥</span>
              <span className="value">
                {Number(
                  goodsInfo.marketPrice ? goodsInfo?.marketPrice / 100 : 100
                )}
              </span>
              <span className="money-symbol">起</span>
            </div>
          </div>
          <div className="service-line">
            <h5 className="sku-title">服务</h5>
            <div className="introduce-container">
              <i className="iconfont iconzhuyi"></i>
              <div className="content ">
                <div
                  className="cardmodal-outer-container"
                  style={{ width: '500px', left: '-20px', top: '-20px' }}
                >
                  <div
                    className="inner-container"
                    style={{ width: '500px', left: '20px', top: '20px' }}
                  >
                    <div className="container" style={{ width: '494px' }}>
                      <div className="content-main">
                        <div className="text-item">
                          <p className="text-title">包邮</p>
                          <p className="text-content">本商品单件包邮</p>
                        </div>
                        <div className="text-item">
                          <p className="text-title">海外正品</p>
                          <p className="text-content">
                            有品海购商家承诺该商品为100%海外原装正品：所有商品均属海外生产或销售，有品提供正品保障承诺“假一赔十”。
                          </p>
                        </div>
                        <div className="text-item">
                          <p className="text-title">海购三方</p>
                          <p className="text-content">
                            本商品为有品海购精品，第三方供应商为实际销售方。小米有品精心挑选，严格把关，为您精选品质上乘的海外商品。
                          </p>
                        </div>
                        <div className="text-item">
                          <p className="text-title">
                            由
                            {brandInfo?.merchantName
                              ? brandInfo?.merchantName
                              : '小米'}
                            发货并不提供售后
                          </p>
                          <p className="service-item-qualification">
                            查看商家资质
                          </p>
                        </div>
                        <div className="text-item">
                          <p className="text-title">安心退</p>
                          <p className="text-content">
                            自收到商品之日起7天内，如有质量问题或破损缺发可申请售后进行退换货处理；
                          </p>
                          <p className="text-content">
                            自收到商品之日起超过7天，但商品仍在保质期内，如有质量问题可申请售后与商家协商处理。
                          </p>
                        </div>
                        <div className="text-item">
                          <p className="text-title">售后申明</p>
                          <p className="text-content">
                            跨境商品暂不支持开发票；
                          </p>
                          <p className="text-content">
                            在订单完成支付后2个小时内可取消、修改订单；
                          </p>
                          <p className="text-content">
                            因质量问题退换货，运费予以返还，多件产品只退部分产品时，运费按比例返还；
                          </p>
                          <p className="text-content">
                            跨境产品的快递包裹不支持无理由拒收，无理由拒收的跨境商品，其成交金额不予以返还；
                          </p>
                          <p className="text-content">
                            如商品在运输过程中出现损坏，可申请售后进行退换货处理。
                          </p>
                        </div>
                        <div className="text-item">
                          <p className="text-title">企业信息</p>
                          <p className="text-content">
                            企业名称：{' '}
                            {brandInfo?.merchantName
                              ? brandInfo.merchantName
                              : '小米'}
                          </p>
                          <p className="text-content">
                            企业执照注册号： 2727490
                          </p>
                          <p className="text-content">
                            企业地址：
                            {brandInfo?.merchantAddress
                              ? brandInfo.merchantAddress
                              : '广州市'}
                          </p>
                          <p className="text-content">营业期限： 长期</p>
                          <p className="text-content">
                            经营范围：
                            除法律禁止经营的产品和服务，均可正常销售和经营
                          </p>
                        </div>
                        <div className="text-item">
                          <p className="text-title"></p>
                          <p className="text-content">
                            应中国海关总署要求，用户购买跨境商品需要提供身份证信息进行入境申报用于产品清关。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="size">
                    <div className="content-main">
                      <div className="text-item">
                        <p className="text-title">包邮</p>
                        <p className="text-content">本商品单件包邮</p>
                      </div>
                      <div className="text-item">
                        <p className="text-title">海外正品</p>
                        <p className="text-content">
                          有品海购商家承诺该商品为100%海外原装正品：所有商品均属海外生产或销售，有品提供正品保障承诺“假一赔十”。
                        </p>
                      </div>
                      <div className="text-item">
                        <p className="text-title">海购三方</p>
                        <p className="text-content">
                          本商品为有品海购精品，第三方供应商为实际销售方。小米有品精心挑选，严格把关，为您精选品质上乘的海外商品。
                        </p>
                      </div>
                      <div className="text-item">
                        <p className="text-title">
                          由Ehaoyao International Trading发货并提供售后
                        </p>
                        <p className="service-item-qualification">
                          查看商家资质
                        </p>
                      </div>
                      <div className="text-item">
                        <p className="text-title">安心退</p>
                        <p className="text-content">
                          自收到商品之日起7天内，如有质量问题或破损缺发可申请售后进行退换货处理；
                        </p>
                        <p className="text-content">
                          自收到商品之日起超过7天，但商品仍在保质期内，如有质量问题可申请售后与商家协商处理。
                        </p>
                      </div>
                      <div className="text-item">
                        <p className="text-title">售后申明</p>
                        <p className="text-content">跨境商品暂不支持开发票；</p>
                        <p className="text-content">
                          在订单完成支付后2个小时内可取消、修改订单；
                        </p>
                        <p className="text-content">
                          因质量问题退换货，运费予以返还，多件产品只退部分产品时，运费按比例返还；
                        </p>
                        <p className="text-content">
                          跨境产品的快递包裹不支持无理由拒收，无理由拒收的跨境商品，其成交金额不予以返还；
                        </p>
                        <p className="text-content">
                          如商品在运输过程中出现损坏，可申请售后进行退换货处理。
                        </p>
                      </div>
                      <div className="text-item">
                        <p className="text-title">企业信息</p>
                        <p className="text-content">
                          企业名称： Ehaoyao International Trading
                        </p>
                        <p className="text-content">企业执照注册号： 2727490</p>
                        <p className="text-content">
                          企业地址： Room 804, 8/F, Far East Consortium
                          Building, 121 D
                        </p>
                        <p className="text-content">营业期限： 长期</p>
                        <p className="text-content">
                          经营范围：
                          除法律禁止经营的产品和服务，均可正常销售和经营
                        </p>
                      </div>
                      <div className="text-item">
                        <p className="text-title"></p>
                        <p className="text-content">
                          应中国海关总署要求，用户购买跨境商品需要提供身份证信息进行入境申报用于产品清关。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service">
              {services?.map((service, index) => {
                return (
                  <div className="service-item" key={index + service.text}>
                    <i className="iconfont icondui"></i>
                    <span className="service-item-text">{service.text}</span>
                  </div>
                );
              })}

              <div className="service-item">
                <i className="iconfont icondui"></i>
                <span className="service-item-text">
                  由{brandInfo?.merchantName ? brandInfo?.merchantName : '小米'}
                  发货并提供售后
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 商品地址 */}
        <div className="address-line">
          <h5 className="sku-title">配送区域</h5>
          <div className="address">
            <div>
              <span>北京 北京市 海淀区</span>
              <span>&nbsp;</span>
              <a>修改</a>
            </div>
          </div>
        </div>
        {/* 商品规格 */}
        <div>
          {/* <div style={{ overflow: 'hidden', padding: '0px 0px 12px' }}>
            {goodsSkus.map((sku, index) => {
              return (
                <div className="size-line clearfix" key={index}>
                  <h5 className="sku-title"> {sku[0].key_name} </h5>
                  <div className="size-container">
                  </div>
                </div>
              );
            })}
          </div> */}
          {/* 数量count */}
          <div className="count-line">
            <h5 className="sku-title count-title">数量</h5>
            <div className="count-container">
              <span
                className={productNum <= 1 ? 'minus-btn' : 'minus-btn-active'}
                onClick={() => {
                  addOrReduce('reduce');
                }}
              >
                <i className="iconfont iconminus"></i>
              </span>
              <Input
                type="type"
                className="count-input"
                defaultValue="1"
                value={productNum}
                onChange={(e) => {
                  addOrReduce('none', e.target.value);
                }}
              />
              <span
                className={
                  productNum >= goodBuyLimit ? 'minus-btn' : 'minus-btn-active'
                }
                onClick={() => {
                  addOrReduce('add');
                }}
              >
                <i className="iconfont iconadd"></i>
              </span>
            </div>
          </div>
          {/* 加入购物车 */}
          <div className="btn-line">
            <div className="buy-btn-container">
              <Button
                type="primary"
                className="m-btns m-btn-middle m-btn-brown"
                onClick={addCart}
                disabled={!isBuy}
              >
                {isBuy ? '加入购物车' : '该地区已售馨'}
              </Button>
              {isBuy ? (
                <Button
                  className="m-btns m-btn-middle m-btn-brown-stroke"
                  onClick={buyNow}
                >
                  立即购买
                </Button>
              ) : null}
            </div>
            {/* 收藏 */}
            <div className="favor-btn ">
              <Button className="m-btns m-btn-brown ">
                <i
                  className="iconfont iconshoucang"
                  style={{ marginTop: '5px' }}
                ></i>
                <p style={{ color: 'black' }}>收藏</p>
              </Button>
            </div>
            {/* 客服 */}
            <div className="faver-service-btn favor-btn ">
              <Button className="m-btns m-btn-brown">
                <i
                  className="iconfont iconlianxikefu"
                  style={{ marginTop: '5px' }}
                ></i>
                <p style={{ color: 'black' }}>客服</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailHeader;
