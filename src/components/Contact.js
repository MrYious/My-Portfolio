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
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = ({ small, contact }) => {

    const theme = useTheme();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleOpenLink = (link) =>{
        window.open(link, "_blank");
    }

    const sendEmail = () => {
        emailjs.sendForm('service_8rzn3gq', 'template_v4evfpf', "#form", '3JYth6CoGFxyfIIYU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return <>
        <Grid container item py={7} direction={"column"} id="Contact" >
            {/* Title */}
            <Grid item textAlign={"center"} py={3}  >
                <Typography noWrap variant="h3" fontWeight={500} >
                    Contact Me
                </Typography>
            </Grid>
            {/* Content */}
            <Grid container item justifyContent={"center"} direction={small ? "row" : "row-reverse"} py={2} gap={5}>
                {/* Group 1 */}
                <Grid container item xs={12} md={5} justifyContent={"center"} alignContent={"start"} >
                    {/* Section 1 */}
                    <Grid item xs={10} py={2} >
                        <Typography variant="h5" fontWeight={300}>Get in touch</Typography>
                    </Grid>
                    <Grid container item xs={10} gap={1}>
                        <Grid container item xs={10} alignContent={"center"} gap={1.5} >
                            <HomeIcon fontSize={"large"} color="primary"/>
                            <Typography variant="subtitle1" fontWeight={300}>{contact.address}</Typography>
                        </Grid>
                        <Grid container item xs={10} alignContent={"center"} gap={1.5} >
                            <LocalPhoneIcon fontSize={"large"} color="primary"/>
                            <Typography variant="subtitle1" fontWeight={300}>{contact.phone}</Typography>
                        </Grid>
                        <Grid container item  xs={10} alignContent={"center"} gap={1.5} >
                            <EmailIcon fontSize={"large"} color="primary"/>
                            <Typography variant="subtitle1" fontWeight={300}>{contact.email}</Typography>
                        </Grid>
                    </Grid>

                    {/* Section 2 */}
                    <Grid item xs={10} pt={3} pb={2}>
                        <Typography variant="h5" fontWeight={300}>Check out my socials</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <IconButton onClick={() => handleOpenLink(contact.socials.linkedin)}><LinkedInIcon fontSize="large"/></IconButton>
                        <IconButton onClick={() => handleOpenLink(contact.socials.github)}><GitHubIcon fontSize="large"/></IconButton>
                        <IconButton onClick={() => handleOpenLink(contact.socials.facebook)}><FacebookIcon fontSize="large"/></IconButton>
                        <IconButton onClick={() => handleOpenLink(contact.socials.instagram)}><InstagramIcon fontSize="large"/></IconButton>
                        <IconButton onClick={() => handleOpenLink(contact.socials.reddit)}><RedditIcon fontSize="large"/></IconButton>
                    </Grid>
                </Grid>
                {/* Group 2 */}
                <Grid container item xs={12} md={5} >
                    <form id="form">
                        <Grid container gap={2} justifyContent={"center"}>
                            {/* Elements */}
                            <Grid item xs={10}>
                                <TextField id="filled-basic" label="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} variant="filled" required fullWidth/>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField id="filled-basic" label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} variant="filled" required fullWidth/>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField id="filled-basic" label="Subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} variant="filled" fullWidth/>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField id="filled-basic" label="Message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} variant="filled" required multiline rows={6} fullWidth/>
                            </Grid>
                            <Grid item xs={10}>
                                <Button variant={theme.palette.mode === 'light' ? "contained" : "outlined"} endIcon={<SendIcon />} size={"large"} onClick={sendEmail}>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default Contact;