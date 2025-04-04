import React from 'react';
import {
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Grid,
    Avatar,
    Paper,
    Link,
} from '@mui/material';

const About = () => {
    const experienceItems = [
        'Joined Bosch in August 2023.',
        'Worked at Rexroth as a Frontend Developer on the ONEX project.',
        'Task Force Member of the GenAI initiative.',
        'Actively leveraging GitHub Copilot in project development.',
        'Joined the GenAI team in May 2024.',
        'Delivered a live demo to the EAL team showcasing GenAI advantages.',
        'Currently working in the SRS team as a React Developer since Jan 2025.',
        'Improving unit test coverage and resolving Sonar issues with GenAI.',
    ];

    return (
        <Box
            id="about"
            sx={{
                height: '100vh',
                scrollMarginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 2, md: 6 },
                backgroundColor: '#f9f9f9',
                marginLeft: '15%',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: { xs: 3, md: 5 },
                    maxWidth: '1000px',
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    backgroundColor: 'white',
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={4} textAlign="center">
                        <Avatar
                            src={require('../profilephoto.jpg')}
                            sx={{
                                width: 150,
                                height: 150,
                                margin: 'auto',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                border: '4px solid #1976d2',
                            }}
                            alt="Profile Photo"
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            color="primary"
                        >
                            About Me
                        </Typography>
                        <List>
                            {experienceItems.map((item, idx) => (
                                <ListItem key={idx} disablePadding>
                                    <ListItemText
                                        primary={
                                            item.includes('live demo') ? (
                                                <Typography
                                                    variant="body1"
                                                    fontWeight={500}
                                                >
                                                    Delivered a{' '}
                                                    <Link
                                                        href="https://sathwik22-github-io.vercel.app/intro.html"
                                                        target="_blank"
                                                        rel="noopener"
                                                        underline="hover"
                                                        color="primary"
                                                        fontWeight={600}
                                                    >
                                                        live demo
                                                    </Link>{' '}
                                                    to the EAL team showcasing
                                                    GenAI advantages.
                                                </Typography>
                                            ) : (
                                                <Typography
                                                    variant="body1"
                                                    fontWeight={500}
                                                >
                                                    {item}
                                                </Typography>
                                            )
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default About;
