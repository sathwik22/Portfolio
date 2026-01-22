import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
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
                            color: darkMode ? '#FFFFFF' : '#1E293B',
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
