import { FormControl,
    FormControlLabel
} from "@material-ui/core";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button'
import { useState } from "react";
import TableData from "./TableData";
import Plot from "./Plot";
import Histogram from "./Histogram";
import Circle from "./Circle";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import {Typography} from "@mui/material";


function DisplayPanel(props) {
    const { selected_years, selected_countries} = props
    const [current_widget, setCurrentWidget] = useState('empty');

    const [data,setData] = useState([]);

    const filteredData = data.filter((item) => selected_years.includes(item.date));
    function handleChangeCurrentWidget(event) {
        setCurrentWidget(event.target.value);
    }

    function showCurrentWidget() {
        if(props.isLoading){
            return(
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
                );
        }else{
            switch (current_widget) {
                case ('plot'):
                    return <Plot data={filteredData} />
                case ('table'):
                    return <TableData data={filteredData} />
                case ('circle'):
                    return <Circle data={filteredData} />
                case ('histogram'):
                    return <Histogram data={filteredData} />
                default:
                    return <TableData data={filteredData} />
            }
        }
    }

    function requestForData(){
        props.showModal(false)

        let request = "http://localhost:8080/api/v1/";
        request += props.selected_series;
        request += "?country-code-alpha-3=";
        for(let country of props.selected_countries){
            request += country;
            request += ",";
        }
        request = request.substring(0,request.length -1);
        console.log(request);
        fetch(request)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
                props.setLoading(false); // Отключение лоадера
            })
            .catch(err => console.error(err));
        console.log(data);
    }

    function showButtonForRequest(){
        if (props.is_showed_modal){
            return (
                <Button variant="contained" onClick={requestForData} color='primary'>Draw charts</Button>
            )
        }else{
            return (
                <Button variant="contained" onClick={requestForData} disabled>Draw charts</Button>
            )
        }
    }

    function createAppBar() {
        return (
            <>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={handleChangeCurrentWidget}
                    >
                        <FormControlLabel value="plot" control={<Radio />} label="Plot" />
                        <FormControlLabel value="table" control={<Radio />} label="TableData" />
                        <FormControlLabel value="circle" control={<Radio />} label="Circle" />
                        <FormControlLabel value="histogram" control={<Radio />} label="Histogram" />
                        {showButtonForRequest()}
                    </RadioGroup>
                </FormControl>
            </>
        );
    }

    return (
        <>
            {createAppBar()}
            {showCurrentWidget()}
        </>
    );
}

export default DisplayPanel;