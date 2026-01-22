import { createTheme } from '@mui/material';

export const getTheme = (darkMode) => {
    return createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#BB86FC' : '#6200EE',
            },
            secondary: {
                main: darkMode ? '#03DAC6' : '#03DAC6',
            },
            background: {
                default: darkMode ? '#121212' : '#f5f5f5',
                paper: darkMode ? '#1E1E1E' : '#ffffff',
            },
        },
        typography: {
            fontFamily: "'Poppins', sans-serif",
            h1: {
                fontWeight: 700,
            },
            h2: {
                fontWeight: 600,
            },
        },
        shape: {
            borderRadius: 12,
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        boxShadow: darkMode
                            ? '0 4px 20px rgba(0,0,0,0.5)'
                            : '0 2px 10px rgba(0,0,0,0.1)',
                    },
                },
            },
        },
    });
};

export const getBackgroundStyle = (darkMode) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: darkMode
        ? `radial-gradient(circle at 20% 30%, rgba(76, 29, 149, 0.15) 0%, rgba(0, 0, 0, 0) 70%),
         radial-gradient(circle at 80% 10%, rgba(124, 58, 237, 0.1) 0%, rgba(0, 0, 0, 0) 70%)`
        : `radial-gradient(circle at 20% 30%, rgba(219, 234, 254, 0.4) 0%, rgba(0, 0, 0, 0) 70%),
         radial-gradient(circle at 80% 10%, rgba(224, 242, 254, 0.4) 0%, rgba(0, 0, 0, 0) 70%)`,
    zIndex: -1,
});
