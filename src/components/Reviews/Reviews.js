import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>

            <h1>I am Review {reviews.length}</h1>
            {
                reviews.map(review => <Review review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;