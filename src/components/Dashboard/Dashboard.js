import React from 'react';
import './Dashboard.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, BarChart, Bar } from 'recharts';
const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='container '>
            <div className='grid md:grid-cols-2 '>
                <div className='m-4'>
                    <h3 className='text-blue-500'>Investment vs Revenue</h3>
                    <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey={'month'}></XAxis>
                        <Tooltip></Tooltip>
                        <Legend />
                        <YAxis ></YAxis>
                    </LineChart>
                </div>
                <div className='m-4'>
                    <h3 className='text-blue-500'>Investment vs Revenue</h3>
                    <BarChart width={400} height={400} data={data}>
                        <Bar dataKey={'revenue'} fill='#8884d8'></Bar>
                        <XAxis dataKey={'month'}></XAxis>
                        <Tooltip></Tooltip>
                        <YAxis></YAxis>
                    </BarChart>
                </div>
            </div>



        </div>
    );
};

export default Dashboard;