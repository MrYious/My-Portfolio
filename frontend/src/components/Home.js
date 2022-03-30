import { Button, Grid, Typography, useMediaQuery } from "@mui/material";

import banner from "../assets/avatar.png"
import { useTheme } from '@mui/material/styles';

const Home = ({ intro }) => {

    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('md'));

    return(<>
        <Grid
            container
            item
            py={small ? 0 : 10}
            justifyContent={"center"}
        >
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
                xs={12}
                md={3}
                my={2}
                marginLeft={small ? 0 : -10}
                textAlign={"center"}
            >
                <img src={banner} alt="avatar" className="selector" width={"350"}/>
            </Grid>
        </Grid>
    </>)
}

export default Home;