import { Box, Stack } from "@mui/material";
import type { ReactElement } from "react";
import About from "./About";
import Header from "./Header";
import Links from "./ExternalLinks";
import Marquee from "./Marquee";
import Portfolio from "./Portfolio";
import SkipToMainButton from "./SkipToMainButton";

const Site = (): ReactElement => {
    return <>
        <SkipToMainButton />
        <header id="header">
            <Header />
        </header>
        <main id="main" tabIndex={-1}>
            <Stack direction="column" spacing={4}>
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
                <Stack className="section" spacing={20} sx={{ px: { xs: 5, md: 10, lg: 20 }, pb: 25 }}>
                    <div id="home"><Marquee /></div>
                    <div id="about"><About /></div>
                    <div id="portfolio"><Portfolio /></div>
                    <div id="links"><Links /></div>
                </Stack>
            </Stack>
        </main>
    </>

}

export default Site;