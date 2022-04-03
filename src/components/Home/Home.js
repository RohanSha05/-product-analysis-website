import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Car from './car.png'

const Home = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-4'>
                <div className='col-span-2 pt-32 '>
                    <h1 className='text-6xl'>Need A Ride? <br /><span className='text-yellow-500	'>Choose Your Cars </span></h1>
                    <p className='pl-16 pt-6'>A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods. Cars came into global use during the 20th century, and developed economies depend on them.</p>
                </div>
                <img className='col-span-2' width={500} src={Car} alt="" />
            </div>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;