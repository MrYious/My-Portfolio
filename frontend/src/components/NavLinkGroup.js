import { Button, Grid } from "@mui/material";

import { DarkMode } from '@mui/icons-material';

const NavLinkGroup = () => {

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
            sx={{
                backgroundColor: 'transparent',
            }}
        >
            <Button size={'small'} startIcon={<DarkMode/>}>Dark Mode</Button>
        </Grid>
    </>)
}

export default NavLinkGroup;