import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Paper,
    Button,
    Stack,
    Chip,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import { keyframes } from '@mui/system';
import {
    personalInfo,
    aboutDescription,
    experienceItems,
} from '../utils/constants';

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

const AboutSection = ({ darkMode, theme }) => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = personalInfo.resumePath;
        link.download = 'Sathwik_Veeramalli_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box id="about" sx={{ py: 12, scrollMarginTop: '80px' }}>
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
                        ABOUT ME
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
                        Professional Journey
                    </Typography>
                </Box>

                {/* Main Content */}
                <Grid
                    container
                    spacing={6}
                    display={'flex'}
                    justifyContent={'space-around'}
                >
                    {/* Profile Section */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            animation: `${fadeInUp} 0.8s ease-out 0.2s both`,
                        }}
                    >
                        <Paper
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
                                        ? 'rgba(139, 92, 246, 0.2)'
                                        : 'rgba(124, 58, 237, 0.1)'
                                }`,
                                textAlign: 'center',
                                position: 'sticky',
                                top: 100,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    position: 'relative',
                                    mb: 3,
                                }}
                            ></Box>

                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                }}
                            >
                                {personalInfo.name}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.primary.main,
                                    fontWeight: 600,
                                    mb: 3,
                                    fontSize: '0.95rem',
                                }}
                            >
                                {personalInfo.title}
                            </Typography>

                            {/* Quick Info */}
                            <Stack
                                spacing={2}
                                sx={{ textAlign: 'left', mb: 3 }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 1.5,
                                    }}
                                >
                                    <EmailIcon
                                        sx={{
                                            color: theme.palette.primary.main,
                                            fontSize: 20,
                                            mt: 0.3,
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: '0.85rem',
                                            wordBreak: 'break-word',
                                        }}
                                    >
                                        {personalInfo.email}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                    }}
                                >
                                    <PhoneIcon
                                        sx={{
                                            color: theme.palette.primary.main,
                                            fontSize: 20,
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{ fontSize: '0.85rem' }}
                                    >
                                        {personalInfo.phone}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                    }}
                                >
                                    <LocationOnIcon
                                        sx={{
                                            color: theme.palette.primary.main,
                                            fontSize: 20,
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{ fontSize: '0.85rem' }}
                                    >
                                        {personalInfo.location}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 1.5,
                                    }}
                                >
                                    <SchoolIcon
                                        sx={{
                                            color: theme.palette.primary.main,
                                            fontSize: 20,
                                            mt: 0.3,
                                        }}
                                    />
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: '0.85rem',
                                                fontWeight: 600,
                                            }}
                                        >
                                            IIT Hyderabad
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: 'text.secondary',
                                                fontSize: '0.75rem',
                                            }}
                                        >
                                            {personalInfo.degree} •{' '}
                                            {personalInfo.cgpa}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Stack>

                            {/* Download Resume Button */}
                            <Button
                                variant="contained"
                                fullWidth
                                startIcon={<CodeIcon />}
                                onClick={handleDownloadResume}
                                sx={{
                                    py: 1.5,
                                    fontWeight: 700,
                                    background: darkMode
                                        ? 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)'
                                        : 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                                }}
                            >
                                Download Resume
                            </Button>
                        </Paper>
                    </Grid>

                    {/* Experience Section */}
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                            animation: `${fadeInUp} 0.8s ease-out 0.4s both`,
                        }}
                    >
                        {/* Professional Summary */}
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                mb: 4,
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
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    color: darkMode
                                        ? 'rgba(255, 255, 255, 0.9)'
                                        : 'rgba(0, 0, 0, 0.8)',
                                }}
                            >
                                {aboutDescription}
                            </Typography>
                        </Paper>

                        {/* Experience Timeline */}
                        {experienceItems.map((experience, index) => (
                            <Paper
                                key={index}
                                elevation={0}
                                sx={{
                                    p: 4,
                                    mb: 3,
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
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateX(8px)',
                                        border: `1px solid ${
                                            darkMode
                                                ? 'rgba(139, 92, 246, 0.4)'
                                                : 'rgba(124, 58, 237, 0.2)'
                                        }`,
                                    },
                                }}
                            >
                                {/* Company Header */}
                                <Box sx={{ mb: 3 }}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="flex-start"
                                        flexWrap="wrap"
                                        gap={2}
                                    >
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    mb: 0.5,
                                                    color: theme.palette.primary
                                                        .main,
                                                }}
                                            >
                                                {experience.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontWeight: 600,
                                                    mb: 0.5,
                                                }}
                                            >
                                                {experience.company}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'text.secondary',
                                                }}
                                            >
                                                {experience.location}
                                            </Typography>
                                        </Box>
                                        <Chip
                                            label={experience.period}
                                            sx={{
                                                background: darkMode
                                                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)'
                                                    : 'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                                                border: `1px solid ${
                                                    darkMode
                                                        ? 'rgba(139, 92, 246, 0.3)'
                                                        : 'rgba(124, 58, 237, 0.3)'
                                                }`,
                                                color: theme.palette.primary
                                                    .main,
                                                fontWeight: 600,
                                            }}
                                        />
                                    </Stack>
                                </Box>

                                {/* Achievements */}
                                <Box
                                    component="ul"
                                    sx={{ pl: 0, listStyle: 'none', m: 0 }}
                                >
                                    {experience.achievements.map(
                                        (achievement, idx) => (
                                            <Box
                                                component="li"
                                                key={idx}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    mb: 2,
                                                    '&:last-child': { mb: 0 },
                                                }}
                                            >
                                                <TrendingUpIcon
                                                    sx={{
                                                        color: theme.palette
                                                            .primary.main,
                                                        fontSize: 20,
                                                        mr: 1.5,
                                                        mt: 0.3,
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontSize: '0.95rem',
                                                        lineHeight: 1.7,
                                                        color: darkMode
                                                            ? 'rgba(255, 255, 255, 0.85)'
                                                            : 'rgba(0, 0, 0, 0.75)',
                                                    }}
                                                >
                                                    {achievement}
                                                </Typography>
                                            </Box>
                                        )
                                    )}
                                </Box>
                            </Paper>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutSection;
