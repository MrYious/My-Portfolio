import { Grid, Typography } from "@mui/material";

const Footer = () => {

    return <>
        <Grid container item py={2} backgroundColor="background.paper" justifyContent={"center"}>
            {/* Content */}
            <Grid item xs={"auto"} p={2} >
                <Typography fontWeight={300} fontSize={13}>
                    {"Copyright © 2022 | Made with ❤️ by Mark Edison Rosario"}
                </Typography>
            </Grid>
        </Grid>
    </>
}

export default Footer;