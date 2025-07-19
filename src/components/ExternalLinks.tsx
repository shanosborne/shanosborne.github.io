import { Avatar, Box, Card, CardActionArea, CardContent, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
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
        desc: "View code",
        href: "https://github.com/shanosborne",
        icon: "src/assets/Github-logo.png"
    },
    {
        name: "LinkedIn",
        desc: "View professional information",
        href: "https://www.linkedin.com/in/shannonbosborne",
        icon: "src/assets/LinkedIn-logo.png"
    },
    {
        name: "ORCiD",
        desc: "View academic papers",
        href: "https://orcid.org/0009-0001-8609-1518",
        icon: "src/assets/ORCID-logo.png"
    },
]

const LinkIcon: React.FC<IExternalLink> = (link): ReactElement => {
    return <Tooltip title={`${link.desc} on ${link.name}`}>
        <IconButton component="a" href={link.href} target="_blank" rel="noopener noreferrer">
            <Avatar alt={link.name} src={link.icon} sx={{ width: "150px", height: "150px" }}>
            </Avatar>
        </IconButton>
    </Tooltip>

}

const LinkCard: React.FC<IExternalLink> = (link): ReactElement => {
    return <Card sx={{ display: 'flex', boxShadow: "0 0 20px #ccc" }} >
        <CardActionArea href={link.href} target="_blank" rel="noopener noreferrer">
            <Stack direction="row" sx={{ p: 2 }}>
                <Avatar alt={link.name} src={link.icon} sx={{ width: "100px", height: "100px" }}>
                </Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="h5">
                            {link.name}
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{ color: 'text.secondary' }}
                        >
                            {link.desc}
                        </Typography>
                    </CardContent>
                </Box>
            </Stack>
        </CardActionArea>
    </Card>

}

const ExternalLinks = (): ReactElement => {
    return <Box>
        <Typography variant="h2">More Information</Typography>
        <Typography>You can learn more about me and my work in the following places.</Typography>

        {/* // TODO choose one */}
        <Grid container sx={{ mt: 5 }}>
            {externalLinks.map((link: IExternalLink) => (
                <Grid size={4} sx={{ textAlign: 'center' }}><LinkIcon {...link} /></Grid>
            ))}
        </Grid>

        {/* <Grid container spacing={2} sx={{ mt: 5 }}>
            {externalLinks.map((link: IExternalLink) => (
                <Grid size={12}>
                    <LinkCard{...link} />
                </Grid>
            ))}
        </Grid> */}
    </Box>
}

export default ExternalLinks;