import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const HeroSection = ({ currentLine, darkMode, scrollToSection, theme }) => {
    return (
        <Box
            id="home"
            sx={{
                position: 'relative',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: 'url(https://via.placeholder.com/1920x1080)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: darkMode
                        ? 'linear-gradient(to right, rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.6))'
                        : 'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6))',
                },
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 'bold',
                            }}
                        >
                            Welcome to my portfolio
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '3rem', md: '4rem' },
                                mb: 2,
                            }}
                        >
                            {currentLine}
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 4, opacity: 0.8 }}>
                            Full Stack Developer & GenAI Enthusiast
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{
                                mr: 2,
                                py: 1.5,
                                px: 4,
                                borderRadius: 8,
                                boxShadow: darkMode
                                    ? '0 0 15px rgba(187, 134, 252, 0.3)'
                                    : 'none',
                            }}
                            onClick={() => scrollToSection('projects')}
                        >
                            View Projects
                        </Button>

                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            sx={{ py: 1.5, px: 4, borderRadius: 8 }}
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact Me
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
