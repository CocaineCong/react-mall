import {RouteObject} from 'react-router-dom'
import React,{lazy}  from "react";
import '../App.css';

const Login = lazy(()=>import("../pages/Login"))
const Register = lazy(()=>import("../pages/Register"))
const Home = lazy(()=>import("../pages/Home"))
const ProductList = lazy(()=>import("../pages/Product/ProductList"))
const ProductDetails = lazy(()=>import("../pages/Product/ProductDetail"))
const PersonCenter = lazy(()=>import("../pages/Person/PersonCenter"))
const PersonEmail = lazy(()=>import("../pages/Person/PersonEmail"))
const PersonInfo = lazy(()=>import("../pages/Person/PersonInfo"))
const ProductCreate = lazy(()=>import("../pages/Product/ProductCreate"))
const PublishSuccess = lazy(()=>import("../pages/PublishSuccess"))
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
            },
            {
                path:"/Product/Details/:id",
                element:withLoadingComponent(<ProductDetails />)
            },    
            
        ]
    },
    {
        path: "/PersonCenter",
        element: withLoadingComponent(<PersonCenter />),
        children:[
            {
                path:"/PersonCenter/PersonInfo",
                element: withLoadingComponent(<PersonInfo />),
            },
            {
                path: "/PersonCenter/PersonEmail",
                element: withLoadingComponent(<PersonEmail />)
            },
        ],
    },
    {path: "/ProductCreate", element: withLoadingComponent(<ProductCreate />),},
    {path: "/PublishSuccess", element: withLoadingComponent(<PublishSuccess />),},
    {path: "*", element: withLoadingComponent(<NoFoundPage />),},
]

export default router;