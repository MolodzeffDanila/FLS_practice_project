import React, {useEffect, useRef, useState} from 'react';
import { Typography, MenuItem,Select } from "@mui/material";
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
import TableCell from "@mui/material/TableCell";

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
    const { data } = props;

    const chartPieRef = useRef(null);

    const [chartData, setChartData] = useState({labels:[],datasets:[]})
    const [currentCountry, setCurrentCountry] = useState('');
    const [circleCurrentData, setCircleCurrentData] = useState({})

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
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
            })
        }
        setChartData({
            labels:labels_,
            datasets: datasets_
        })
        setCircleCurrentData({labels:labels_, datasets:datasets_[0]});
    }, [data])

    const handlePieExport = () => {
        const link = document.createElement('a');//псевдомассив, содержащий все ссылки, имеющиеся в документе
        link.download = "chartPie.png"; //имя загружаемого файла
        link.href = chartPieRef.current.toBase64Image('png', 1);
        link.click();//функция щелчка
        link.remove();
    }

    const handleChange = (event) => {
        setCurrentCountry(event.target.value);
        for(let item of chartData.datasets){
            if(event.target.value === item.label){
                setCircleCurrentData({labels:chartData.labels, datasets:item});
            }
        }
        console.log(chartData);
    };

    return (
        <>
            <Typography variant='h3'>Circle diagram</Typography>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentCountry}
                label="Country"
                onChange={handleChange}
            >
                {data.map((item) => (
                    <MenuItem value={item.country_name}>
                        {item.country_name}
                    </MenuItem>
                ))}
            </Select>
            <div className='chart-container'>
                <div className='chart'>
                    <Pie options={options} data={circleCurrentData} ref={chartPieRef} />
                    <Button variant="contained" color='primary' onClick={handlePieExport}>Сохранить в формате png</Button>
                </div>
            </div>
        </>
    );
}

export default Circle;