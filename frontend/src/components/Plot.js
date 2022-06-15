import React, {useEffect, useRef, useState} from 'react';
import { Typography } from "@mui/material";
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
import Button from "@mui/material/Button";

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
    const chartLineRef = useRef(null);
    const [chartData, setChartData] = useState({labels:[],datasets:[]})

    useEffect(()=>{
        let labels_ = data[0]?.years?.map((item) => item.year);
        let datasets_ = [];
        for(let country of data){
            let data_ = [];
            for(let year of country.years){
                if (year.value === null){
                    data_.push(0);
                }else{
                    data_.push(year.value);
                }
            }
            datasets_.push({
                data: data_,
                label: country.country_name,
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
            })
        }
        setChartData({
            labels:labels_,
            datasets: datasets_
        })
    }, [data])

    const handleLineExport = () => {
        const link = document.createElement('a');//псевдомассив, содержащий все ссылки, имеющиеся в документе
        link.download = "chartLine.png"; //имя загружаемого файла
        link.href = chartLineRef.current.toBase64Image('png', 1);
        link.click();//функция щелчка
        link.remove();
    }
    return (
        <>
            <Typography variant='h3'>Plot</Typography>
            <div className='chart-container'>
                <div className='chart'>
                    <Line options={options} data={chartData} ref={chartLineRef} />
                    <Button variant="contained" color='primary' onClick={handleLineExport}>Сохранить в формате png</Button>
                </div>
            </div>
        </>
    );
}

export default Plot;