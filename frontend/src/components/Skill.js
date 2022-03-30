import { Grid, Tab, Tabs, Typography } from "@mui/material";

import { Icon } from '@iconify/react';
import { useState } from "react";

//TODO:
//React-scroll
//Tab


const Skill = ({ skills }) => {

    const [filter, setFilter] = useState("All");

    const handleFilterChange = (e, val) => {
        setFilter(val);
    }

    return <>
        <Grid container item py={5} direction={"column"} >
            <Grid
                item
                textAlign={"center"}
                py={2}
            >
                <Typography noWrap variant="h3" fontWeight={500} >
                    My Skills
                </Typography>
            </Grid>
            <Grid container item xs={12} md={5} justifyContent="center" p={2} alignContent={"center"} backgroundColor={""}>
                <Tabs value={filter} onChange={handleFilterChange} centered >
                    <Tab label="All" value={"All"}/>
                    <Tab label="Frontend" value={"Frontend"}/>
                    <Tab label="Backend" value={"Backend"}/>
                    <Tab label="Tools" value={"Tools"}/>
                </Tabs>
            </Grid>
            <Grid
                container
                item
                justifyContent={"center"}
                direction={"column"}
                py={3}
            >
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