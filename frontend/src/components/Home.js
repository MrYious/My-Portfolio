import { Button, Grid, Typography } from "@mui/material";

import avatar from "../assets/avatar.png"

const Home = ({ intro }) => {

    console.log()

    return(<>
        <Grid
            container
            item
            xs={12}
            my={11}
            justifyContent={"center"}
            sx={{
                backgroundColor: "",
            }}
        >
            {/* 1 */}
            <Grid
                container
                item
                p={8}
                xs={"auto"}
                alignContent={"center"}
                direction={"column"}
                rowSpacing={2}
                sx={{
                    backgroundColor: "",
                }}
                className="selector"
            >
                <Grid container item sx={12} direction={"column"}>
                    <Grid item sx={12} >
                        <Typography variant="h4" >
                            Hi, my name is
                        </Typography>
                    </Grid>
                    <Grid item sx={12}>
                        <Typography variant="h1" >
                            {intro.name}
                        </Typography>
                    </Grid>
                    <Grid item sx={12}>
                        <Typography variant="h4" >
                            I'm an {intro.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sx={12}>
                    <Button variant="outlined">
                        <Typography variant="h6" >
                            Download CV
                        </Typography>
                    </Button>
                </Grid>
            </Grid>

            {/* 2 */}
            <Grid
                item
                xs={3}
                marginLeft={-20}
                sx={{
                    backgroundColor: "",
                    textAlign: "center",
                    zIndex: -1,
                }}
            >
                <img src={avatar} alt="avatar" className="selector" width={"350"}/>
            </Grid>
        </Grid>
    </>)
}

export default Home;