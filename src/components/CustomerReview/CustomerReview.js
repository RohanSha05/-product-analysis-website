import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Reviews from '../Reviews/Reviews';

const CustomerReview = () => {
    const [reviews, setReviews] = useReviews();
    const slicedReviews = reviews.slice(0, 3)
    // console.log(slicedReviews)
    return (
        <div>
            <h1 className='text-2xl'>Customer Review({slicedReviews.length})</h1>
            <div className='grid grid-cols-3'>
                {
                    slicedReviews.map(slicedReview => <CustomerReviews key={slicedReview.id} slicedReview={slicedReview}></CustomerReviews>)
                }
            </div>
            <button className='bg-yellow-500 p-4 rounded-md px-5'><Link to="/reviews" element={<Reviews></Reviews>}>See All Reviews</Link></button>
        </div>
    );
};

export default CustomerReview;