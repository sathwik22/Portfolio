import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip,
    IconButton,
    Stack,
    Tooltip,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';

const ProjectCard = ({ project, darkMode, theme }) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                background: darkMode
                    ? 'rgba(30, 41, 59, 0.5)'
                    : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${
                    darkMode
                        ? 'rgba(139, 92, 246, 0.2)'
                        : 'rgba(124, 58, 237, 0.1)'
                }`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    border: `1px solid ${
                        darkMode
                            ? 'rgba(139, 92, 246, 0.5)'
                            : 'rgba(124, 58, 237, 0.3)'
                    }`,
                    boxShadow: darkMode
                        ? '0 20px 40px rgba(139, 92, 246, 0.2)'
                        : '0 20px 40px rgba(124, 58, 237, 0.15)',
                },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background:
                        'linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)',
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {/* Header with Title and Actions */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 2,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            flex: 1,
                            background: darkMode
                                ? 'linear-gradient(135deg, #FFFFFF 0%, #8B5CF6 100%)'
                                : 'linear-gradient(135deg, #1E293B 0%, #7C3AED 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {project.title}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {project.github && (
                            <Tooltip title="View Code">
                                <IconButton
                                    size="small"
                                    onClick={() =>
                                        window.open(project.github, '_blank')
                                    }
                                    sx={{
                                        color: theme.palette.primary.main,
                                        '&:hover': {
                                            background: darkMode
                                                ? 'rgba(139, 92, 246, 0.1)'
                                                : 'rgba(124, 58, 237, 0.1)',
                                        },
                                    }}
                                >
                                    <GitHubIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                        {project.demo && project.demo !== '#' && (
                            <Tooltip title="Live Demo">
                                <IconButton
                                    size="small"
                                    onClick={() =>
                                        window.open(project.demo, '_blank')
                                    }
                                    sx={{
                                        color: theme.palette.primary.main,
                                        '&:hover': {
                                            background: darkMode
                                                ? 'rgba(139, 92, 246, 0.1)'
                                                : 'rgba(124, 58, 237, 0.1)',
                                        },
                                    }}
                                >
                                    <LaunchIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Stack>
                </Box>

                {/* Highlights/Metrics Section */}
                {project.highlights && project.highlights.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ flexWrap: 'wrap', gap: 1.5 }}
                        >
                            {project.highlights.map((highlight, i) => (
                                <Chip
                                    key={i}
                                    icon={<StarIcon sx={{ fontSize: 16 }} />}
                                    label={highlight}
                                    size="small"
                                    sx={{
                                        background: darkMode
                                            ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)'
                                            : 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)',
                                        border: `1px solid ${
                                            darkMode
                                                ? 'rgba(139, 92, 246, 0.3)'
                                                : 'rgba(124, 58, 237, 0.3)'
                                        }`,
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                        '& .MuiChip-icon': {
                                            color: theme.palette.primary.main,
                                        },
                                    }}
                                />
                            ))}
                        </Stack>
                    </Box>
                )}

                {/* Description */}
                <Typography
                    variant="body2"
                    sx={{
                        mb: 3,
                        lineHeight: 1.7,
                        color: darkMode
                            ? 'rgba(255, 255, 255, 0.8)'
                            : 'rgba(0, 0, 0, 0.7)',
                    }}
                >
                    {project.description}
                </Typography>

                {/* Technologies */}
                <Box>
                    <Typography
                        variant="caption"
                        sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            mb: 1,
                            display: 'block',
                        }}
                    >
                        Tech Stack
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                        }}
                    >
                        {project.technologies.map((tech, i) => (
                            <Chip
                                key={i}
                                label={tech}
                                size="small"
                                sx={{
                                    backgroundColor: darkMode
                                        ? 'rgba(139, 92, 246, 0.1)'
                                        : 'rgba(124, 58, 237, 0.08)',
                                    color: theme.palette.primary.main,
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(139, 92, 246, 0.3)'
                                            : 'rgba(124, 58, 237, 0.2)'
                                    }`,
                                    fontWeight: 500,
                                    fontSize: '0.7rem',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        backgroundColor: darkMode
                                            ? 'rgba(139, 92, 246, 0.2)'
                                            : 'rgba(124, 58, 237, 0.15)',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
