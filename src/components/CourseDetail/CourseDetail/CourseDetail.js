import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const CourseDetail = () => {
    const coursedetaildata=useLoaderData();
    console.log(coursedetaildata)
    return (
        <div ref={ref} className='w-72 bg-blue-100 m-4 text-center p-2 rounded-md mx-auto'>
       <h4 >{coursedetaildata.title}</h4>
      <p ><img src={coursedetaildata.image} alt=""/></p>
       <p>{coursedetaildata.description}</p>
      
       <div>
       <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      </div>
      </div>
      
      
        
    );
};

export default CourseDetail;