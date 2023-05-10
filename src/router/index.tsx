import {RouteObject} from 'react-router-dom'
import React,{lazy}  from "react";
import '../App.css';

const Login = lazy(()=>import("../pages/Login"))
const Register = lazy(()=>import("../pages/Register"))
const Home = lazy(()=>import("../pages/Home"))
const ProductList = lazy(()=>import("../pages/Product/ProductList"))
const NoFoundPage = lazy(()=>import("../pages/NotFound"))

const withLoadingComponent = (comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading</div>}>
        {comp}
    </React.Suspense>
)

const router: RouteObject[] = [
    {path: "/Login", element: withLoadingComponent(<Login />)},
    {path: "/Register", element: withLoadingComponent(<Register />)},
    {
        path:"/",
        element:withLoadingComponent(<Home />),
        children:[
            {
                path:"/Product/List",
                element:withLoadingComponent(<ProductList />)
            }
        ]
    },
    {path: "*", element: withLoadingComponent(<NoFoundPage />),},
]

export default router;