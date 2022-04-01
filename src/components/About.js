import { Grid, Typography } from "@mui/material";

import ReactRoundedImage from "react-rounded-image";
import { useTheme } from "@emotion/react";

const About = ({ about, small }) => {

    const theme = useTheme();

    return <>
        <Grid container item py={7} direction={"column"} backgroundColor={"background.paper"} id="About">
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
                py={2}
            >
                {/* Element 1 */}
                <Grid container item xs={10} md={5} justifyContent="center" p={4} alignContent={"center"} >
                    <ReactRoundedImage image={about.image}
                        imageWidth={small ? 240 : 400}
                        imageHeight={small ? 240 : 400}
                        roundedSize="5"
                        roundedColor={theme.palette.mode ==="light" ? "black" : "#ff6434"}
                    />
                </Grid>
                {/* Element 2 */}
                <Grid container item xs={12} md={5} justifyContent="center" p={4} direction="column">
                    <Grid item >
                        <Typography py={1} fontSize={"1.15rem"} fontWeight={300}>
                            {about.header}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography py={1} fontSize={"1.15rem"} fontWeight={300}>
                            {about.body}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography py={1} variant={"h6"} fontWeight={300}>
                            {about.footer}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default About;