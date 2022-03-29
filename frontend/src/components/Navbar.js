import { Grid, Typography } from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavLinkGroup from "./NavLinkGroup";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

const Navbar = ( ) => {

    return(<>
        <Grid
            container
            item
            alignContent="center"
            sx={{
                backgroundColor: ''
            }}
        >
            <Grid
                item
                xs={12}
                md={4}
                sx={{
                    textAlign: 'center'
                }}
            >
                <Typography noWrap variant="h4" >
                    <FontAwesomeIcon icon={faUserSecret} size={"xs"}/>
                    <span> MR</span>
                </Typography>
            </Grid>
            <NavLinkGroup/>
        </Grid>
    </>)
}

export default Navbar;