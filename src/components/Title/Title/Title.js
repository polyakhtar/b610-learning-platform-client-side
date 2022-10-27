import React from 'react';
const Title = ({link}) => {
    const {title}=link; 
    return (
        <div>
            <h4> {title}</h4>
        </div>
    );
};

export default Title;