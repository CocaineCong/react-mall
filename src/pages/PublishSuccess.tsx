import { Button, Result } from 'antd';
import {Link} from "react-router-dom";
import React from "react";
import "../assets/styles/base.scss"

const PublishSuccess: React.FC = () => {
    return(
        <div className={"publishSuccessBox"}>
            <Result
                className="publishSuccess"
                status="success"
                title="恭喜！商品发布成功！"
                // subTitle="审核大约会有10-20分钟,请耐心等待..." TODO 之后加上审核
                extra={[
                    <Link to={'/Product/List'}>
                        <Button type="primary">
                            去主页康康吧～
                        </Button>
                    </Link>,
                    <Link to={'/PersonCenter'}>
                        <Button>去个人中心看看</Button>,
                    </Link>
                ]}
            />
        </div>
    )
}

export default PublishSuccess;