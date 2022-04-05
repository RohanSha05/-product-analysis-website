import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const SellChart = () => {

    const [data, setData] = useState()
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (

        <LineChart width={600} height={320} data={data}>
            <Line type="monotone" dataKey='sell' stroke="#8884d8" activeDot={{ r: 8 }}></Line>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Legend></Legend>
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default SellChart;