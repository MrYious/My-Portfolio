import { Grid, Typography } from "@mui/material";

import { Icon } from '@iconify/react';

const Skill = ({ skills }) => {

    return <>
        <Grid
            container
            item
            py={5}
            direction={"column"}
        >
            <Grid
                item
                py={2}
                textAlign={"center"}
            >
                <Typography noWrap variant="h4" >
                    My Skills
                </Typography>
            </Grid>
            <Grid
                container
                item
                justifyContent={"center"}
                direction={"column"}
                py={3}
            >
                <Grid container item xs={10} md={5} justifyContent="center" p={2} alignContent={"center"} backgroundColor={""}>
                    Filter
                </Grid>
                <Grid container item xs={10} md={5} justifyContent="center" p={4} alignContent={"center"} backgroundColor={""}>
                    {skills.list.map( (skill, i) =>
                        <Grid item xs={12} key={i} >
                            {skill.name}
                            <Icon icon={skill.icon} width={"50"}  height="50" />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default Skill;