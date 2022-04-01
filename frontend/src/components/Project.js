import { Grid, Typography } from "@mui/material";

import ProjectItem from "./ProjectItem";

const Projects = ({ projects }) => {

    return <>
        <Grid container item py={7} direction={"column"} id="Project" backgroundColor="background.paper">
            {/* Title */}
            <Grid
                item
                textAlign={"center"}
                py={3}
            >
                <Typography noWrap variant="h3" fontWeight={500} >
                    My Projects
                </Typography>
            </Grid>
            {/* Content */}
            <Grid
                container item
                p={4}
                justifyContent={"center"}
            >
                <Grid container item xs={12} justifyContent="center" gap={3} alignContent={"center"}>
                    {projects.map( (project, i) =>
                        <ProjectItem project={project} key={i}/>
                    )}
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default Projects;