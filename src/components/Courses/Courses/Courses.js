import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course/Course';
import LeftSideNav from '../../LeftSideNav/LeftSideNav/LeftSideNav';



const Courses = () => {
     const coursedata=useLoaderData();
    return (
        <div className='flex justify-content-center m-6'>
        <div >
        <LeftSideNav></LeftSideNav>
        </div>
        <div className='grid grid-cols-3'>
{
    coursedata.map(course=><Course
    key={course.id}
    course={course}
    ></Course>)
}
        </div>
        </div>
    );
};

export default Courses;