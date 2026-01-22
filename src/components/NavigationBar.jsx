import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const NavigationBar = ({
    darkMode,
    toggleDarkMode,
    activeSection,
    scrollToSection,
    theme,
}) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { label: 'About', section: 'about' },
        { label: 'Skills', section: 'skills' },
        { label: 'Projects', section: 'projects' },
        { label: 'Contact', section: 'contact' },
    ];

    const handleNavClick = (section) => {
        scrollToSection(section);
        if (mobileOpen) setMobileOpen(false);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
                    backgroundColor: scrolled
                        ? darkMode
                            ? 'rgba(15, 23, 42, 0.9)'
                            : 'rgba(248, 250, 252, 0.9)'
                        : darkMode
                        ? 'rgba(15, 23, 42, 0.7)'
                        : 'rgba(248, 250, 252, 0.7)',
                    borderBottom: `1px solid ${
                        darkMode
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(0, 0, 0, 0.05)'
                    }`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    py: scrolled ? 0.5 : 1,
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Logo/Name */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            background: darkMode
                                ? 'linear-gradient(135deg, #FFFFFF 0%, #8B5CF6 100%)'
                                : 'linear-gradient(135deg, #1E293B 0%, #7C3AED 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                            },
                        }}
                        onClick={() => scrollToSection('home')}
                    >
                        Sathwik V.
                    </Typography>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            {menuItems.map((item) => (
                                <Button
                                    key={item.section}
                                    onClick={() => handleNavClick(item.section)}
                                    sx={{
                                        color:
                                            activeSection === item.section
                                                ? theme.palette.primary.main
                                                : darkMode
                                                ? 'rgba(255, 255, 255, 0.8)'
                                                : 'rgba(0, 0, 0, 0.7)',
                                        fontWeight:
                                            activeSection === item.section
                                                ? 700
                                                : 600,
                                        fontSize: '0.95rem',
                                        px: 2,
                                        py: 1,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width:
                                                activeSection === item.section
                                                    ? '60%'
                                                    : '0%',
                                            height: '3px',
                                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            borderRadius: '2px',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover': {
                                            bgcolor: darkMode
                                                ? 'rgba(139, 92, 246, 0.1)'
                                                : 'rgba(124, 58, 237, 0.05)',
                                            '&::after': {
                                                width: '60%',
                                            },
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}

                            {/* Theme Toggle */}
                            <IconButton
                                onClick={toggleDarkMode}
                                sx={{
                                    ml: 1,
                                    background: darkMode
                                        ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)'
                                        : 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                                    color: theme.palette.primary.main,
                                    backdropFilter: 'blur(10px)',
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(139, 92, 246, 0.3)'
                                            : 'rgba(124, 58, 237, 0.2)'
                                    }`,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'rotate(180deg) scale(1.1)',
                                        boxShadow: darkMode
                                            ? '0 0 20px rgba(139, 92, 246, 0.4)'
                                            : '0 4px 12px rgba(124, 58, 237, 0.3)',
                                    },
                                }}
                            >
                                {darkMode ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                        </Box>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                                onClick={toggleDarkMode}
                                sx={{
                                    background: darkMode
                                        ? 'rgba(139, 92, 246, 0.2)'
                                        : 'rgba(124, 58, 237, 0.1)',
                                    color: theme.palette.primary.main,
                                }}
                            >
                                {darkMode ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                            <IconButton
                                onClick={handleDrawerToggle}
                                sx={{
                                    color: theme.palette.primary.main,
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 280,
                        background: darkMode
                            ? 'rgba(15, 23, 42, 0.95)'
                            : 'rgba(248, 250, 252, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderLeft: `1px solid ${
                            darkMode
                                ? 'rgba(255, 255, 255, 0.1)'
                                : 'rgba(0, 0, 0, 0.1)'
                        }`,
                    },
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon sx={{ color: theme.palette.primary.main }} />
                    </IconButton>
                </Box>
                <List sx={{ px: 2 }}>
                    {menuItems.map((item) => (
                        <ListItem
                            key={item.section}
                            disablePadding
                            sx={{ mb: 1 }}
                        >
                            <ListItemButton
                                onClick={() => handleNavClick(item.section)}
                                sx={{
                                    borderRadius: 2,
                                    bgcolor:
                                        activeSection === item.section
                                            ? darkMode
                                                ? 'rgba(139, 92, 246, 0.2)'
                                                : 'rgba(124, 58, 237, 0.1)'
                                            : 'transparent',
                                    '&:hover': {
                                        bgcolor: darkMode
                                            ? 'rgba(139, 92, 246, 0.15)'
                                            : 'rgba(124, 58, 237, 0.08)',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    sx={{
                                        '& .MuiTypography-root': {
                                            fontWeight:
                                                activeSection === item.section
                                                    ? 700
                                                    : 600,
                                            color:
                                                activeSection === item.section
                                                    ? theme.palette.primary.main
                                                    : 'inherit',
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default NavigationBar;
