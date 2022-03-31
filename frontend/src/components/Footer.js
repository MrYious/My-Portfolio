import { Grid } from "@mui/material";

const Footer = () => {

    return <>
        <Grid container item py={6} direction={"column"} backgroundColor="background.paper">
            <Grid
                container
                item
                justifyContent={"center"}
                direction={"column"}
                py={3}
            >
                <Grid container item xs={10} md={5} justifyContent="center" p={4} alignContent={"center"} backgroundColor={""}>
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default Footer;