import { Button, Stack, Typography } from "@mui/material";
import type { ReactElement } from "react";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "../theme";

const Marquee = (): ReactElement => {
    return <Stack direction="column" sx={{
        position: 'absolute',
        top: '30%',
        left: '20%',
        alignItems: 'start'
        // transform: 'translate(-50%, -50%)',
        // color: 'white',
    }}>
        <Typography variant="h1" color={COLOR_PRIMARY}>SHANNON OSBORNE</Typography>
        <Typography variant="subtitle1" color={COLOR_SECONDARY} sx={{ maxWidth: '600px' }}>A summary of my experience in software engineering & science</Typography>
        <Button variant="contained" sx={{ mt: 12 }} href="#about">
            Learn More
        </Button>
    </Stack>
}

export default Marquee;