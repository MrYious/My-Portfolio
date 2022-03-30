import { Grid, Typography } from "@mui/material";
import { useRef, useState } from "react";

import { Icon } from '@iconify/react';
import NavLinkGroup from "./NavLinkGroup";

const Navbar = ( { small} ) => {

    const navRef = useRef();
    const [scrolled, setScrolled ] = useState(false);

    const handleScroll = () => {
        if (navRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = navRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
              console.log("reached bottom");
            }
        }
    }

    return(<>
        <Grid
            container
            item
            alignContent="center"
            bgcolor="black"
            py={1}
            ref={navRef}
            onScroll={handleScroll}
        >
            <Grid
                item
                xs={8}
                md={4}
                alignContent={"center"}
                textAlign={small ? 'start' : 'center'}
                px={5}
            >
                <Icon icon={"ph:detective-fill"} inline="true"  width={"29"}  height={"29"}/>
                <Typography noWrap variant="h4" component={"span"} >
                    <span> MR</span>
                </Typography>
            </Grid>
            <NavLinkGroup small={small} />
        </Grid>
    </>)
}

export default Navbar;