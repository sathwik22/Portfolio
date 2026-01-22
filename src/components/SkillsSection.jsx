import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Divider,
    Paper,
} from '@mui/material';
import { skills } from '../utils/constants';

const SkillsSection = ({ darkMode, theme }) => {
    return (
        <Box
            sx={{
                py: 10,
                backgroundColor: darkMode
                    ? 'rgba(30, 30, 30, 0.6)'
                    : 'rgba(240, 240, 240, 0.6)',
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
                        My Expertise
                    </Typography>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                        Skills & Abilities
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
                    {skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Paper
                                elevation={darkMode ? 6 : 1}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    background: darkMode
                                        ? 'linear-gradient(145deg, #1e1e1e, #232323)'
                                        : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(255,255,255,0.05)'
                                            : 'rgba(0,0,0,0.05)'
                                    }`,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    {skill.name}
                                </Typography>
                                <Box
                                    sx={{
                                        height: '10px',
                                        width: '100%',
                                        backgroundColor: darkMode
                                            ? 'rgba(255, 255, 255, 0.1)'
                                            : 'rgba(0, 0, 0, 0.1)',
                                        borderRadius: 5,
                                        mb: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: '100%',
                                            width: `${skill.level}%`,
                                            backgroundColor:
                                                theme.palette.primary.main,
                                            borderRadius: 5,
                                            boxShadow: darkMode
                                                ? '0 0 10px rgba(187, 134, 252, 0.5)'
                                                : 'none',
                                        }}
                                    />
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{ textAlign: 'right' }}
                                >
                                    {skill.level}%
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SkillsSection;
