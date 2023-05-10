// combineReducers 合并各个reducer
import { createStore,applyMiddleware,combineReducers} from "redux";
// @ts-ignore
import {configureStore} from "@reduxjs/toolkit"
// composeWithDevTools()  redux调试工具
import {composeWithDevTools} from 'redux-devtools-extension'
// thunk中间件  dispath()能够传入函数执行异步请求
import thunk from 'redux-thunk';
import userReducer from "./user";

// 创建store 传入合并后的reducer
const store = createStore(combineReducers({
  user:userReducer
}), composeWithDevTools(applyMiddleware(thunk)))


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
