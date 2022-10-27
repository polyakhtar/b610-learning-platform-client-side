import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../../Title/Title/Title';

const LeftSideNav = () => {
    const navdata=useLoaderData();
    return (
        <div>
           {
            navdata.map(link=><Title
            key={link.id}
            link={link}
            ></Title>)
           } 
        </div>
    );
};

export default LeftSideNav;