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
            fontSize: 'clamp(3.5rem, calc(9vmin + 1em), 5rem)',
            fontWeight: '400'
        },
        h2: {
            fontSize: 'clamp(1.75rem, calc(2.5vmin + 1em), 3rem)'
        },
        h3: {
            fontSize: 'clamp(2rem, calc(4vmin + 1em), 4rem)',
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
