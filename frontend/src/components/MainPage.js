import { useEffect, useState } from "react";
import MainNavBar from "./MainNavBar";
import {Container, Typography} from "@mui/material";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ControlPanel from "./ControlPanel";
import DisplayPanel from "./DisplayPanel";

function countYears(start, end) {
    let foo = [];
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
    const [selected_countries, setSelected] = useState([]);
    const [countries, setCountries] = useState(['USA', 'China', 'Russia', 'Australian Samoa', 'Canada', "Africa Eastern and Southern"])
    const [years, setYears] = useState([]);
    const [selected_years, setSelectedYears] = useState([]);
    const [data, setData] = useState([]);
    const [is_showed_modal, showModal] = useState(false);
    const [selected_series, setSeries] = useState([]);
    const series = ["GDP(constant 2015 US$)",
        "GDP(constant LCU)",
        "GDP(current LCU)"
    ]
    const [isLoading,setLoading] = useState(true);

    useEffect(() => {
        /*fetch('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json')//гетзапрос по данным url
            .then(response => response.json())
            .then(data => {
                const result = data[1].sort((a, b) => Number(a.date) - Number(b.date));
                setData(result);
                setYears(countYears(1960,2021));
                setLoading(false); // Отключение лоадера
            })

            .catch(err => console.error(err));*/

        fetch('http://localhost:8080/api/v1/country')
            .then(response => response.json())
            .then(data => {
                setCountries(data);
                console.log(data);
                setLoading(false); // Отключение лоадера
            })

            .catch(err => console.error(err));

    }, [])

    return (
        <>
            <MainNavBar />

            <Container maxWidth="false" >
                <Typography variant='h2'>World bank</Typography>
                <Grid  container spacing={3}>
                    <Grid item xs={12} lg={4}>
                        <Paper className={classes.paper} sx={{ maxHeight: '100%' }}>
                            <ControlPanel years={years}
                                          countries={countries}
                                          selected_countries={selected_countries}
                                          setSelected={setSelected}
                                          selected_years={selected_years}
                                          setYears={setSelectedYears}
                                          is_showed_modal={is_showed_modal}
                                          showModal={showModal}
                                          selected_series={selected_series}
                                          setSeries={setSeries}
                                          series={series}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Paper className={classes.paper} sx={{ maxHeight: '100%' }}>
                            <DisplayPanel data={data}
                                          selected_countries={selected_countries}
                                          countries={countries}
                                          selected_years={selected_years}
                                          is_showed_modal={is_showed_modal}
                                          showModal={showModal}
                                          selected_series={selected_series}
                                          isLoading={isLoading}
                                          setLoading={setLoading}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default MainPage;