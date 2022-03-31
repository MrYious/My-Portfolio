import { Grid, Typography } from "@mui/material";

const Footer = () => {

    return <>
        <Grid container item py={3} backgroundColor="background.paper" justifyContent={"center"}>
            {/* Content */}
            <Grid item xs={"auto"} p={2} bgcolor="">
                <Typography fontWeight={300} fontSize={15}>
                    {"Copyright © 2022 | Made with ❤️ by Mark Edison Rosario"}
                </Typography>
            </Grid>
        </Grid>
    </>
}

export default Footer;