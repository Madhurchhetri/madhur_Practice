import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layout/mainLayout'
import Home from '../pages/Home'
import Public from './protected/Public'
import Protected from './protected/Protected'

const AppRoutes = () => {
    useEffect(()=>{
        (()=>{})()
    },[])
    let router = createBrowserRouter([
        {
            path:"/",
            element:<Public/>,
            children:[
                {   path:"",
                    element : <AuthLayout/>,
                    children:[
                        {
                            path:"",
                            element: <Login/>
                        },
                        {
                            path:"register",
                            element:<Register/>,
                        }
                    ]
                }
            ]
        },
        {
            path:"/home",
            element:<Protected/>,
            children:[
                {
                    path:"",
                    element:<MainLayout/>,
                    children:[
                        {
                            path:"",
                            element:<Home/>
                        }
                    ]
                }
            ]
            
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes