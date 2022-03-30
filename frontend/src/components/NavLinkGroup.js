import { Button, Grid, IconButton } from "@mui/material";
import { DarkMode, LightMode } from '@mui/icons-material';
import { useContext, useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import { ThemeModeContext } from "../providers/ThemeModeContext";
import { useTheme } from '@mui/material/styles';

const NavLinkGroup = ({ small }) => {

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const handleToggleTheme = useContext(ThemeModeContext);

    const handleOpenMenu = () => {
        setOpen(!open);
    }

    const List = () => {
        return(<>
            <Grid item mx={2} fontSize={15} >HOME</Grid>
            <Grid item mx={2} fontSize={15} >ABOUT</Grid>
            <Grid item mx={2} fontSize={15} >SKILLS</Grid>
            <Grid item mx={2} fontSize={15} >PROJECT</Grid>
            <Grid item mx={2} fontSize={15} >CONTACT</Grid>
        </>)
    }

    const NavList = () => {
        return(<>
            <Grid
                container
                item
                xs={2}
                md={4}
                justifyContent={'center'}
                alignContent={'center'}
            >
                {small ? <MenuIcon fontSize="large" color="primary" onClick={handleOpenMenu} /> : <List/>}
            </Grid>
        </>)
    }

    const ThemeMode = () => {
        return(<>
            <Grid
                container
                item
                xs={2}
                md={4}
                justifyContent={'center'}
                alignContent={'center'}
            >   {small ?
                    <IconButton onClick={handleToggleTheme.toggleThemeMode} size={'small'} >
                        {theme.palette.mode === 'dark'? <LightMode/> : <DarkMode/>}
                    </IconButton>
                :
                    <Button
                        disableTouchRipple
                        size={'small'}
                        startIcon={theme.palette.mode === 'dark'? <LightMode/> : <DarkMode/>}
                        onClick={handleToggleTheme.toggleThemeMode}
                    >
                        {theme.palette.mode === 'light' ? 'Dark' : 'Light'} Mode
                    </Button>
                }
            </Grid>
        </>)
    }

    return(<>
        {small ?
            <><ThemeMode /><NavList />
            {open &&
                <Grid container item xs={12} minHeight={"100vh"} direction={"column"} justifyContent={"center"} textAlign={"center"} bgcolor={"background.paper"}>
                    <Grid item p={2} fontSize={15} >HOME</Grid>
                    <Grid item p={2} fontSize={15} >ABOUT</Grid>
                    <Grid item p={2} fontSize={15} >SKILLS</Grid>
                    <Grid item p={2} fontSize={15} >PROJECT</Grid>
                    <Grid item p={2} fontSize={15} >CONTACT</Grid>
                </Grid>}</>
        :
            <><NavList /><ThemeMode /></>
        }
    </>);
}

export default NavLinkGroup;