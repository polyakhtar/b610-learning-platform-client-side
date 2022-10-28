import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/About/About/About';
import Blog from '../../components/Blog/Blog/Blog';
import CourseDetail from '../../components/CourseDetail/CourseDetail/CourseDetail';
import Courses from '../../components/Courses/Courses/Courses';
import ErrorPage from '../../components/Errorpage/ErrorPage/ErrorPage';
import Home from '../../components/Home/Home/Home';
import LeftSideNav from '../../components/LeftSideNav/LeftSideNav/LeftSideNav';
import Login from '../../components/Login/Login/Login';
import Register from '../../components/Register/Register/Register';
import Main from '../../layout/Main/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
export const router=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/courses',
                    element:<Courses></Courses>,
                    loader:()=>fetch('https://learning-computer-club-server.vercel.app/courses')
                },
                {
                    path:'/courses/:id',
                    element:<LeftSideNav></LeftSideNav>,
                    loader:({params})=>fetch(`https://learning-computer-club-server.vercel.app/courses/${params.id}`)

                },
                {
                   path:'/coursedetaildata/:id',
                   element:<PrivateRoute><CourseDetail></CourseDetail></PrivateRoute>,
                   loader:({params})=>fetch(`https://learning-computer-club-server.vercel.app/coursedetaildata/${params.id}`)
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

