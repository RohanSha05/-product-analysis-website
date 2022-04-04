import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2 className='text-5xl mt-10 text-amber-600 underline'>Our Consumers Review</h2>
            <div className='grid grid-cols-3'>
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;