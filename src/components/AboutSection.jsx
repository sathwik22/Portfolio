import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Divider,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import profilePhoto from '../profilephoto.jpg';
import {
    personalInfo,
    aboutDescription,
    experienceItems,
} from '../utils/constants';

const AboutSection = ({ darkMode, theme }) => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = personalInfo.resumePath;
        link.download = 'My_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box id="about" sx={{ py: 10, scrollMarginTop: '64px' }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 'bold',
                        }}
                    >
                        About Me
                    </Typography>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                        Who I Am
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

                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={5} margin={'auto'}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Paper
                                elevation={darkMode ? 6 : 1}
                                sx={{
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(255,255,255,0.05)'
                                            : 'rgba(0,0,0,0.05)'
                                    }`,
                                    width: 180,
                                    height: 180,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: darkMode
                                        ? 'rgba(255,255,255,0.05)'
                                        : 'rgba(0,0,0,0.05)',
                                }}
                            >
                                <img
                                    src={profilePhoto}
                                    alt="Profile"
                                    style={{
                                        width: '90%',
                                        height: '90%',
                                        objectFit: 'cover',
                                        borderRadius: '50%',
                                    }}
                                />
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 4,
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                            }}
                        >
                            {aboutDescription}
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{ mb: 2, fontWeight: 600 }}
                        >
                            Experience Highlights:
                        </Typography>
                        <Box sx={{ mb: 4 }}>
                            <List dense>
                                {experienceItems.map((item, index) => (
                                    <ListItem key={index} sx={{ py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: '30px' }}>
                                            <WorkIcon
                                                fontSize="small"
                                                sx={{
                                                    color: theme.palette.primary
                                                        .main,
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        <Grid container spacing={2} sx={{ mb: 4 }}>
                            <Grid item xs={12} sm={6}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PersonIcon
                                                sx={{
                                                    color: theme.palette.primary
                                                        .main,
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Name"
                                            secondary={personalInfo.name}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <EmailIcon
                                                sx={{
                                                    color: theme.palette.primary
                                                        .main,
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Email"
                                            secondary={personalInfo.email}
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <WorkIcon
                                                sx={{
                                                    color: theme.palette.primary
                                                        .main,
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Experience"
                                            secondary={`Since ${personalInfo.experienceSince}`}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <SchoolIcon
                                                sx={{
                                                    color: theme.palette.primary
                                                        .main,
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="College"
                                            secondary={personalInfo.college}
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>

                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<CodeIcon />}
                            sx={{
                                py: 1.5,
                                px: 3,
                                borderRadius: 8,
                                boxShadow: darkMode
                                    ? '0 0 15px rgba(187, 134, 252, 0.3)'
                                    : 'none',
                            }}
                            onClick={handleDownloadResume}
                        >
                            Download Resume
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutSection;
