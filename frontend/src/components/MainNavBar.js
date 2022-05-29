import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@material-ui/icons/Menu';

function MainNavBar(props) {

    function createAppBar() {
        return (
            <Toolbar variant="dense">
                <Typography variant="h6" >
                    World bank by Zaychiki
                </Typography>
            </Toolbar>
        );
    }
    return (
        <>
            <AppBar position="static" color="primary">
                {createAppBar()}
            </AppBar>
        </>
    );
}

export default MainNavBar;