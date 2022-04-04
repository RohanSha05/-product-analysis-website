import React from 'react';

const CustomerReviews = (props) => {
    const { name, review, rating, img, model } = props.slicedReview;
    console.log(props)
    return (
        <div>
            <div width={100} class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-12">
                <div>
                    <h2 className="text-gray-800 text-left text-2xl ">Consumer Name: <span className='font-semibold'>{name}</span></h2>
                    <img className='w-72 h-full py-2 pr-4 ml-8' src={img} alt="" />
                    <h4 className='font-bold'>Model: {model}</h4>
                    <p className="mt-2 text-left text-gray-600">"{review}"</p>
                    <p><small className='font-bold'>{rating}</small></p>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;