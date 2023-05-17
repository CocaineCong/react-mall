import React from 'react';
import '../assets/styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left-logo">
          <img src="/public/assets/media/logo@2x.30cd8c00.png" alt="" />
        </div>
        <div className="right-info">
          <div>
            <p className="footer-item">
              <span>©xiaomiyoupin.com </span>
              <span>哈HH-KFCV50 哈TCP哈V50号-1 </span>
              <img
                src="/public/assets/media/record-icon.0c577066.png"
                alt="logo"
                style={{ width: '15px', height: '15px', verticalAlign: '-3px' }}
              />
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010502010244"
                target="_blank"
                rel="noopener noreferrer"
              >
                小生凡一KFCV50{' '}
              </a>
            </p>
            <p className="footer-item">
              <span>企业名称:KFCV50有限公司 </span>
              <a
                href="https://www.xiaomiyoupin.com/app/shop/content?id=qf58f1039488314e3"
                target="_blank"
                rel="noopener noreferrer"
              >
                关于我们{' '}
              </a>
              <a
                href="https://zhaoshang.xiaomiyoupin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                入驻有品{' '}
              </a>
              <a
                href="https://www.mi.com/intellectual?channel=xiaomiyoupin"
                target="_blank"
                rel="noopener noreferrer"
              >
                知识产权侵权投诉{' '}
              </a>
            </p>
            <p className="footer-item">
              <a
                href="https://www.xiaomiyoupin.com/app/shop/content?id=s2426f03987ef05b5"
                target="_blank"
                rel="noopener noreferrer"
              >
                FanOne404{' '}
              </a>
            </p>
            <p className="footer-item">
              <span>FanOne出品 </span>
            </p>
          </div>
          <div className="f-icons">
            <a href="https://www.xiaomiyoupin.com/app/shop/content?id=na056d0394b93a391">
              <img src="/public/assets/media/f-logo.76889756.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
