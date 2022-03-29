import { Button, Grid } from "@mui/material";
import { DarkMode, LightMode } from '@mui/icons-material';

import { ThemeModeContext } from "../providers/ThemeModeContext";
import { useContext } from "react";
import { useTheme } from '@mui/material/styles';

const NavLinkGroup = () => {

    const theme = useTheme();
    const handleToggleTheme = useContext(ThemeModeContext);

    return(<>
        <Grid
            container
            item
            xs={12}
            md={4}
            justifyContent={'center'}
            alignContent={'center'}
        >
            <Grid item mx={2} fontSize={15} >HOME</Grid>
            <Grid item mx={2} fontSize={15} >ABOUT</Grid>
            <Grid item mx={2} fontSize={15} >SKILLS</Grid>
            <Grid item mx={2} fontSize={15} >PROJECT</Grid>
            <Grid item mx={2} fontSize={15} >CONTACT</Grid>
        </Grid>
        <Grid
            container
            item
            xs={12}
            md={4}
            justifyContent={'center'}
            alignContent={'center'}
        >
            <Button
                disableTouchRipple
                size={'small'}
                startIcon={theme.palette.mode === 'dark'? <LightMode/> : <DarkMode/>}
                onClick={handleToggleTheme.toggleThemeMode}
            >
                {theme.palette.mode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
        </Grid>
    </>)
}

export default NavLinkGroup;