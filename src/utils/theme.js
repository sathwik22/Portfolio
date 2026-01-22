import { createTheme } from '@mui/material';

export const getTheme = (darkMode) => {
    return createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#6366F1' : '#4F46E5',
                light: darkMode ? '#818CF8' : '#818CF8',
                dark: darkMode ? '#4338CA' : '#3730A3',
            },
            secondary: {
                main: darkMode ? '#64748B' : '#475569',
                light: darkMode ? '#94A3B8' : '#94A3B8',
            },
            background: {
                default: darkMode ? '#0F172A' : '#F8FAFC',
                paper: darkMode ? '#1E293B' : '#FFFFFF',
            },
            accent: {
                indigo: '#6366F1',
                slate: '#64748B',
            },
        },
        typography: {
            fontFamily:
                "'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            h1: {
                fontWeight: 800,
                letterSpacing: '-0.02em',
            },
            h2: {
                fontWeight: 700,
                letterSpacing: '-0.01em',
            },
            h3: {
                fontWeight: 600,
            },
            body1: {
                lineHeight: 1.7,
            },
        },
        shape: {
            borderRadius: 16,
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        boxShadow: 'none',
                        backdropFilter: 'blur(20px)',
                        backgroundColor: darkMode
                            ? 'rgba(15, 23, 42, 0.8)'
                            : 'rgba(248, 250, 252, 0.8)',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: 12,
                        padding: '10px 24px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    contained: {
                        boxShadow: darkMode
                            ? '0 0 20px rgba(139, 92, 246, 0.3)'
                            : '0 4px 14px rgba(124, 58, 237, 0.25)',
                        '&:hover': {
                            boxShadow: darkMode
                                ? '0 0 30px rgba(139, 92, 246, 0.5)'
                                : '0 6px 20px rgba(124, 58, 237, 0.35)',
                            transform: 'translateY(-2px)',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
        ? `
            radial-gradient(circle at 15% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 85% 30%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            linear-gradient(180deg, #0F172A 0%, #1E293B 100%)
        `
        : `
            radial-gradient(circle at 15% 20%, rgba(167, 139, 250, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 85% 30%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 70%, rgba(34, 211, 238, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.15) 0%, transparent 50%),
            linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)
        `,
    zIndex: -1,
    animation: 'gradientShift 15s ease infinite',
});
