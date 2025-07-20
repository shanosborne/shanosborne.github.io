import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
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
        body: ["Cirro is a Typescript/React frontend, Java backend, AWS-hosted website aimed to provide no-code \
        data processing and sharing solutions to cancer researchers. Researchers can upload data directly from their \
        instruments, run point and click analysis pipelines, view pre-made data visualizations, and share data with \
        collaborators across the country."],
        image: "public/cirro.png",
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
        body: ["Cirro's documentation website aims to provide a comprehensive guide to both introduce new users to Cirro, and to walk \
            existing users through all the features available to them. The website is a written in Markdown using the MkDocs site generator.",
            'To see specific examples of my writing, check out any of the pages under the "Overview", "Features", or "System" sections.'],
        image: "public/cirro-docs.png",
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
        body: ["The KinCyte Explorer Atlas was created in collaboration with a cancer research lab at Fred Hutchinson Cancer Center \
            in order to help communicate complex drug interactions to doctors looking to target specific kinases in their patients. \
            This project culminated in the publishing of this website alongside a journal article. "],
        image: "public/kincyte.png",
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
        body: ["This portfolio website was built using Typescript, React, Vite, and Material UI, tested with WAVE Accessibility Tools and MacOs VoiceOver, and hosted using GitHub Pages.",
            "Image source: NASA"],
        image: "public/logo-grey.png",
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
                    It allowed for user interaction with telescope instrument data, and created files that were needed\
                    to override the default guiding procedure to ensure the operation of the flight software\
                    and the execution of visits during the early stages of commissioning when the 18 mirrors were\
                    not yet aligned."],
        image: "public/magic-logo.png",
        alt: "MAGIC Logo",
        links: [
            {
                text: "See a demonstration of the GUI",
                href: "public/magic-example.mov"
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
        body: ["The Webb Software Standards are documentation for an initiative to have all the department's software tools that were built for the astronomical \
            community meet accepted software standards. This documentation includes descriptions of 24 best practice \
            standards and information on how to implement them. The goal of the initiative was to make the company's user-facing \
            software robust, maintainable, documented, and ready to support the 10-15 year lifetime of the telescope."],
        image: "public/standards-page.png",
        alt: "Example standard",
        links: [
            {
                text: "See the standards",
                href: "https://github.com/spacetelescope/ins-jwst-community-software"
            }
        ]
    },
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
                {entry.body.map((paragraph, i) =>
                    <Typography key={i}>
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