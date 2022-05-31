import React from 'react';
import useReview from '../hooks/useReview';
import PerReview from '../PerReview/PerReview';

const FirstThreeReview = () => {
    const [review, setReview] = useReview();
    const firstThreeItems = review.slice(0, 3);
    return (
        <div className='grid md:grid-cols-3'>
            {
                firstThreeItems.map(review => <PerReview review={review}></PerReview>)
            }
        </div>
    );
};

export default FirstThreeReview;