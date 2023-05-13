import { Modal } from 'antd';
import {Code} from "../constant";
import {Toast} from "antd-mobile";

const feedBack = (res: any, sucMsg: string, failMsg: string) => {
  if (res?.status === Code.SuccessCode) {
    Toast.show({
      content:sucMsg,
      icon:"success"
    });
    return true;
  } else {
    Toast.show({
      content:res?.msg + res?.data || failMsg,
      icon:"fail"
    });
    return false;
  }
};

export default feedBack;
