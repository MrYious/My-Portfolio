import { Chip, Grid } from "@mui/material";

const ProjectItem = ({project}) => {

    return <>
        {/* Element */}
        <Grid
            container item
            xs={12} md={3.5} p={3} gap={2}
            bgcolor="background.default"
            alignItems={"flex-start"}
        >
            <Grid item xs={12} alignContent={"center"} onClick={()=> window.open(project.link, "_blank")} style={{cursor: "pointer"}}>
                <img src={project.image} alt={project.name} style={{width: "100%"}}/>
            </Grid>
            <Grid container item xs={12} gap={2}>
                <Grid
                    item
                    fontWeight={400}
                    fontSize={20}
                    color={"primary.main"}
                    onClick={()=> window.open(project.link, "_blank")}
                    style={{cursor: "pointer"}}
                >
                    {project.title}
                </Grid>
                <Grid item fontWeight={300} >{project.description}</Grid>
                <Grid item container gap={1}>
                    {project.techs.map((tech, i) => {
                        return <Chip label={tech} variant="outlined" color="primary" size="small" key={i}></Chip>
                    })}
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default ProjectItem;