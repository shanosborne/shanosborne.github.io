import { Box, Stack } from "@mui/material";
import type { ReactElement } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Links from "./ExternalLinks";
import Marquee from "./Marquee";

const Site = (): ReactElement => {
    return <Stack direction="column" spacing={4}>
        <Box
            sx={{
                backgroundImage: 'url("src/assets/pm_selfie_compressed.png")',
                backgroundAttachment: "fixed",
                backgroundSize: "contain",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                opacity: 0.3,
                height: 'calc(100vh - 70px)',
                width: '100vw',
            }}
        >
        </Box>
        <Stack spacing={20} sx={{ px: { xs: 5, md: 10, lg: 20 }, pb: 25 }}>
            <div id="home" className="section"><Marquee /></div>
            <div id="about" className="section"><About /></div>
            <div id="portfolio" className="section"><Portfolio /></div>
            <div id="links" className="section"><Links /></div>
        </Stack>
    </Stack>
}

export default Site;