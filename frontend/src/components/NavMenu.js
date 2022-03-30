import CloseIcon from '@mui/icons-material/Close';
import { Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const NavMenu = ({ small, handleOpenMenu, open }) => {

    return(<Grid
        container
        item
        xs={2} md={4}
        justifyContent={'center'}
        alignContent={'center'}
    >
        {open ?
            <CloseIcon fontSize="large" color="primary" onClick={handleOpenMenu}/>
            :
            <MenuIcon fontSize="large" color="primary" onClick={handleOpenMenu} />
        }
    </Grid>)
}

export default NavMenu;