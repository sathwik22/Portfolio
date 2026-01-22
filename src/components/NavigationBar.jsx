import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const NavigationBar = ({
    darkMode,
    toggleDarkMode,
    activeSection,
    scrollToSection,
    theme,
}) => {
    return (
        <AppBar position="sticky" elevation={darkMode ? 4 : 1} color="default">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
                    Veeramalli Sathwik
                </Typography>

                <IconButton
                    onClick={toggleDarkMode}
                    color="inherit"
                    sx={{
                        bgcolor: theme.palette.primary.main,
                        color: darkMode ? '#121212' : '#ffffff',
                        '&:hover': {
                            bgcolor: theme.palette.primary.dark,
                        },
                        mr: 2,
                    }}
                >
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

                <Button
                    color="inherit"
                    variant={
                        activeSection === 'about' ? 'contained' : 'outlined'
                    }
                    sx={{ mr: 1 }}
                    onClick={() => scrollToSection('about')}
                >
                    About
                </Button>
                <Button
                    color="inherit"
                    variant={
                        activeSection === 'projects' ? 'contained' : 'outlined'
                    }
                    sx={{ mr: 1 }}
                    onClick={() => scrollToSection('projects')}
                >
                    Projects
                </Button>
                <Button
                    color="inherit"
                    variant={
                        activeSection === 'contact' ? 'contained' : 'outlined'
                    }
                    onClick={() => scrollToSection('contact')}
                >
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
