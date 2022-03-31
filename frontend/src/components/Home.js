import { Button, Grid, Typography } from "@mui/material";

import Navbar from './Navbar';
import banner from "../assets/avatar.png"
import { useTheme } from '@mui/material/styles';

const Home = ({ intro, small, navData }) => {

    const theme = useTheme();

    return(<>
        <Grid
            container
            item
            justifyContent={"center"}
            id="Home"
            direction={"column"}
            py={small ? 10 : 12}
        >
            <Navbar small={small} navData={navData}/>
            <Grid container item justifyContent={"center"} alignContent="center">
                {/* 1 */}
                <Grid
                    container
                    item
                    xs={"auto"}
                    my={2}
                    justifyContent={"center"}
                    direction={"column"}
                    rowSpacing={3}
                    zIndex={1}
                >
                    <Grid container item direction={"column"} textAlign={small ? "center" : "left"} >
                        <Grid item >
                            <Typography variant={small ? "h5" : "h4"} >
                                Hi, my name is
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant={small ? "h2" : "h1"} >
                                {intro.name}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant={small ? "h5" : "h4"} >
                                I'm an {intro.title}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item textAlign={small ? "center" : "left"} >
                        <Button variant={theme.palette.mode === "light" ? "contained" : "outlined" }>
                            <Typography variant="h6" >
                                Download CV
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>

                {/* 2 */}
                <Grid
                    item
                    xs={12} md={3}
                    my={2}
                    marginLeft={small ? 0 : -10}
                    textAlign={"center"}
                >
                    <img src={banner} alt="avatar" className="selector" width={"350"} />
                </Grid>
            </Grid>
        </Grid>
    </>)
}

export default Home;