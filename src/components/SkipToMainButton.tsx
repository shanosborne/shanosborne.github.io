import { Button } from "@mui/material";
import type { ReactElement } from "react";
import { COLOR_GRAY } from "../theme";

const SkipToMainButton = (): ReactElement => {
    return (<Button
        component="a"
        href="#main"
        tabIndex={0}
        fullWidth
        sx={{
            backgroundColor: COLOR_GRAY,
            position: 'absolute',
            transform: 'translateY(-100%)',
            ':focus': {
                transform: 'translateY(0%)',
                width: '100%',
                height: 'auto',
                position: 'static',
                overflow: 'visible',
                zIndex: 1000,
            },
        }}
    >
        Skip to Main Content
    </Button >
    )
}

export default SkipToMainButton;