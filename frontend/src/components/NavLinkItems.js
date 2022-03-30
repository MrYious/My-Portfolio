import { Grid } from "@mui/material";

const NavLinkItems = ({small}) => {

    const size = small ? 30 : 15;
    const margin = small ? 1 : 0;

    return(<>
        <Grid item px={2} my={margin} fontSize={size} fontWeight={300}> HOME    </Grid>
        <Grid item px={2} my={margin} fontSize={size} fontWeight={300}> ABOUT   </Grid>
        <Grid item px={2} my={margin} fontSize={size} fontWeight={300}> SKILLS  </Grid>
        <Grid item px={2} my={margin} fontSize={size} fontWeight={300}> PROJECT </Grid>
        <Grid item px={2} my={margin} fontSize={size} fontWeight={300}> CONTACT </Grid>
    </>)
}

export default NavLinkItems;