import { OpenInNew } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import type { ReactElement } from "react";

interface IPortfolioEntry {
    title: string;
    body: string;
    image: string;
    alt: string;
    linkText: string;
    href: string;
}

const portfolioEntries: IPortfolioEntry[] = [
    {
        title: "Cirro Bio",
        body: "",
        image: "src/assets/cirro.png",
        alt: "Cirro homepage",
        linkText: "Visit the homepage",
        href: "https://cirro.bio"
    },
    {
        title: "Cirro Documentation",
        body: "",
        image: "src/assets/cirro-docs.png",
        alt: "Documentation homepage",
        linkText: "See the documentation",
        href: "https://docs.cirro.bio/"
    },
    {
        title: "This Website",
        body: "The source code for this website, built with Typescript, React, and Material UI.\
        Image source: NASA.",
        image: "src/assets/logo-grey.png",
        alt: "Website logo",
        linkText: "See the code",
        href: "https://github.com/shanosborne/shanosborne.github.io"
    },
    {
        title: "Multi-Application Guiding Interface for Commissioning (MAGIC)",
        body: "MAGIC is a PyQt5-powered Python GUI used during the commissioning of the Webb Space Telescope.\
                    It allows for user interaction with telescope instrument data and creates files that are needed\
                    to override the default guiding procedure to ensure the operation of the flight software\
                    and the execution of visits during the early stages of commissioning when the 18 mirrors are\
                    not yet aligned. This code is hosted on a private repository, but see a video demonstration below.",
        image: "src/assets/magic-logo.png",
        alt: "MAGIC Logo",
        linkText: "See a demonstration of the GUI",
        href: "src/assets/magic-example.mov"
        // TODO ADD https://github.com/spacetelescope/jwst_magic
    },
    {
        title: "Webb Software Standards",
        body: "Documentation for an initiative to have all our division's software tools that were built for the astronomical \
            community meet accepted software standards. This documentation includes descriptions of 24 best practice \
            standards and information on how to implement them. The goal of the initiative was to make the company's user-facing \
            software robust, maintainable, documented, and ready to support the 10-15 year lifetime of the telescope. Check out \
            the README for links to all the software standard documentation and the Presentation_of_Results_2022.pptx file for \
            a summary of the work and its successes.",
        image: "src/assets/standards-page.png",
        alt: "Example standard",
        linkText: "See the standards",
        href: "https://github.com/spacetelescope/ins-jwst-community-software"
    },
    // {
    //     title: "FGS Count Rate Tool",
    //     body: "The Fine Guidance Sensor (FGS) Count Rate Tool is a Python API which queries a catalog of stars \
    //         used for guiding the Hubble and Webb Telescopes, and runs an algorithm to convert their measured \
    //         brightness in visible light to an expected brightness as seen specifically through the infrared \
    //         FGS instrument onboard the Webb Telescope.",
    //     image: "src/assets/FGS-NIRISS-Logo.png",
    //     alt: "JWST-FGS Logo",
    //     linkText: "See the code",
    //     href: "https://github.com/spacetelescope/jwst-fgs-countrate"
    // },
    {
        title: "WebbPSF",
        body: "WebbPSF is a Python package used across the astronomical community that produces \
            simulated PSFs for the Webb Space Telescope and Roman Space Telescope, \
            two of NASA's flagships space missions. WebbPSF can simulate images for any of Webb's five \
            instruments, including both direct imaging and coronagraphic modes and Roman's preliminary \
            design for it's soon to be built Coronagraph Instrument. ",
        image: "src/assets/webbpsf-psf.png",
        alt: "WebbPSF Logo",
        linkText: "See the code",
        href: "https://github.com/spacetelescope/webbpsf/"
    },
]

const PortfolioEntry: React.FC<IPortfolioEntry> = (entry): ReactElement => {
    return <Grid size={6}>
        <Card sx={{ boxShadow: "0 0 20px #ccc", p: 1 }}>
            <CardMedia
                component="img"
                alt={entry.alt}
                image={entry.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {entry.title}
                </Typography>
                <Typography>
                    {entry.body}
                </Typography>
                <Button
                    variant="text"
                    component="a"
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNew />}
                    sx={{ color: "blue" }}>
                    {entry.linkText}
                </Button>
            </CardContent>
        </Card>
    </Grid>
}

const Portfolio = (): ReactElement => {
    return <Box>
        <Typography variant="h2">Portfolio</Typography>
        <Grid container spacing={3}>
            {portfolioEntries.map((entry: IPortfolioEntry) => (
                <PortfolioEntry {...entry} />
            ))}
        </Grid>
    </Box >
}

export default Portfolio;