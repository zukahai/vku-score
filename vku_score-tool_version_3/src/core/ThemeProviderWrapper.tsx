// components/ThemeProviderWrapper.tsx

'use client'; // This directive makes sure this component is a client component

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    // Your custom theme settings
});

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeProviderWrapper;
