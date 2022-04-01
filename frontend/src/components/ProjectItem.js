import { Grid } from "@mui/material";

const ProjectItem = ({project}) => {

    return <>
        {/* Element */}
        <Grid
            container item
            xs={12} md={3.5} p={3} gap={2}
            bgcolor="background.default"
        >
            <Grid item xs={12} alignContent={"center"}>
                <img src={project.image} alt={project.name} style={{maxWidth: "100%"}}/>
            </Grid>
            <Grid container item xs={12} gap={1} >
                <Grid item fontWeight={400} fontSize={20} color={"primary.main"}>{project.title}</Grid>
                <Grid item fontWeight={300} >{project.description}</Grid>
            </Grid>
        </Grid>
    </>
}

export default ProjectItem;