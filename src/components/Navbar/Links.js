import React from 'react';
import { Link } from 'react-router-dom';

const Links = (props) => {
    const { link, name } = props.link;
    return (
        <div>
            <li className=" mr-16 text-xl  "><Link to={link}>{name}</Link></li>
        </div>
    );
};

export default Links;