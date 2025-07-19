import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import type { ReactElement } from "react";
import { COLOR_PRIMARY } from "../theme";

const About = (): ReactElement => {
    return <Box>
        <Typography variant="h3">About</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <Avatar
                alt="Shannon Osborne"
                src="src/assets/profile.png"
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
                <Typography variant="body1">
                    I am currently a Software Engineer at the Space Telescope Science Institute and a member of the commissioning
                    team for NASA's Webb Space Telescope, launched December 25th, 2021.
                </Typography>
                <Typography>
                    Originally from a suburb of Seattle, I got my B.A. in Astrophysics from the University of Colorado Boulder, honing my
                    analysis and coding skills with multiple research projects and my science communication skills as part of an astronomy
                    outreach group and with an internship giving public talks and hosting sky viewings at Bryce Canyon National Park.
                </Typography>
                <Typography>
                    I was lucky to join one of the premiere institutes for space astronomy in the country and while
                    working on a team supporting the Webb Telescope, I found that I was really enjoying my software development
                    work and made the lateral move to Software Engineer. Since then, I've acted as the main Software Engineer of
                    four projects, as well as doing backend and maintenance work for an additional two projects, employing
                    software best practices and workflows that includes code reviews, documentation, testing suites, continuous integration,
                    and code releases.
                </Typography>
                <Typography>
                    I've recently been enjoying straying from Python (the love of the astronomical community) and have been focusing on
                    teaching myself more front end development languages, which has been a lot of fun.
                </Typography>
            </Stack>
        </Stack>
    </Box>
}

export default About;