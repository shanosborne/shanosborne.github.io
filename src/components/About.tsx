import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import type { ReactElement } from "react";
import { COLOR_PRIMARY } from "../theme";

const About = (): ReactElement => {
    return <Box>
        <Typography variant="h3">About</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <Avatar
                alt="Shannon Osborne"
                src="public/profile.png"
                sx={{ width: "300px", height: "300px" }}
            >
            </Avatar>
            <Divider
                orientation="vertical"
                flexItem
                aria-hidden="true"
                sx={{ display: { xs: 'none', sm: 'flex' }, borderRightWidth: 4, borderColor: COLOR_PRIMARY }}
            />
            <Stack direction="column" spacing={2}>
                <Typography>
                    I am currently a Software Engineer with an interest in the intersection of scientific progress and
                    software development.
                </Typography>
                <Typography>
                    Originally from a suburb of Seattle, I got my B.A. in Astrophysics from the University of Colorado Boulder,
                    honing my analysis and coding skills with multiple research projects and my science communication skills as part
                    of an outreach group teaching science in underrepresented areas and with an internship giving public talks and
                    hosting sky viewings at Bryce Canyon National Park.
                </Typography>
                <Typography>
                    I was lucky to join a premiere institute for space astronomy in Baltimore and while supporting the launch of NASA's
                    Webb Telescope, I found that I was really enjoying my software development work and decided to transition fully to
                    software engineering. Since then, I've moved over to the cancer research field and applied my skills while working
                    on Cirro™, a website aimed to offer a no-code solutions for cancer researchers to process, analyze, and share their
                    data with collaborators.
                </Typography>
                <Typography>
                    Through this work, I've developed a love for front-end design and development, particularly focusing on user
                    experience, from useful design, to accessibility, to comprehensive documentation.
                </Typography>
            </Stack>
        </Stack>
    </Box>
}

export default About;