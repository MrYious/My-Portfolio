import { Grid } from "@mui/material";
import {Link} from "react-scroll"

const NavLinkItems = ({small}) => {

    const size = small ? 30 : 15;
    const margin = small ? 1 : 0;

    return(<>
        <Grid item px={2} my={margin} fontSize={size} fontWeight={300}>
            <Link activeClass="active" to="Home" spy={true} smooth={true} >
                HOME
            </Link>
        </Grid>
        <Grid item px={2} my={margin} fontSize={size} fontWeight={300}>
            <Link activeClass="active" to="About" spy={true} smooth={true} >
                ABOUT
            </Link>
        </Grid>
        <Grid item px={2} my={margin} fontSize={size} fontWeight={300}>
            <Link activeClass="active" to="Skill" spy={true} smooth={true} >
                SKILL
            </Link>
        </Grid>
        <Grid item px={2} my={margin} fontSize={size} fontWeight={300}>
            <Link activeClass="active" to="Project" spy={true} smooth={true} >
                PROJECT
            </Link>
        </Grid>
        <Grid item px={2} my={margin} fontSize={size} fontWeight={300}>
            <Link activeClass="active" to="Contact" spy={true} smooth={true} >
                CONTACT
            </Link>
        </Grid>
    </>)
}

export default NavLinkItems;