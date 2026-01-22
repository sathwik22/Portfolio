import React from 'react';
import { Box, Container, Typography, Chip, Stack, Paper } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkillsSection = ({ darkMode, theme }) => {
    const skillCategories = [
        {
            title: 'Core Technologies',
            skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        },
        {
            title: 'Frameworks & Libraries',
            skills: ['Material-UI', 'Sass', 'React-Admin', 'Redux'],
        },
        {
            title: 'Tools & Platforms',
            skills: ['GitHub Copilot', 'Jest', 'Cypress', 'Postman', 'Linux'],
        },
        {
            title: 'Also Familiar With',
            skills: ['Python', 'SQL', 'LaTeX', 'Solid Edge'],
        },
    ];

    return (
        <Box
            id="skills"
            sx={{
                py: 12,
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <Box
                    sx={{
                        textAlign: 'center',
                        mb: 8,
                        animation: `${fadeInUp} 0.8s ease-out`,
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            letterSpacing: '0.1em',
                        }}
                    >
                        TECH STACK
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
                        Skills & Technologies
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '600px',
                            mx: 'auto',
                            color: darkMode
                                ? 'rgba(255, 255, 255, 0.6)'
                                : 'rgba(0, 0, 0, 0.6)',
                            fontSize: '1.1rem',
                        }}
                    >
                        Technologies and tools I work with to build exceptional
                        digital experiences
                    </Typography>
                </Box>

                {/* Skills Grid */}
                <Stack spacing={4}>
                    {skillCategories.map((category, categoryIndex) => (
                        <Paper
                            key={categoryIndex}
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                background: darkMode
                                    ? 'rgba(30, 41, 59, 0.5)'
                                    : 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(10px)',
                                border: `1px solid ${
                                    darkMode
                                        ? 'rgba(99, 102, 241, 0.2)'
                                        : 'rgba(79, 70, 229, 0.1)'
                                }`,
                                transition:
                                    'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                animation: `${fadeInUp} 0.8s ease-out ${
                                    categoryIndex * 0.1
                                }s both`,
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: darkMode
                                        ? '0 20px 40px rgba(99, 102, 241, 0.15)'
                                        : '0 20px 40px rgba(79, 70, 229, 0.1)',
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(99, 102, 241, 0.4)'
                                            : 'rgba(79, 70, 229, 0.2)'
                                    }`,
                                },
                            }}
                        >
                            {/* Category Title */}
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    fontWeight: 700,
                                    fontSize: '1.25rem',
                                    color: theme.palette.primary.main,
                                }}
                            >
                                {category.title}
                            </Typography>

                            {/* Skills Chips */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1.5,
                                }}
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <Chip
                                        key={skillIndex}
                                        label={skill}
                                        sx={{
                                            px: 2,
                                            py: 2.5,
                                            fontSize: '0.95rem',
                                            fontWeight: 600,
                                            background: darkMode
                                                ? 'rgba(139, 92, 246, 0.1)'
                                                : 'rgba(124, 58, 237, 0.08)',
                                            color: darkMode
                                                ? 'rgba(255, 255, 255, 0.9)'
                                                : 'rgba(0, 0, 0, 0.8)',
                                            border: `1px solid ${
                                                darkMode
                                                    ? 'rgba(139, 92, 246, 0.3)'
                                                    : 'rgba(124, 58, 237, 0.2)'
                                            }`,
                                            backdropFilter: 'blur(10px)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                background: category.gradient,
                                                color: '#FFFFFF',
                                                transform:
                                                    'translateY(-4px) scale(1.05)',
                                                boxShadow: darkMode
                                                    ? '0 8px 16px rgba(139, 92, 246, 0.3)'
                                                    : '0 8px 16px rgba(124, 58, 237, 0.25)',
                                                border: 'none',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Paper>
                    ))}
                </Stack>

                {/* Additional Info */}
                <Box
                    sx={{
                        mt: 6,
                        textAlign: 'center',
                        animation: `${fadeInUp} 0.8s ease-out 0.6s both`,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: darkMode
                                ? 'rgba(255, 255, 255, 0.5)'
                                : 'rgba(0, 0, 0, 0.5)',
                            fontSize: '0.95rem',
                        }}
                    >
                        💡 Always learning and exploring new technologies
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default SkillsSection;
