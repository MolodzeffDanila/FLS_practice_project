import { FormControl,
    FormControlLabel
} from "@material-ui/core";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button'
import {useEffect, useState} from "react";
import TableData from "./TableData";
import Plot from "./Plot";
import Histogram from "./Histogram";
import Circle from "./Circle";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

function DisplayPanel(props) {
    const { selected_years, selected_countries} = props
    const [current_widget, setCurrentWidget] = useState('empty');

    const [data,setData] = useState([]);

    const [filteredData, setFilteredData] = useState([]);
    function handleChangeCurrentWidget(event) {
        setCurrentWidget(event.target.value);
    }

    function showCurrentWidget() {
        if(props.isLoading){
            return(
                <Box sx={{ display: 'flex',marginLeft: '45%',marginTop: '10%',marginBottom: '10%' }}>
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
        for(let country of selected_countries){
            request += country;
            request += ",";
        }
        request = request.substring(0,request.length -1);
        fetch(request)
            .then(response => response.json())
            .then(content => {
                setData(content);
                props.setLoading(false); // Отключение лоадера
            })
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        if(data.length>0){
            filterData();
        }
    }, [data])

    function filterData(){
        let tmp_data=[];
        for(let country of data){
            let tmp_years = [];
            for(let year_ of selected_years){
                let field_years = year_.slice(-4);
                if(country[year_] === null){
                    tmp_years.push({year: field_years, value:0})
                }else{
                    tmp_years.push({year: field_years, value:country[year_]})
                }
            }
            tmp_data.push({country_name:country.country_name,years:tmp_years});
        }
        setFilteredData(tmp_data);
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