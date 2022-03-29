import { Button, Grid, Typography } from "@mui/material";

import avatar from "../assets/avatar.png"

const Home = ({ intro }) => {

    console.log()

    return(<>
        <Grid
            container
            item
            xs={12}
            py={10}
            justifyContent={"center"}
            sx={{
                backgroundColor: "",
            }}
        >
            {/* 1 */}
            <Grid
                container
                item
                xs={"auto"}
                justifyContent={"center"}
                direction={"column"}
                rowSpacing={3}
                sx={{
                    backgroundColor: "",
                    zIndex: 1,
                }}
            >
                <Grid container item direction={"column"}>
                    <Grid item >
                        <Typography variant="h4" >
                            Hi, my name is
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h1" >
                            {intro.name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" >
                            I'm an {intro.title}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item >
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
                xs={12}
                md={3}
                marginLeft={-10}
                sx={{
                    backgroundColor: "",
                    textAlign: "center",
                }}
            >
                <img src={avatar} alt="avatar" className="selector" width={"350"}/>
            </Grid>
        </Grid>
    </>)
}

export default Home;