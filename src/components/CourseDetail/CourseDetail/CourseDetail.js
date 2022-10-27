import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const coursedetaildata=useLoaderData();
    console.log(coursedetaildata)
    return (
        <div className='w-72 bg-blue-100 m-4 text-center p-2 rounded-md mx-auto'>
       <h4 >{coursedetaildata.title}</h4>
      <p ><img src={coursedetaildata.image} alt=""/></p>
       <p>{coursedetaildata.description}</p>
        </div>
    );
};

export default CourseDetail;