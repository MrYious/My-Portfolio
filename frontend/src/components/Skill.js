import { Grid, Tab, Tabs, Typography } from "@mui/material";

import SkillItem from "./SkillItem";
import { useState } from "react";

const Skill = ({ skills }) => {

    const [filter, setFilter] = useState("All");

    const handleFilterChange = (e, val) => {
        setFilter(val);
    }

    return <>
        <Grid container item py={7} direction={"column"} id="Skill">
            {/* Title */}
            <Grid item textAlign={"center"} py={2} >
                <Typography noWrap variant="h3" fontWeight={500} >
                    My Skills
                </Typography>
            </Grid>
            {/* Tab */}
            <Grid container item justifyContent="center" p={2} alignContent={"center"}>
                <Tabs value={filter} onChange={handleFilterChange} centered>
                    <Tab label="All" value={"All"} />
                    <Tab label="Frontend" value={"Frontend"}/>
                    <Tab label="Backend" value={"Backend"}/>
                    <Tab label="Tools" value={"Tools"}/>
                </Tabs>
            </Grid>
            {/* Content */}
            <Grid
                container
                item
                justifyContent={"center"}
                py={4}
            >
                <Grid container item xs={12} md={8} p={2} justifyContent="center" gap={2} bgcolor="">
                    {skills.list
                        .filter( skill => filter === "All" ? true : skill.category === filter)
                        .map( (skill, i) =>
                        <SkillItem skill={skill} key={i}/>
                    )}
                </Grid>
            </Grid>
            {/* Footer */}
            <Grid container item justifyContent={"center"} alignContent={"center"}>
                <Grid item xs={9} md={6} textAlign={"center"}>
                    <Typography fontWeight={500} fontSize={15} component="span" >
                        {"Note: "}
                    </Typography>
                    <Typography fontWeight={300} fontSize={15} component="span">
                        {skills.note}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default Skill;