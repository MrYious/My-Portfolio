import { Button, Grid, IconButton } from "@mui/material";
import { DarkMode, LightMode } from '@mui/icons-material';

import { ThemeModeContext } from "../providers/ThemeModeContext";
import { useContext } from "react";
import { useTheme } from '@mui/material/styles';

const ThemeToggle = ({ small }) => {

    const theme = useTheme();
    const handleToggleTheme = useContext(ThemeModeContext);

    return(<>
        <Grid
            container
            item
            xs={2}  md={4}
            justifyContent={'center'}
            alignContent={'center'}
        >
            {   small
            ?
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

export default ThemeToggle;