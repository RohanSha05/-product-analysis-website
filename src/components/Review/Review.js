import React from 'react';


const Review = (props) => {
    console.log(props)
    return (
        < div >
            <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div class="flex justify-center md:justify-end -mt-16">
                </div>
                <div>
                    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools;{props.review.name}</h2>
                    <p class="mt-2 text-gray-600">Lorem ipsum</p>
                </div>
            </div>
        </div >
    );
};

export default Review;