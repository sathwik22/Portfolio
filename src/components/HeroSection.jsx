import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Chip,
    Avatar,
} from '@mui/material';
import { keyframes } from '@mui/system';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import profilePhoto from '../profilephoto.jpg';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const gradientAnimation = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const HeroSection = ({ currentLine, darkMode, scrollToSection, theme }) => {
    return (
        <Box
            id="home"
            sx={{
                minHeight: '115vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                pt: { xs: 12, md: 8 },
                pb: 8,
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: { xs: 6, md: 8 },
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {/* Left Content */}
                    <Box
                        sx={{
                            flex: 1,
                            animation: `${fadeInUp} 1s ease-out`,
                        }}
                    >
                        {/* Badge */}
                        <Box sx={{ mb: 3 }}>
                            <Chip
                                icon={
                                    <RocketLaunchIcon sx={{ fontSize: 18 }} />
                                }
                                label="Available for opportunities"
                                sx={{
                                    background: darkMode
                                        ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)'
                                        : 'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                                    backdropFilter: 'blur(10px)',
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(139, 92, 246, 0.3)'
                                            : 'rgba(124, 58, 237, 0.3)'
                                    }`,
                                    color: theme.palette.primary.main,
                                    fontWeight: 600,
                                    py: 2.5,
                                    px: 1,
                                    fontSize: '0.875rem',
                                }}
                            />
                        </Box>

                        {/* Main Heading */}
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: {
                                    xs: '2.5rem',
                                    sm: '3.5rem',
                                    md: '4.5rem',
                                    lg: '5rem',
                                },
                                fontWeight: 800,
                                lineHeight: 1.1,
                                mb: 2,
                                background: darkMode
                                    ? 'linear-gradient(135deg, #FFFFFF 0%, #A78BFA 50%, #EC4899 100%)'
                                    : 'linear-gradient(135deg, #1E293B 0%, #7C3AED 50%, #EC4899 100%)',
                                backgroundSize: '200% 200%',
                                animation: `${gradientAnimation} 8s ease infinite`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: darkMode
                                    ? '0 0 40px rgba(139, 92, 246, 0.3)'
                                    : 'none',
                            }}
                        >
                            {currentLine}
                        </Typography>

                        {/* Subtitle */}
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: { xs: '1.25rem', md: '1.75rem' },
                                mb: 3,
                                fontWeight: 600,
                                color: darkMode
                                    ? 'rgba(255, 255, 255, 0.8)'
                                    : 'rgba(0, 0, 0, 0.7)',
                            }}
                        >
                            Full Stack Developer & GenAI Enthusiast
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                mb: 4,
                                color: darkMode
                                    ? 'rgba(255, 255, 255, 0.6)'
                                    : 'rgba(0, 0, 0, 0.6)',
                                maxWidth: '600px',
                                lineHeight: 1.8,
                            }}
                        >
                            Building exceptional digital experiences with React
                            & AI. Passionate about creating innovative solutions
                            at the intersection of technology and design.
                        </Typography>

                        {/* Social Proof Badges */}
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}
                        >
                            <Chip
                                label="🎓 IIT Hyderabad"
                                size="medium"
                                sx={{
                                    bgcolor: darkMode
                                        ? 'rgba(139, 92, 246, 0.1)'
                                        : 'rgba(124, 58, 237, 0.1)',
                                    color: theme.palette.primary.main,
                                    fontWeight: 600,
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(139, 92, 246, 0.2)'
                                            : 'rgba(124, 58, 237, 0.2)'
                                    }`,
                                }}
                            />
                            <Chip
                                label="💼 Bosch"
                                size="medium"
                                sx={{
                                    bgcolor: darkMode
                                        ? 'rgba(6, 182, 212, 0.1)'
                                        : 'rgba(8, 145, 178, 0.1)',
                                    color: theme.palette.secondary.main,
                                    fontWeight: 600,
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(6, 182, 212, 0.2)'
                                            : 'rgba(8, 145, 178, 0.2)'
                                    }`,
                                }}
                            />
                            <Chip
                                label="🤖 GenAI Expert"
                                size="medium"
                                sx={{
                                    bgcolor: darkMode
                                        ? 'rgba(236, 72, 153, 0.1)'
                                        : 'rgba(236, 72, 153, 0.1)',
                                    color: '#EC4899',
                                    fontWeight: 600,
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(236, 72, 153, 0.2)'
                                            : 'rgba(236, 72, 153, 0.2)'
                                    }`,
                                }}
                            />
                        </Stack>

                        {/* CTA Buttons */}
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => scrollToSection('projects')}
                                sx={{
                                    px: 4,
                                    py: 1.8,
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    background: darkMode
                                        ? 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)'
                                        : 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                                    '&:hover': {
                                        background: darkMode
                                            ? 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)'
                                            : 'linear-gradient(135deg, #8B5CF6 0%, #F472B6 100%)',
                                    },
                                }}
                            >
                                View My Work
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => scrollToSection('contact')}
                                sx={{
                                    px: 4,
                                    py: 1.8,
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    borderWidth: 2,
                                    borderColor: theme.palette.primary.main,
                                    color: theme.palette.primary.main,
                                    '&:hover': {
                                        borderWidth: 2,
                                        borderColor:
                                            theme.palette.primary.light,
                                        bgcolor: darkMode
                                            ? 'rgba(139, 92, 246, 0.1)'
                                            : 'rgba(124, 58, 237, 0.05)',
                                    },
                                }}
                            >
                                Let's Connect
                            </Button>
                        </Stack>
                    </Box>

                    {/* Right Content - Profile Image */}
                    <Box
                        sx={{
                            flex: { xs: 0, md: 0.8 },
                            display: 'flex',
                            justifyContent: 'center',
                            animation: `${fadeInUp} 1s ease-out 0.3s both`,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                animation: `${float} 6s ease-in-out infinite`,
                            }}
                        >
                            {/* Gradient Glow Background */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: -20,
                                    background: darkMode
                                        ? 'linear-gradient(135deg, #8B5CF6, #EC4899, #06B6D4)'
                                        : 'linear-gradient(135deg, #A78BFA, #F472B6, #22D3EE)',
                                    borderRadius: '50%',
                                    filter: 'blur(40px)',
                                    opacity: 0.6,
                                    animation: `${gradientAnimation} 8s ease infinite`,
                                    backgroundSize: '200% 200%',
                                }}
                            />

                            {/* Profile Avatar */}
                            <Avatar
                                src={profilePhoto}
                                alt="Veeramalli Sathwik"
                                sx={{
                                    width: { xs: 280, sm: 320, md: 360 },
                                    height: { xs: 280, sm: 320, md: 360 },
                                    border: `4px solid ${
                                        darkMode
                                            ? 'rgba(139, 92, 246, 0.3)'
                                            : 'rgba(124, 58, 237, 0.3)'
                                    }`,
                                    boxShadow: darkMode
                                        ? '0 20px 60px rgba(139, 92, 246, 0.4)'
                                        : '0 20px 60px rgba(124, 58, 237, 0.3)',
                                    position: 'relative',
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Scroll Indicator */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 40,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        animation: `${float} 3s ease-in-out infinite`,
                        cursor: 'pointer',
                    }}
                    onClick={() => scrollToSection('about')}
                >
                    <ArrowDownwardIcon
                        sx={{
                            fontSize: 32,
                            color: theme.palette.primary.main,
                            opacity: 0.6,
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
