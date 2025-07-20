import { OpenInNew } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import type { ReactElement } from "react";
import { COLOR_GRAY } from "../theme";


interface IPortfolioLink {
    text: string;
    href: string;
}

interface IPortfolioEntry {
    title: string;
    role: string;
    body: string[];
    image: string;
    alt: string;
    links: IPortfolioLink[];
}

const portfolioEntries: IPortfolioEntry[] = [
    {
        title: "Cirro",
        role: "Full Stack Developer",
        body: ["Cirro is a Typescript/React frontend, Java backend, AWS-hosted website aimed to help provide no-code \
        solutions to cancer researchers. Researchers can upload data directly from their instruments, run point and click \
        analysis pipelines, view pre-made data visualizations, and share data with collaborators across the country.",
            "While my role did focus primarily on the front end, I also contributed to the backend development (Java), CLI/SDK (Python), and pipeline processing scripts (Python)."],
        image: "src/assets/cirro.png",
        alt: "Cirro homepage",
        links: [
            {
                text: "Visit the homepage",
                href: "https://cirro.bio"
            },
            {
                text: "See screenshots in the docs site",
                href: "https://docs.cirro.bio/overview/getting-started/"
            }
        ]
    },
    {
        title: "Cirro Documentation Site",
        role: "Creator and Author",
        body: ["Cirro's documentation site aims to provide a comprehensive guide both to introduce new users to Cirro, and to walk existing users through all the features available to them. \
            The website is a written in Markdown using the MkDocs site generator.",
            'I created, styled, and wrote the majority of the website. To see specific examples of my writing, see any of the pages under the "Overview", "Features", or "System" sections.'],
        image: "src/assets/cirro-docs.png",
        alt: "FAQ page",
        links: [
            {
                text: "Visit the documentation",
                href: "https://docs.cirro.bio/"
            }
        ]
    },
    {
        title: "KinCytE Kinase and Cytokine Explorer",
        role: "Creator",
        body: ["The KinCyte Explorer Atlas was created in collaboration with a cancer research lab in order to help \
            display complex drug interaction to doctors looking to target specific kinases.",
            "I met with the lab multiple times to learn about the project, gather requirements, and present the website \
        development in stages. This project culminated in the publishing of this website along with a journal article. "],
        image: "src/assets/kincyte.png",
        alt: "KinCytE logo",
        links: [
            {
                text: "Visit the website",
                href: "https://atlas.fredhutch.org/kincyte"
            }
        ]
    },
    {
        title: "Portfolio Website",
        role: "Creator",
        body: ["This website was built with Typescript, React, Vite, and Material UI, tested with WAVE Accessibility Tools and MacOs VoiceOver, and hosted using GitHub Pages.",
            "Image source: NASA"],
        image: "src/assets/logo-grey.png",
        alt: "Portfolio logo",
        links: [
            {
                text: "See the code",
                href: "https://github.com/shanosborne/shanosborne.github.io"
            }
        ]
    },
    {
        title: "Multi-Application Guiding Interface for Commissioning (MAGIC)",
        role: "Lead Developer",
        body: ["MAGIC is a PyQt5-powered Python GUI used during the commissioning of NASA/ESA's Webb Space Telescope.\
                    It allows for user interaction with telescope instrument data and creates files that are needed\
                    to override the default guiding procedure to ensure the operation of the flight software\
                    and the execution of visits during the early stages of commissioning when the 18 mirrors are\
                    not yet aligned."],
        image: "src/assets/magic-logo.png",
        alt: "MAGIC Logo",
        links: [
            {
                text: "See a demonstration of the GUI",
                href: "src/assets/magic-example.mov"
            },
            {
                text: "See the code",
                href: "https://github.com/spacetelescope/jwst_magic"
            }
        ]
    },
    {
        title: "Webb Software Standards",
        role: "Deputy Project Lead",
        body: ["The Webb Software Standards are documentation for an initiative to have all our division's software tools that were built for the astronomical \
            community meet accepted software standards. This documentation includes descriptions of 24 best practice \
            standards and information on how to implement them. The goal of the initiative was to make the company's user-facing \
            software robust, maintainable, documented, and ready to support the 10-15 year lifetime of the telescope. Check out \
            the README for links to all the software standard documentation and the presentation .pptx file for \
            a summary of the work and its successes."],
        image: "src/assets/standards-page.png",
        alt: "Example standard",
        links: [
            {
                text: "See the standards",
                href: "https://github.com/spacetelescope/ins-jwst-community-software"
            }
        ]
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
    // {
    //     title: "WebbPSF",
    //     role: "Developer and Maintainer",
    //     body: ["WebbPSF is a Python package used across the astronomical community that produces \
    //         simulated PSFs for the Webb Space Telescope and Roman Space Telescope, \
    //         two of NASA's flagships space missions. WebbPSF can simulate images for any of Webb's five \
    //         instruments, including both direct imaging and coronagraphic modes and Roman's preliminary \
    //         design for it's soon to be built Coronagraph Instrument.",
    //         "Along with being a developer, I performed package releases and was a memeber of the help desk \
    //         team providing individualized help to users."],
    //     image: "src/assets/webbpsf-psf.png",
    //     alt: "WebbPSF Logo",
    //     links: [
    //         {
    //             text: "See the code",
    //             href: "https://github.com/spacetelescope/webbpsf/"
    //         }
    //     ]
    // },
]

const PortfolioEntry: React.FC<IPortfolioEntry> = (entry): ReactElement => {
    return <Card sx={{ boxShadow: "0 0 20px #ccc", p: 1 }}>
        <CardMedia
            component="img"
            alt={entry.alt}
            image={entry.image}
        />
        <CardContent>
            <Typography gutterBottom variant="h4">
                {entry.title}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
                {`${entry.role}:`}
            </Typography>
            <Stack gap={1}>
                {entry.body.map((paragraph) =>
                    <Typography>
                        {paragraph}
                    </Typography>
                )}
            </Stack>
            {entry.links.map((link: IPortfolioLink) => (
                <Button
                    key={link.text}
                    variant="contained"
                    fullWidth
                    component="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNew />}
                    sx={{ backgroundColor: COLOR_GRAY, mt: 2 }}
                >
                    {link.text}
                </Button>
            ))}
        </CardContent>
    </Card>
}

const Portfolio = (): ReactElement => {
    return <Box>
        <Typography variant="h3">Portfolio</Typography>
        <Grid container spacing={3}>
            {portfolioEntries.map((entry: IPortfolioEntry) => (
                <Grid key={entry.title} size={{ xs: 12, sm: 6 }}>
                    <PortfolioEntry {...entry} />
                </Grid>
            ))}
        </Grid>
    </Box >
}

export default Portfolio;