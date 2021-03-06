import React, {useEffect, useRef, useState} from 'react';
import { Typography } from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import Button from "@mui/material/Button";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'World Development Indicators',
        },
    },
};

function Histogram(props) {
    const { data } = props;
    const chartBarRef = useRef(null);
    const [chartData, setChartData] = useState({labels:[],datasets:[]});
    const colors = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 245, 1)',
        'rgba(255, 159, 64, 1)',
    ];

    useEffect(()=>{
        let labels_ = data[0]?.years?.map((item) => item.year);
        let datasets_ = [];
        let currentColor = 0;
        for(let country of data){
            let data = [];
            for(let year of country.years){
                if (year.value === null){
                    data.push(0);
                }else{
                    data.push(year.value);
                }
            }
            datasets_.push({
                data: data,
                label: country.country_name,
                backgroundColor: colors[currentColor],
            })
            currentColor = (currentColor+1)%6;
        }
        setChartData({
            labels:labels_,
            datasets: datasets_
        })
    }, [data])

    const labels = data?.map((item) => item.value)
    const dataChart = {
        labels,
        datasets: [
            {
                label: 'Value',//ярлык
                data: data?.map((item) => item.value),//набор данных
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
            },
        ],
    };

    const handleBarExport = () => {
        const link = document.createElement('a');
        link.download = "chartBar.png";
        link.href = chartBarRef.current.toBase64Image('png', 1);
        link.click();
        link.remove();
    }
    return (
        <>
            <Typography variant='h3'>Histogram</Typography>
            <div className='chart-container'>
                <div className='chart'>
                    <Bar options={options} data={chartData} ref={chartBarRef} />
                    <Button variant="contained" color='primary' onClick={handleBarExport}>Сохранить в формате png</Button>
                </div>
            </div>
        </>
    );
}

export default Histogram;