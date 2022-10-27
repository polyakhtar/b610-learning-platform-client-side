import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/About/About/About';
import Blog from '../../components/Blog/Blog/Blog';
import CourseDetail from '../../components/CourseDetail/CourseDetail/CourseDetail';
import Courses from '../../components/Courses/Courses/Courses';
import Home from '../../components/Home/Home/Home';
import LeftSideNav from '../../components/LeftSideNav/LeftSideNav/LeftSideNav';
import Login from '../../components/Login/Login/Login';
import Register from '../../components/Register/Register/Register';
import Title from '../../components/Title/Title/Title';
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
                    element:<Courses></Courses>,
                    loader:()=>fetch('http://localhost:2000/courses')
                },
                {
                    path:'/courses/:id',
                    element:<LeftSideNav></LeftSideNav>,
                    loader:({params})=>fetch(`http://localhost:2000/courses/${params.id}`)

                },
                {
                   path:'/coursedetaildata',
                   element:<CourseDetail></CourseDetail>,
                   loader:()=>fetch('http://localhost:2000/coursedetaildata')
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

