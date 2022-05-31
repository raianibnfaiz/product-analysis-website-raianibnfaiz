import React from 'react';
import { Link } from 'react-router-dom';

const Links = (props) => {
    const { link, name } = props.link;
    return (
        <div className='text-black'>
            <li className="imp mr-16 text-xl hover:underline text-black"><Link to={link}>{name}</Link></li>
        </div>
    );
};

export default Links;