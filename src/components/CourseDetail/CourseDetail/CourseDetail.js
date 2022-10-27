import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailData from '../../DetailData/DetailData/DetailData';

const CourseDetail = () => {
    const courseDetailData=useLoaderData();
    
    return (
        <div>
         {
            courseDetailData.map(detaildata=><DetailData
                                 key={detaildata.id}
                                 detaildata={detaildata}
                                 ></DetailData>)
         }   
        </div>
    );
};

export default CourseDetail;