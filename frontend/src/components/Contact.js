import { Button, Grid, IconButton, TextField, Typography, useTheme } from "@mui/material";

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RedditIcon from '@mui/icons-material/Reddit';
import SendIcon from '@mui/icons-material/Send';

const Contact = ({ small, contact }) => {

    const theme = useTheme();

    const handleOpenLink = (link) =>{
        window.open(link, "_blank");
    }

    return <>
        <Grid container item py={6} direction={"column"} id="Contact" >
            {/* Title */}
            <Grid item textAlign={"center"} py={3}  >
                <Typography noWrap variant="h3" fontWeight={500} >
                    Contact Me
                </Typography>
            </Grid>
            {/* Content */}
            <Grid container item justifyContent={"center"} py={2} gap={5}>
                {/* Group 1 */}
                <Grid container item xs={12} md={5} justifyContent={"center"} alignContent={"start"} backgroundColor={""}>
                    {/* Section 1 */}
                    <Grid item xs={10} py={2} fontSize={25} fontWeight={300}>
                        Get in touch
                    </Grid>
                    <Grid container item xs={10} px={4} gap={1}>
                        <Grid container item xs={10} alignContent={"center"} gap={1.5} >
                            <HomeIcon fontSize={"large"} color="primary"/>
                            <Typography fontSize={20} fontWeight={300}>{contact.address}</Typography>
                        </Grid>
                        <Grid container item xs={10} alignContent={"center"} gap={1.5} >
                            <LocalPhoneIcon fontSize={"large"} color="primary"/>
                            <Typography fontSize={20} fontWeight={300}>{contact.phone}</Typography>
                        </Grid>
                        <Grid container item  xs={10} alignContent={"center"} gap={1.5} >
                            <EmailIcon fontSize={"large"} color="primary"/>
                            <Typography fontSize={20} fontWeight={300}>{contact.email}</Typography>
                        </Grid>
                    </Grid>

                    {/* Section 2 */}
                    <Grid item xs={10} py={2} fontSize={25} fontWeight={300}>
                        Check out my socials
                    </Grid>
                    <Grid item xs={10} px={3}>
                        <IconButton onClick={() => handleOpenLink(contact.socials.linkedin)}><LinkedInIcon fontSize="large"/></IconButton>
                        <IconButton onClick={() => handleOpenLink(contact.socials.github)}><GitHubIcon fontSize="large"/></IconButton>
                        <IconButton onClick={() => handleOpenLink(contact.socials.facebook)}><FacebookIcon fontSize="large"/></IconButton>
                        <IconButton onClick={() => handleOpenLink(contact.socials.instagram)}><InstagramIcon fontSize="large"/></IconButton>
                        <IconButton onClick={() => handleOpenLink(contact.socials.reddit)}><RedditIcon fontSize="large"/></IconButton>
                    </Grid>
                </Grid>
                {/* Group 2 */}
                <Grid container item xs={12} md={5} p={0} gap={2} justifyContent={"center"} backgroundColor={""}>
                    {/* Elements */}
                    <Grid item xs={10}>
                        <TextField id="filled-basic" label="Name" variant="filled" required fullWidth/>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField id="filled-basic" label="Email" variant="filled" required fullWidth/>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField id="filled-basic" label="Subject" variant="filled" fullWidth/>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField id="filled-basic" label="Message" variant="filled" required multiline rows={6} fullWidth/>
                    </Grid>
                    <Grid item xs={10}>
                        <Button variant={theme.palette.mode === 'light' ? "contained" : "outlined"} endIcon={<SendIcon />} size={"large"}>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default Contact;