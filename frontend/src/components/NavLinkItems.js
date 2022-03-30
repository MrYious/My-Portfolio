import { Grid } from "@mui/material";

const NavLinkItems = () => {
    return(<>
        <Grid item mx={2} fontSize={15} >HOME</Grid>
        <Grid item mx={2} fontSize={15} >ABOUT</Grid>
        <Grid item mx={2} fontSize={15} >SKILLS</Grid>
        <Grid item mx={2} fontSize={15} >PROJECT</Grid>
        <Grid item mx={2} fontSize={15} >CONTACT</Grid>
    </>)
}

export default NavLinkItems;