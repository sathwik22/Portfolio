import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import ProjectCard from './ProjectCard';
import { projectData } from '../utils/constants';

const ProjectsSection = ({ darkMode, theme }) => {
    return (
        <Box id="projects" sx={{ py: 10, scrollMarginTop: '64px' }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 'bold',
                        }}
                    >
                        My Work
                    </Typography>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                        Recent Projects
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
