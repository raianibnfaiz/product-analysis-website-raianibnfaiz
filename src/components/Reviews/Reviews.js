import { Button } from 'bootstrap';
import React, { useState } from 'react';
import useReview from '../hooks/useReview';
import PerReview from '../PerReview/PerReview';

const Reviews = () => {
    const [review, setReview] = useReview();
    console.log(review);

    return (
        <div className='container'>

            <div className='grid md:grid-cols-3'>
                {
                    review.map(review => <PerReview key={review.id} review={review}></PerReview>)
                }

            </div>


        </div>
    );
};

export default Reviews;