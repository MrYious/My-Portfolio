import { Grid, Typography } from "@mui/material";

const Projects = () => {

    return <>
        <Grid container item py={6} direction={"column"} id="Project" backgroundColor="background.paper">
            <Grid
                item
                textAlign={"center"}
                py={2}
            >
                <Typography noWrap variant="h3" fontWeight={500} >
                    My Projects
                </Typography>
            </Grid>

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

export default Projects;