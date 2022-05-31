import React from 'react';

const PerReview = ({ review }) => {
    const { name } = review;
    return (
        <div className='p-4 m-3 bg-slate-100  '>
            {name}



        </div>
    );
};

export default PerReview;