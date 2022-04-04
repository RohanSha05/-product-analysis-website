import React from 'react';


const Review = (props) => {
    console.log(props)
    const { name, review, rating, img } = props.review;
    return (
        < div className=''>
            <div width={100} class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-12">
                <div>
                    <h2 className="text-gray-800 text-2xl font-semibold">{name}</h2>
                    <img className='w-72 h-full py-2 pr-4 ml-8' src={img} alt="" />
                    <p className="mt-2 text-gray-600">{review}</p>
                    <p><small>{rating}</small></p>
                </div>
            </div>
        </div >
    );
};

export default Review;