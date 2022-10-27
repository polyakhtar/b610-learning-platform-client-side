import React from 'react';
import { Link} from 'react-router-dom';

const Title = ({link}) => {
    const {title}=link;
    
    return (
        <div>
            <h4><Link to={`/coursedetaildata/${link.id}`}> {title}</Link></h4>
        </div>
    );
};

export default Title;