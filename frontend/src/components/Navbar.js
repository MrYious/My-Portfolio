import { Grid, Typography } from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavLinkGroup from "./NavLinkGroup";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

const Navbar = ( { small} ) => {

    return(<>
        <Grid
            container
            item
            alignContent="center"
            py={1}
        >
            <Grid
                item
                xs={8}
                md={4}
                textAlign={small ? 'start' : 'center'}
                px={5}
            >
                <Typography noWrap variant="h4" >
                    <FontAwesomeIcon icon={faUserSecret} size={"xs"}/>
                    <span> MR</span>
                </Typography>
            </Grid>
            <NavLinkGroup small={small} />
        </Grid>
    </>)
}

export default Navbar;