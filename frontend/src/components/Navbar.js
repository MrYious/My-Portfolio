import { Grid, Typography } from "@mui/material";

import { Icon } from '@iconify/react';
import NavLinkGroup from "./NavLinkGroup";

const Navbar = ({ small }) => {

    return(<>
        <Grid
            container
            item
            justifyContent={"center"}
            alignContent="center"
            position="fixed"
            top={0}
            bgcolor="background.paper"
        >
            {/* 1 */}
            <Grid
                item
                xs={8} md={4}
                alignContent={"center"}
                textAlign={small ? 'start' : 'center'}
                px={5}
            >
                <Icon icon={"ph:detective-fill"} inline="true"  width={"29"}  height={"29"}/>
                <Typography noWrap variant="h4" component={"span"} >
                    <span> MR</span>
                </Typography>
            </Grid>
            {/* 2-3 */}
            <NavLinkGroup small={small} />
        </Grid>
    </>)
}

export default Navbar;