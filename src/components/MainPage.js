import {useEffect, useState} from "react";
import MainNavBar from "./MainNavBar";
import {Typography} from "@mui/material";
import {Grid, Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ControlPanel from "./ControlPanel";
import DisplayPanel from "./DisplayPanel";

function countYears(start,end){ // не придумал, как нормально года задать, но и в ручную не стал писать
    let foo=[];
    for (let i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

function MainPage(props) {
    const classes = useStyles();
    const [selected_countries,setSelected] = useState([]);
    const [countries, setCounties] = useState(['USA', 'China', 'Russia','Australian Samoa','Canada',"Africa Eastern and Southern"])
    const years = countYears(1973,2020);
    const [selected_years, setYears] = useState([]);


    return (
        <>
            <MainNavBar/>
            <Typography variant='h2'>World bank</Typography>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper} sx={{maxHeight:'100%'}}>
                        <ControlPanel years={years} countries={countries} selected_countries={selected_countries} setSelected={setSelected} selected_years={selected_years} setYears={setYears}/>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper} sx={{maxHeight:'100%'}}>
                        <DisplayPanel selected_countries={selected_countries} countries={countries} selected_years={selected_years}/>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default MainPage;