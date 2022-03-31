import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import profile from "../assets/profile_placeholder.jpg"

const About = ({ about }) => {

    return <>
        <Grid container item py={6} direction={"column"} backgroundColor={"background.paper"} id="About">
            {/* Title */}
            <Grid
                item
                textAlign={"center"}
                py={3}
            >
                <Typography noWrap variant="h3" fontWeight={500}>
                    About Me
                </Typography>
            </Grid>
            {/* Content */}
            <Grid
                container
                item
                justifyContent={"center"}
            >
                {/* Element 1 */}
                <Grid container item xs={10} md={5} justifyContent="center" p={4} alignContent={"center"} >
                    <Box p={2} backgroundColor={""} >
                        <img src={profile} alt="avatar" className="selector" width={"350"}/>
                    </Box>
                </Grid>
                {/* Element 2 */}
                <Grid container item xs={10} md={5} justifyContent="center" p={4} direction="column" backgroundColor={""}>
                    <Grid item >
                        <Typography py={1} variant="h6" fontWeight={300}>
                            {about.header}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography py={1} variant="h6" fontWeight={300}>
                            {about.body}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography py={1} variant="h6" fontWeight={300}>
                            {about.footer}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default About;