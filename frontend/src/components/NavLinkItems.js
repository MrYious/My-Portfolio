import { Grid } from "@mui/material";
import {Link} from "react-scroll"

const NavLinkItems = ({small, navData}) => {


    const size = small ? 30 : 15;
    const margin = small ? 1 : 0;

    return(<>
        {navData.map( (link) => {
        return <Grid item my={margin} key={link.id} fontSize={size} fontWeight={300}>
                <Link
                    activeClass="active"
                    to={link.to}
                    spy={true} smooth={true}
                    style={{paddingLeft: 12, paddingRight: 12, cursor:"pointer"}}
                >
                    {link.name}
                </Link>
            </Grid>
        })}
    </>)
}

export default NavLinkItems;