import React from 'react';

const DetailData = ({detaildata}) => {
    const {title,description,image}=detaildata;
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

export default DetailData;