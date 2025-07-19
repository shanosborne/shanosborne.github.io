import { createTheme } from "@mui/material";

export const COLOR_PRIMARY = "#10abb8"
export const COLOR_SECONDARY = "#0a3e42"
export const COLOR_WHITE = "#ffffff";

export const PortfolioTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    '&:hover': {
                        color: 'white',

                    }
                },
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: '12px'
                },
            }
        },
    },
    palette: {
        primary: { main: COLOR_PRIMARY },
        secondary: { main: COLOR_SECONDARY },
        info: { main: COLOR_WHITE }
    },
    typography: {
        fontFamily: "Work Sans",
        h1: {
            fontSize: '75px'
        },
        h2: {
            fontSize: '50px',
            paddingBottom: '30px',
            color: COLOR_PRIMARY,
        },
        h3: {
            fontSize: '24px',
            color: COLOR_PRIMARY
            // margin: 2em;
        },
        h4: {
            fontSize: '16px',
            fontWeight: '600',
        },
        subtitle1: {
            fontSize: '40px'
        },
        body1: {
            fontSize: '16px'
        }
    }
});
