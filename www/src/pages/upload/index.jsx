import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import AppTheme from '~/shared-theme/AppTheme';
import MainGrid from '~/components/upload';
import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations,
} from '~/customizations';

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};

export default function UploadPage(props) {
    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    backgroundImage:`url("/backgroundOutline.jpg")`,
                    overflow: 'auto',
                    minHeight: '100vh',
                }}
            >
                <Stack
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        mx: 3,
                        mt: { xs: 10, md: 18 },
                    }}
                >
                    <MainGrid />
                </Stack>
            </Box>
        </AppTheme>
    );
}
