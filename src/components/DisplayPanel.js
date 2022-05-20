import { Typography } from "@mui/material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AppBar,
    Button,
    ButtonGroup, Checkbox,
    Container, FormControl,
    FormControlLabel, FormLabel, Radio, RadioGroup
} from "@material-ui/core";
import { useState } from "react";
import TableData from "./TableData";
import Plot from "./Plot";
import Histogram from "./Histogram";
import Circle from "./Circle";

function DisplayPanel(props) {
    const { selected_years, selected_countries, data } = props
    const [current_widget, setCurrentWidget] = useState('empty');

    const filteredData = data.filter((item) => selected_years.includes(item.date))
    function handleChangeCurrentWidget(event) {
        setCurrentWidget(event.target.value);
    }

    function showCurrentWidget() {
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
                    </RadioGroup>
                </FormControl>
            </>
        );
    }

    return (
        <>
            {createAppBar()}
            {selected_countries.map((item) => (
                <Typography key={item}>{item}</Typography>
            ))}
            <Typography variant='h5'>MainDisplay</Typography>
            {selected_years.map((item) => (
                <Typography key={item}>{item}</Typography>
            ))}
            {showCurrentWidget()}
        </>
    );
}

export default DisplayPanel;