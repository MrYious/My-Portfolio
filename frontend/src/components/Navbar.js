import { Grid, Typography } from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavLinkGroup from "./NavLinkGroup";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

const Navbar = ( ) => {
    return(<>
        <Grid
            container
            item
            xs={12}
            alignContent="center"
            minHeight={60}
            sx={{
                backgroundColor: 'transparent',
            }}
        >
            <Grid
                item
                xs={12}
                md={4}
                sx={{
                    backgroundColor: 'transparent',
                    textAlign: 'center'
                }}
            >
                <Typography noWrap variant="h4" color={'white'}>
                    <FontAwesomeIcon icon={faUserSecret}/>
                    <span> MR</span>
                </Typography>
            </Grid>
            <NavLinkGroup/>
        </Grid>
    </>)
}

export default Navbar;