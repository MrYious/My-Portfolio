import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import profile from "../assets/profile_placeholder.jpg"

const About = ({ about }) => {

    return <>
        <Grid container item py={5} direction={"column"} backgroundColor={"background.paper"} >
            <Grid
                item
                textAlign={"center"}
                py={3}
            >
                <Typography noWrap variant="h3" fontWeight={500}>
                    About Me
                </Typography>
            </Grid>

            <Grid
                container
                item
                justifyContent={"center"}
            >
                <Grid container item xs={10} md={5} justifyContent="center" p={4} alignContent={"center"} >
                    <Box p={2} backgroundColor={""} >
                        <img src={profile} alt="avatar" className="selector" width={"350"}/>
                    </Box>
                </Grid>

                <Grid container item xs={10} md={5} justifyContent="center" p={4} direction="column" backgroundColor={""}>
                    <Grid item >
                        <Typography py={1} variant="h6">
                            {about.header}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography py={1} variant="h6">
                            {about.body}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography py={1} variant="h6">
                            {about.footer}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default About;