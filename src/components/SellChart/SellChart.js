import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const SellChart = () => {

    const [data, setData] = useState()
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    console.log(data)

    return (

        <LineChart width={300} height={300} data={data}>
            <Line type="monotone" dataKey='sell' stroke="#8884d8"></Line>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default SellChart;