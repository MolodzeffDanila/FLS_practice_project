import React, { useRef } from 'react';
import { Typography } from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';
import Button from "@mui/material/Button";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
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

function Circle(props) {
    const { data } = props
    //console.log(data)
    const chartPieRef = useRef(null);
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

    const handlePieExport = () => {
        const link = document.createElement('a');//псевдомассив, содержащий все ссылки, имеющиеся в документе
        link.download = "chartPie.png"; //имя загружаемого файла
        link.href = chartPieRef.current.toBase64Image('png', 1);
        link.click();//функция щелчка
        link.remove();
    }
    return (
        <>
            <Typography variant='h2'>Circle</Typography>
            <div className='chart-container'>
                <div className='chart'>
                    <Pie options={options} data={dataChart} ref={chartPieRef} />
                    <Button variant="contained" color='primary' onClick={handlePieExport}>Сохранить в формате png</Button>
                </div>
            </div>
        </>
    );
}

export default Circle;