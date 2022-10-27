import React from 'react';

const Course = ({course}) => {
    const {title,image}=course;
    
    return (
        <div className='w-64 p-2 bg-blue-50 m-2 rounded-md'>
           <img src={image} alt=""/>
            <h4>{title}</h4>
        </div>
    );
};

export default Course;