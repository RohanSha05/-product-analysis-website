import React from 'react';
import useReviews from '../../hooks/useReviews';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

const CustomerReview = () => {
    const [reviews, setReviews] = useReviews();
    const slicedReviews = reviews.slice(0, 3)
    // console.log(slicedReviews)
    return (
        <div>
            <h1 className='text-2xl'>Customer Review({slicedReviews.length})</h1>
            <div className='grid grid-cols-3'>
                {
                    slicedReviews.map(slicedReview => <CustomerReviews slicedReview={slicedReview}></CustomerReviews>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;