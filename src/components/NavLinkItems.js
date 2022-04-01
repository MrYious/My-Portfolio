import { Grid } from "@mui/material";
import {Link} from "react-scroll"
import { useTheme } from "@mui/system";

const NavLinkItems = ({small, navData, handleOpenMenu}) => {

    const theme = useTheme();
    const size = small ? 30 : 15;
    const margin = small ? 1 : 0;

    return(<>
        {navData.map( (link, i) => {
            return <Grid item my={margin} key={i} fontSize={size} fontWeight={300}>
                <Link
                    activeClass={theme.palette.mode === "light" ? "activeL" : "activeD"}
                    to={link.to}
                    spy={true} smooth={true}
                    style={{paddingLeft: 12, paddingRight: 12, cursor:"pointer"}}
                    onClick={handleOpenMenu}
                >
                    {link.name}
                </Link>
            </Grid>
        })}
    </>)
}

export default NavLinkItems;