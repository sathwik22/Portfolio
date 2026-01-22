import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import ProjectCard from './ProjectCard';
import { projectData } from '../utils/constants';

const ProjectsSection = ({ darkMode, theme }) => {
    return (
        <Box id="projects" sx={{ py: 10, scrollMarginTop: '64px' }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            letterSpacing: '0.1em',
                        }}
                    >
                        MY WORK
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            mt: 1,
                            mb: 2,
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontWeight: 800,
                            background: darkMode
                                ? 'linear-gradient(135deg, #FFFFFF 0%, #8B5CF6 100%)'
                                : 'linear-gradient(135deg, #1E293B 0%, #7C3AED 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Featured Projects
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: '600px',
                            mx: 'auto',
                        }}
                    >
                        Real-world applications built for enterprise scale,
                        showcasing expertise in modern web development
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {projectData.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <ProjectCard
                                project={project}
                                darkMode={darkMode}
                                theme={theme}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ProjectsSection;
