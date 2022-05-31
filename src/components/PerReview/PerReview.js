import React from 'react';

const PerReview = ({ review }) => {
    const { name, rating, comment } = review;
    return (
        <div className='p-4 m-3 bg-gray-100 rounded-md text-justify '>
            <div className='p-6'>
                <h5><span className='text-blue-500 '>Name:</span> {name} </h5>
                <h6 className="text-justify"><span className='text-blue-500 mr-2'>FeedBack:</span>{comment}</h6>
                <h6><span className='text-blue-500 mr-2'>Rating:</span> <span className='text-yellow-500 ml-3'>{rating} star</span></h6>
            </div>



        </div>
    );
};

export default PerReview;