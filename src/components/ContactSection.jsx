import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Divider,
    Paper,
    IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { personalInfo } from '../utils/constants';

const ContactSection = ({ darkMode, theme }) => {
    return (
        <Box
            id="contact"
            sx={{
                py: 10,
                backgroundColor: darkMode
                    ? 'rgba(30, 30, 30, 0.6)'
                    : 'rgba(240, 240, 240, 0.6)',
                scrollMarginTop: '64px',
            }}
        >
            <Container>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 'bold',
                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                        Contact Me
                    </Typography>
                    <Divider
                        sx={{
                            mx: 'auto',
                            width: '60px',
                            height: '4px',
                            backgroundColor: theme.palette.primary.main,
                        }}
                    />
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Paper
                            elevation={darkMode ? 8 : 2}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                background: darkMode
                                    ? 'linear-gradient(145deg, #1e1e1e, #232323)'
                                    : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                                border: `1px solid ${
                                    darkMode
                                        ? 'rgba(255,255,255,0.05)'
                                        : 'rgba(0,0,0,0.05)'
                                }`,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: 2,
                                }}
                            >
                                <IconButton
                                    sx={{
                                        p: 2,
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        color: darkMode ? '#121212' : '#ffffff',
                                        '&:hover': {
                                            backgroundColor:
                                                theme.palette.primary.dark,
                                        },
                                    }}
                                    onClick={() =>
                                        window.open(
                                            personalInfo.linkedin,
                                            '_blank'
                                        )
                                    }
                                >
                                    <LinkedInIcon fontSize="medium" />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        p: 2,
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        color: darkMode ? '#121212' : '#ffffff',
                                        '&:hover': {
                                            backgroundColor:
                                                theme.palette.primary.dark,
                                        },
                                    }}
                                    onClick={() =>
                                        window.open(
                                            personalInfo.github,
                                            '_blank'
                                        )
                                    }
                                >
                                    <GitHubIcon fontSize="medium" />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        p: 2,
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        color: darkMode ? '#121212' : '#ffffff',
                                        '&:hover': {
                                            backgroundColor:
                                                theme.palette.primary.dark,
                                        },
                                    }}
                                    onClick={() =>
                                        (window.location.href = `mailto:${personalInfo.email}`)
                                    }
                                >
                                    <EmailIcon fontSize="medium" />
                                </IconButton>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactSection;
