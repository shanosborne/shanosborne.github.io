import { createTheme } from "@mui/material";

export const COLOR_PRIMARY = "#3b7e9bff";
export const COLOR_SECONDARY = "#091419ff";
export const COLOR_GRAY = "#767676";
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
            fontSize: '5rem',
            fontWeight: '400'
        },
        h2: {
            fontSize: '2.75rem'
        },
        h3: {
            fontSize: '3.1rem',
            paddingBottom: '30px',
            color: COLOR_PRIMARY,
        },
        h4: {
            fontSize: '1.5rem',
            color: COLOR_PRIMARY,
        },
        h5: {
            fontSize: '1rem',
            fontWeight: '600',
        },
        body1: {
            fontSize: '1rem',
        }
    }
});
