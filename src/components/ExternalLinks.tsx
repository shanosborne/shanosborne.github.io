import { Avatar, Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import type { ReactElement } from "react";

interface IExternalLink {
    name: string;
    desc: string;
    href: string;
    icon: string;
}

const externalLinks: IExternalLink[] = [
    {
        name: "GitHub",
        desc: "View code samples",
        href: "https://github.com/shanosborne",
        icon: "/Github-logo.png"
    },
    {
        name: "LinkedIn",
        desc: "View professional information",
        href: "https://www.linkedin.com/in/shannonbosborne",
        icon: "/LinkedIn-logo.png"
    },
    {
        name: "ORCiD",
        desc: "View academic papers",
        href: "https://orcid.org/0009-0001-8609-1518",
        icon: "/ORCID-logo.png"
    },
]

const LinkIcon: React.FC<IExternalLink> = (link): ReactElement => {
    return <Tooltip title={`${link.desc} on ${link.name}`}>
        <IconButton component="a" href={link.href} target="_blank" rel="noopener noreferrer">
            <Avatar
                alt={link.name}
                src={link.icon}
                sx={{
                    width: { xs: '80px', sm: "125px" },
                    height: { xs: '80px', sm: "125px" }
                }}>
            </Avatar>
        </IconButton>
    </Tooltip>

}

const ExternalLinks = (): ReactElement => {
    return <Box>
        <Typography variant="h3">
            More Information
        </Typography>
        <Typography>
            You can learn more about me and my work in the following places. You can also reach out with any questions.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 5 }}>
            {externalLinks.map((link: IExternalLink) => (
                <Grid size={4} key={link.name} sx={{ textAlign: 'center' }}>
                    <LinkIcon {...link} />
                </Grid>
            ))}
        </Grid>
    </Box >
}

export default ExternalLinks;