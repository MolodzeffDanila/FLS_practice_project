import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
//import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
//import './App.css';

function TableData(props) {
    const { data } = props
    const [selected, setSelected] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    useEffect(() => {
        const newSelectedData = []
        selected.forEach((year) => newSelectedData.push(data.find((item) => item.date === year)))
        setSelectedData(newSelectedData)
    }, [selected, data])

    return (
        <>
            <Typography variant='h2'>Table</Typography>
            <div>
                <table>
                    <caption>Africa and Economics</caption>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Country</th>
                            <th>Year</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item) => ( //создание строк в таблице
                            <tr key={item.date}>
                                <td></td>
                                <td>{item.country.value}</td>
                                <td>{item.date}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableData;