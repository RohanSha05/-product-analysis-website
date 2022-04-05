import React from 'react';
import InvestmentBarChart from '../InvestmentBarChart/InvestmentBarChart';
import InvestmentChart from '../InvestmentChart/InvestmentChart';
import InvestmentPieChart from '../InvestmentPieChart/InvestmentPieChart';
import SellChart from '../SellChart/SellChart';

const Charts = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <h2 className='font-bold' width={200}>MONTH WISE SELL</h2>
                <SellChart></SellChart>
            </div>
            <div className='ml-12 font-bold'>
                <h2>INVESTMENT VS REVENUE</h2>
                <InvestmentChart></InvestmentChart>
            </div>
            <div className='mt-12 font-bold'>
                <h2>INVESTMENT VS REVENUE</h2>
                <InvestmentPieChart></InvestmentPieChart>
            </div>
            <div className='mt-12 font-bold'>
                <h2>INVESTMENT VS REVENUE</h2>
                <InvestmentBarChart></InvestmentBarChart>
            </div>
        </div>
    );
};

export default Charts;