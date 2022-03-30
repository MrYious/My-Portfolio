import { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import NavLinkItems from "./NavLinkItems";
import NavMenu from "./NavMenu";
import ThemeToggle from "./ThemeToggle";

const NavLinkGroup = ({ small }) => {

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
                <NavMenu handleOpenMenu={handleOpenMenu} open={open} small={small}/>
                {open &&
                <Grid container item xs={12} minHeight={"100vh"} direction={"column"} justifyContent={"center"} textAlign={"center"} >
                    <NavLinkItems />
                </Grid>}
            </>
        :   //Large
            <>
                <NavLinkItems/>
                <ThemeToggle small={small}/>
            </>
        }
    </>);
}

export default NavLinkGroup;