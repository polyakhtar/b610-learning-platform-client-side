import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {title,image}=course;
    
    return (
        <div className='w-86 p-2 bg-blue-50 m-2 rounded-md'>
           <img src={image} alt=""/>
            <h4 ><Link to={`/coursedetaildata/${course.id}`}>{title}</Link></h4>
        </div>
    );
};

export default Course;