import React, { useRef } from 'react';
import { Typography } from "@mui/material";
//import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

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
    const { data } = props
    const chartBarRef = useRef(null);
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
            <Typography variant='h2'>Histogram</Typography>
            <div className='chart-container'>
                <div className='chart'>
                    <Bar options={options} data={dataChart} ref={chartBarRef} /><button onClick={handleBarExport}>Сохранить в формете png</button>
                </div>
            </div>
        </>
    );
}

export default Histogram;