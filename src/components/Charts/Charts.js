import React from 'react';
import SellChart from '../SellChart/SellChart';

const Charts = () => {
    return (
        <div>
            <div className='w-96'>
                <h2>MONTH WISE SELL</h2>
                <SellChart></SellChart>
            </div>
        </div>
    );
};

export default Charts;