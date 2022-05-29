import { Typography, Radio, RadioGroup } from "@mui/material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControl,
    FormControlLabel,
    FormGroup
} from "@material-ui/core";
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Paper} from "@mui/material"
import {useEffect, useState} from "react";
import Box from '@mui/material/Box'

function ControlPanel(props) {

    function handleCheckboxClickCountries(event) {
        if (props.is_showed_modal === false){
            props.showModal(true);
        }
        if (event.target.checked) {
            props.setSelected(props.selected_countries.concat([event.target.id]));
        } else {
            props.setSelected((prev) => prev.filter((item) => item !== event.target.id));
        }
    }

    function handleSetCurrentParameter(event){
        if (props.is_showed_modal === false){
            props.showModal(true)
        }
        props.setSeries(event.target.value);
    }

    function handleCheckboxClickYears(event) {
        if (props.is_showed_modal === false){
            props.showModal(true)
        }
        if (event.target.checked) {
            props.setYears(props.selected_years.concat([event.target.id]));
        } else {
            props.setYears((prev) => prev.filter((item) => item !== event.target.id));
        }
    }

    const [searchValue,setSearchValue] = useState('');

    const filterCountries = props.countries.filter(country =>{
        console.log(country);
        //return country.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <>
            <Typography variant='h3'>Parameters:</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant='h5'>Countries</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <Paper sx={{width:"100%"}}>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Country"
                                inputProps={{ 'aria-label': 'Enter country name' }}
                                onChange={(event) => {
                                    setSearchValue(event.target.value);
                                }}
                            />
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        {props.countries.map((item) => (
                            <FormControlLabel key={item.code_alpha_3}
                                              control={<Checkbox id={item.code_alpha_3}
                                              onClick={handleCheckboxClickCountries} />} label={item.name}
                            />
                        ))}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant='h5'>Series</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={handleSetCurrentParameter}
                        >
                            <FormControlLabel value="gdp-constant-2015-us" control={<Radio />} label="GDP(constant 2015 US$)" />
                            <FormControlLabel value="gdp-constant-lcu" control={<Radio />} label="GDP(constant LCU)" />
                            <FormControlLabel value="gdp-current-lcu" control={<Radio />} label="GDP(current LCU)" />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant='h5'>Times</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                        {props.years.map((item, index) => (
                            <FormControlLabel key={item + '0'} control={<Checkbox id={item} onClick={handleCheckboxClickYears} />} label={item} />
                        ))}
                    </Box>

                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default ControlPanel;