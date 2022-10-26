import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/About/About/About';
import Blog from '../../components/Blog/Blog/Blog';
import Courses from '../../components/Courses/Courses/Courses';
import Home from '../../components/Home/Home/Home';
import Login from '../../components/Login/Login/Login';
import Register from '../../components/Register/Register/Register';
import Main from '../../layout/Main/Main';
export const router=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/courses',
                    element:<Courses></Courses>
                },
                {
                    path:'/about',
                    element:<About></About>
                },
                {
                    path:'/blog',
                    element:<Blog></Blog>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                }
            ]
        }
    ])

