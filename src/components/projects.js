import React from 'react';
import {
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    Chip,
    CardMedia,
} from '@mui/material';

const projectData = [
    {
        title: 'ONEX @ Rexroth',
        description:
            '"Built a modern, responsive dashboard for Rexroth using React and MUI, enabling users to navigate key links and add any page as a custom favorite. Leveraged GenAI for code optimization and unit testing, achieving a 30% productivity boost. Collaborated with the Bosch Rexroth team to enhance user experience and accessibility.',
        technologies: ['React-admin', 'MUI', 'Jest', 'cypress'],
        image: require('../rexroth.PNG'),
        feedback: 'https://gpd-theta.vercel.app/',
        demo: 'https://www.boschrexroth.com/en/de/myrexroth/',
        genAIProductivity:
            'https://inside-docupedia.bosch.com/confluence/display/SXEDAHome/DC+Executive+Summary',
    },

    {
        title: 'SRS @ React-Frontend',
        description:
            'Working in the SRS team as a React Developer. Developed a multi-select filter feature for Rotunda, enabling users to filter search results and items efficiently.contributing to the SRS team by resolving Sonar issues using Copilot, enhancing unit test coverage, and exploring ways to address critical security vulnerabilities using GenAI.',
        technologies: ['React', 'Jest'],
        image: require('../ford-rotunda.PNG'),
        feedback: '',
        demo: '#',
        genAIProductivity:
            'https://contactservicesolutions.atlassian.net/wiki/spaces/SRSCOR/pages/5171150849/OE+s+-+Unit+Testing+Initiative',
    },
];

const Projects = () => {
    return (
        <Box id="projects" sx={{ py: 8, px: 2, marginBottom: '10px' }}>
            <Typography
                variant="h4"
                align="center"
                fontWeight="bold"
                gutterBottom
            >
                Projects
            </Typography>

            <Grid container direction="column" spacing={4} alignItems="center">
                {projectData.map((project, index) => (
                    <Grid
                        item
                        key={index}
                        sx={{ width: '100%', maxWidth: 900, marginLeft: '10%' }}
                    >
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                boxShadow: 3,
                                borderRadius: 3,
                                overflow: 'hidden',
                                transition: 'box-shadow 0.3s ease',
                                '&:hover': {
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={project.title}
                                sx={{
                                    width: { xs: '100%', md: 300 },
                                    height: { xs: 200, md: '100%' },
                                    objectFit: 'cover',
                                    marginTop: '50px',
                                }}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    flex: 1,
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        mb={2}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 1,
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        {project.technologies.map((tech, i) => (
                                            <Chip
                                                label={tech}
                                                key={i}
                                                color="primary"
                                                size="small"
                                            />
                                        ))}
                                    </Box>
                                </CardContent>

                                <CardActions sx={{ px: 2, pb: 2 }}>
                                    {project.feedback && (
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            href={project.feedback}
                                            target="_blank"
                                        >
                                            Shoutouts
                                        </Button>
                                    )}
                                    {project.genAIProductivity && (
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            href={project.genAIProductivity}
                                            target="_blank"
                                        >
                                            GenAI Productivity
                                        </Button>
                                    )}
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        href={project.demo}
                                        target="_blank"
                                    >
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
