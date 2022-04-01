import { Grid } from "@mui/material";
import { Icon } from '@iconify/react';

const SkillItem = ({skill}) => {

    return <>
        {/* Element */}
        <Grid
            container item
            xs={3} md={"auto"}
            minWidth={120} minHeight={120}
            alignContent="center" justifyContent={"center"}
            backgroundColor="background.paper"
        >
            <Grid item textAlign={"center"} bgcolor={""} xs={12}>
                <Icon icon={skill.icon} width={"50"}  height="50" />
            </Grid>
            <Grid item textAlign={"center"} alignContent={"center"} xs={12}>
                {skill.name}
            </Grid>
        </Grid>
    </>
}

export default SkillItem;