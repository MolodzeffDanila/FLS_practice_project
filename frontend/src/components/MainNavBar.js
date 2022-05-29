import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@material-ui/icons/Menu';

function MainNavBar(props) {

    function createAppBar() {
        return (
            <Toolbar variant="dense">
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    Menu
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