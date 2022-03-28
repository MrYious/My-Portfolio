import { Typography } from "@mui/material";

const Home = ({ intro }) => {
    return(<>
        <Typography variant="h2">
            {intro.name}
        </Typography>
    </>)
}

export default Home;