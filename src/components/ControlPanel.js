//import { useEffect } from "react";
//import MainNavBar from "./MainNavBar";
import { Typography } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import { blue } from "@material-ui/core/colors";

function ControlPanel(props) {

    function handleCheckboxClickCountries(event) {
        if (event.target.checked) {
            props.setSelected(props.selected_countries.concat([event.target.id]));
        } else {
            props.setSelected((prev) => prev.filter((item) => item !== event.target.id));
        }
    }

    function handleCheckboxClickYears(event) {
        if (event.target.checked) {
            props.setYears(props.selected_years.concat([event.target.id]));
        } else {
            props.setYears((prev) => prev.filter((item) => item !== event.target.id));
        }
    }

    return (
        <>
            <Typography variant='h3'>Parameters</Typography>
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
                        {props.countries.map((item) => (
                            <FormControlLabel key={item} control={<Checkbox id={item} onClick={handleCheckboxClickCountries} />} label={item} />
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
                    <Typography variant='h4'>COMING SOON...</Typography>
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
                    <FormGroup>
                        {props.years.map((item) => (
                            <FormControlLabel key={item + '0'} control={<Checkbox id={item} onClick={handleCheckboxClickYears} />} label={item} />
                        ))}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default ControlPanel;