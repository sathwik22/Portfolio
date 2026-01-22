import React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button,
} from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import LinkIcon from '@mui/icons-material/Link';

const ProjectCard = ({ project, darkMode, theme }) => {
    return (
        <Card
            elevation={darkMode ? 8 : 2}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-10px)',
                },
            }}
        >
            <CardMedia
                component="img"
                height="500"
                image={project.image}
                alt={project.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                    {project.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                >
                    {project.description}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        mb: 2,
                    }}
                >
                    {project.technologies.map((tech, i) => (
                        <Typography
                            key={i}
                            variant="caption"
                            sx={{
                                py: 0.5,
                                px: 1.5,
                                borderRadius: 10,
                                backgroundColor: darkMode
                                    ? 'rgba(187, 134, 252, 0.1)'
                                    : 'rgba(98, 0, 238, 0.1)',
                                color: theme.palette.primary.main,
                                border: `1px solid ${
                                    darkMode
                                        ? 'rgba(187, 134, 252, 0.3)'
                                        : 'rgba(98, 0, 238, 0.3)'
                                }`,
                            }}
                        >
                            {tech}
                        </Typography>
                    ))}
                </Box>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
                {project.demo && project.demo !== '#' && (
                    <Button
                        size="small"
                        color="primary"
                        startIcon={<PreviewIcon />}
                        onClick={() => window.open(project.demo, '_blank')}
                    >
                        Demo
                    </Button>
                )}
                {project.feedback && (
                    <Button
                        size="small"
                        color="primary"
                        startIcon={<LinkIcon />}
                        onClick={() => window.open(project.feedback, '_blank')}
                    >
                        Feedback
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
