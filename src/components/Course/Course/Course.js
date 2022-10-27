import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Course = ({course}) => {
    const {title,image}=course;
    
    return (
        <div className='w-86 p-2 bg-blue-50 m-2 rounded-md'>
           <img src={image} alt=""/>
            <h4 >{title}</h4>
            <Button variant="primary"><Link className='text-white text-decoration-none' to={`/coursedetaildata/${course.id}`}>Get Premium Access</Link></Button>
        </div>
    );
};

export default Course;