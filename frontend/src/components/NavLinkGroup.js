import { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import NavLinkItems from "./NavLinkItems";
import NavMenu from "./NavMenu";
import ThemeToggle from "./ThemeToggle";

const NavLinkGroup = ({ small, navData }) => {

    const [open, setOpen] = useState(false);

    useEffect(() => { setOpen(false)} ,[small])

    const handleOpenMenu = () => {
        setOpen(!open);
    }

    return(<>
        {small
        ?   //Small
            <>
                <ThemeToggle small={small}/>
                <NavMenu handleOpenMenu={handleOpenMenu} open={open}/>
                {open &&
                <Grid
                    container item
                    xs={12} minHeight={"100vh"}
                    direction={"column"}
                    justifyContent={"center"} textAlign={"center"}
                    rowSpacing="10"
                >
                    <NavLinkItems small={small} navData={navData} handleOpenMenu={handleOpenMenu}/>
                </Grid>}
            </>
        :   //Large
            <>
                <Grid container item xs={4} md={6} justifyContent={"center"} alignContent={"center"}  >
                    <NavLinkItems small={small} navData={navData} handleOpenMenu={handleOpenMenu}/>
                </Grid>
                <ThemeToggle small={small}/>
            </>
        }
    </>);
}

export default NavLinkGroup;