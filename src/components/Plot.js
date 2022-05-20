import React, { useRef } from 'react';
import { Typography } from "@mui/material";
//import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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

function Plot(props) {
    const { data } = props
    //console.log(data)
    const chartLineRef = useRef(null);
    const labels = data?.map((item) => item.date)
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

    const handleLineExport = () => {
        const link = document.createElement('a');//псевдомассив, содержащий все ссылки, имеющиеся в документе
        link.download = "chartLine.png"; //имя загружаемого файла
        link.href = chartLineRef.current.toBase64Image('png', 1);
        link.click();//функция щелчка
    }
    return (
        <>
            <Typography variant='h2'>Plot</Typography>
            <div className='chart-container'>
                <div className='chart'>
                    <Line options={options} data={dataChart} ref={chartLineRef} /><button onClick={handleLineExport}>Сохранить в формете png</button>
                </div>
            </div>
        </>
    );
}

export default Plot;