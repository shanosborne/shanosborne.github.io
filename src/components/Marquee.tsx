import { Button, Grid, Typography } from "@mui/material";
import type { ReactElement } from "react";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "../theme";

const Marquee = (): ReactElement => {
    return <Grid container sx={{ position: 'absolute', left: 25, right: 25, top: { xs: 200, md: 300 } }}>
        <Grid size={{ xs: 0, sm: 1, md: 2 }}></Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
            <Typography variant="h1" color={COLOR_PRIMARY}>SHANNON OSBORNE</Typography>
            <Typography variant="h2" color={COLOR_SECONDARY} sx={{ maxWidth: '500px' }}>A summary of my experience in software engineering & science</Typography>
            <Button variant="contained" sx={{ mt: 12 }} href="#about">
                Learn More
            </Button>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 2 }}></Grid>
    </Grid>
}

export default Marquee;