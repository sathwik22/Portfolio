import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Divider,
    Grid,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    TextField,
    ThemeProvider,
    Toolbar,
    Typography,
    createTheme,
    Snackbar,
    Alert,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import PreviewIcon from '@mui/icons-material/Preview';
import SmartToyIcon from '@mui/icons-material/SmartToy';

function Portfolio() {
    const [darkMode, setDarkMode] = useState(true);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [activeSection, setActiveSection] = useState('home');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    // Use your content
    const lines = [
        "Hi, I'm Veeramalli Sathwik.",
        'Frontend Developer.',
        'React Enthusiast.',
        'Exploring GenAI in Development.',
    ];

    const projectData = [
        {
            title: 'ONEX @ Rexroth',
            description:
                '"Built a modern, responsive dashboard for Rexroth using React and MUI, enabling users to navigate key links and add any page as a custom favorite. Leveraged GenAI for code optimization and unit testing, achieving a 30% productivity boost. Collaborated with the Bosch Rexroth team to enhance user experience and accessibility.',
            technologies: ['React-admin', 'MUI', 'Jest', 'cypress'],
            image: '/rexroth.PNG',
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
            image: '/ford-rotunda.PNG',
            feedback: '',
            demo: '#',
            genAIProductivity:
                'https://contactservicesolutions.atlassian.net/wiki/spaces/SRSCOR/pages/5171150849/OE+s+-+Unit+Testing+Initiative',
        },
    ];

    const experienceItems = [
        'Joined Bosch in August 2023.',
        'Worked at Rexroth as a Frontend Developer on the ONEX project.',
        'Task Force Member of the GenAI initiative.',
        'Actively leveraging GitHub Copilot in project development.',
        'Joined the GenAI team in May 2024.',
        'Delivered a live demo to the EAL team showcasing GenAI advantages.',
        'Currently working in the SRS team as a React Developer since Jan 2025.',
        'Improving unit test coverage and resolving Sonar issues with GenAI.',
    ];

    const skills = [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Material-UI', level: 85 },
        { name: 'Unit Testing (Jest)', level: 80 },
        { name: 'GenAI Integration', level: 85 },
    ];

    // Create a theme instance with dark/light mode
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#BB86FC' : '#6200EE',
            },
            secondary: {
                main: darkMode ? '#03DAC6' : '#03DAC6',
            },
            background: {
                default: darkMode ? '#121212' : '#f5f5f5',
                paper: darkMode ? '#1E1E1E' : '#ffffff',
            },
        },
        typography: {
            fontFamily: "'Poppins', sans-serif",
            h1: {
                fontWeight: 700,
            },
            h2: {
                fontWeight: 600,
            },
        },
        shape: {
            borderRadius: 12,
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        boxShadow: darkMode
                            ? '0 4px 20px rgba(0,0,0,0.5)'
                            : '0 2px 10px rgba(0,0,0,0.1)',
                    },
                },
            },
        },
    });

    // Implement typing effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [lines.length]);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Handle navigation
    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Form handling
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setSnackbar({
                open: true,
                message: 'Please fill all required fields',
                severity: 'error',
            });
            return;
        }

        // Simulate form submission
        console.log('Form Data:', formData);
        setSnackbar({
            open: true,
            message: 'Message sent successfully!',
            severity: 'success',
        });

        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({
            ...snackbar,
            open: false,
        });
    };

    // Animated background style
    const backgroundStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: darkMode
            ? `radial-gradient(circle at 20% 30%, rgba(76, 29, 149, 0.15) 0%, rgba(0, 0, 0, 0) 70%),
         radial-gradient(circle at 80% 10%, rgba(124, 58, 237, 0.1) 0%, rgba(0, 0, 0, 0) 70%)`
            : `radial-gradient(circle at 20% 30%, rgba(219, 234, 254, 0.4) 0%, rgba(0, 0, 0, 0) 70%),
         radial-gradient(circle at 80% 10%, rgba(224, 242, 254, 0.4) 0%, rgba(0, 0, 0, 0) 70%)`,
        zIndex: -1,
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* Animated background */}
            <div style={backgroundStyle}></div>

            {/* App bar */}
            <AppBar
                position="sticky"
                elevation={darkMode ? 4 : 1}
                color="default"
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, fontWeight: 700 }}
                    >
                        Veeramalli Sathwik
                    </Typography>

                    <IconButton
                        onClick={toggleDarkMode}
                        color="inherit"
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            color: darkMode ? '#121212' : '#ffffff',
                            '&:hover': {
                                bgcolor: theme.palette.primary.dark,
                            },
                            mr: 2,
                        }}
                    >
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>

                    <Button
                        color="inherit"
                        variant={
                            activeSection === 'about' ? 'contained' : 'outlined'
                        }
                        sx={{ mr: 1 }}
                        onClick={() => scrollToSection('about')}
                    >
                        About
                    </Button>
                    <Button
                        color="inherit"
                        variant={
                            activeSection === 'projects'
                                ? 'contained'
                                : 'outlined'
                        }
                        sx={{ mr: 1 }}
                        onClick={() => scrollToSection('projects')}
                    >
                        Projects
                    </Button>
                    <Button
                        color="inherit"
                        variant={
                            activeSection === 'contact'
                                ? 'contained'
                                : 'outlined'
                        }
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Hero section */}
            <Box
                id="home"
                sx={{
                    position: 'relative',
                    height: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage:
                        'url(https://via.placeholder.com/1920x1080)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: darkMode
                            ? 'linear-gradient(to right, rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.6))'
                            : 'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6))',
                    },
                }}
            >
                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={7}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: theme.palette.primary.main,
                                    fontWeight: 'bold',
                                }}
                            >
                                Welcome to my portfolio
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '3rem', md: '4rem' },
                                    mb: 2,
                                }}
                            >
                                {lines[currentLineIndex]}
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{ mb: 4, opacity: 0.8 }}
                            >
                                Full Stack Developer & GenAI Enthusiast
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{
                                    mr: 2,
                                    py: 1.5,
                                    px: 4,
                                    borderRadius: 8,
                                    boxShadow: darkMode
                                        ? '0 0 15px rgba(187, 134, 252, 0.3)'
                                        : 'none',
                                }}
                                onClick={() => scrollToSection('projects')}
                            >
                                View Projects
                            </Button>

                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                sx={{ py: 1.5, px: 4, borderRadius: 8 }}
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact Me
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* About section */}
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
                        <Grid item xs={12} md={5}>
                            <Paper
                                elevation={darkMode ? 6 : 1}
                                sx={{
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(255,255,255,0.05)'
                                            : 'rgba(0,0,0,0.05)'
                                    }`,
                                    transform: 'rotate(0deg)',
                                }}
                            >
                                <img
                                    src={require('./profilephoto.jpg')}
                                    alt="Profile"
                                    style={{ width: '30%', display: 'block' }}
                                />
                            </Paper>
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
                                I'm a passionate Frontend Developer specializing
                                in React and modern JavaScript frameworks, with
                                a strong focus on integrating Generative AI
                                tools to enhance development workflows. My
                                expertise spans application development, UI/UX
                                design, and implementing efficient testing
                                strategies.
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
                                            <ListItemIcon
                                                sx={{ minWidth: '30px' }}
                                            >
                                                <WorkIcon
                                                    fontSize="small"
                                                    sx={{
                                                        color: theme.palette
                                                            .primary.main,
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
                                                        color: theme.palette
                                                            .primary.main,
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Name"
                                                secondary="Veeramalli Sathwik"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EmailIcon
                                                    sx={{
                                                        color: theme.palette
                                                            .primary.main,
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Email"
                                                secondary="veeramallisathwik@gmail.com"
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
                                                        color: theme.palette
                                                            .primary.main,
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Experience"
                                                secondary="Since August 2023"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <SchoolIcon
                                                    sx={{
                                                        color: theme.palette
                                                            .primary.main,
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Collage"
                                                secondary="Indian Institue of Technology, Hyderabad"
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
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href =
                                        '/Veeramalli_Sathwik_Resume.pdf';
                                    link.download = 'My_Resume.pdf';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                            >
                                Download Resume
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Skills section */}
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

            {/* Projects section */}
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
                                        <Typography
                                            variant="h5"
                                            component="div"
                                            gutterBottom
                                        >
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
                                            {project.technologies.map(
                                                (tech, i) => (
                                                    <Typography
                                                        key={i}
                                                        variant="caption"
                                                        sx={{
                                                            py: 0.5,
                                                            px: 1.5,
                                                            borderRadius: 10,
                                                            backgroundColor:
                                                                darkMode
                                                                    ? 'rgba(187, 134, 252, 0.1)'
                                                                    : 'rgba(98, 0, 238, 0.1)',
                                                            color: theme.palette
                                                                .primary.main,
                                                            border: `1px solid ${
                                                                darkMode
                                                                    ? 'rgba(187, 134, 252, 0.3)'
                                                                    : 'rgba(98, 0, 238, 0.3)'
                                                            }`,
                                                        }}
                                                    >
                                                        {tech}
                                                    </Typography>
                                                )
                                            )}
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{ p: 2, pt: 0 }}>
                                        {project.demo &&
                                            project.demo !== '#' && (
                                                <Button
                                                    size="small"
                                                    color="primary"
                                                    startIcon={<PreviewIcon />}
                                                    onClick={() =>
                                                        window.open(
                                                            project.demo,
                                                            '_blank'
                                                        )
                                                    }
                                                >
                                                    Demo
                                                </Button>
                                            )}
                                        {project.feedback && (
                                            <Button
                                                size="small"
                                                color="primary"
                                                startIcon={<LinkIcon />}
                                                onClick={() =>
                                                    window.open(
                                                        project.feedback,
                                                        '_blank'
                                                    )
                                                }
                                            >
                                                Feedback
                                            </Button>
                                        )}
                                        {project.genAIProductivity && (
                                            <Button
                                                size="small"
                                                color="secondary"
                                                startIcon={<SmartToyIcon />}
                                                onClick={() =>
                                                    window.open(
                                                        project.genAIProductivity,
                                                        '_blank'
                                                    )
                                                }
                                            >
                                                GenAI Impact
                                            </Button>
                                        )}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Contact section */}
            <Box
                id="contact"
                sx={{
                    py: 10,
                    backgroundColor: darkMode
                        ? 'rgba(30, 30, 30, 0.6)'
                        : 'rgba(240, 240, 240, 0.6)',
                    scrollMarginTop: '64px',
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
                            Get In Touch
                        </Typography>
                        <Typography variant="h2" sx={{ mb: 2 }}>
                            Contact Me
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

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={8}>
                            <Paper
                                elevation={darkMode ? 8 : 2}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    background: darkMode
                                        ? 'linear-gradient(145deg, #1e1e1e, #232323)'
                                        : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                                    border: `1px solid ${
                                        darkMode
                                            ? 'rgba(255,255,255,0.05)'
                                            : 'rgba(0,0,0,0.05)'
                                    }`,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        mb: 4,
                                        gap: 2,
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            p: 2,
                                            backgroundColor:
                                                theme.palette.primary.main,
                                            color: darkMode
                                                ? '#121212'
                                                : '#ffffff',
                                            '&:hover': {
                                                backgroundColor:
                                                    theme.palette.primary.dark,
                                            },
                                        }}
                                        onClick={() =>
                                            window.open(
                                                'https://www.linkedin.com/in/sathwik-veeramalli',
                                                '_blank'
                                            )
                                        }
                                    >
                                        <LinkedInIcon fontSize="medium" />
                                    </IconButton>
                                    <IconButton
                                        sx={{
                                            p: 2,
                                            backgroundColor:
                                                theme.palette.primary.main,
                                            color: darkMode
                                                ? '#121212'
                                                : '#ffffff',
                                            '&:hover': {
                                                backgroundColor:
                                                    theme.palette.primary.dark,
                                            },
                                        }}
                                        onClick={() =>
                                            window.open(
                                                'https://github.com/sathwik22',
                                                '_blank'
                                            )
                                        }
                                    >
                                        <GitHubIcon fontSize="medium" />
                                    </IconButton>
                                    <IconButton
                                        sx={{
                                            p: 2,
                                            backgroundColor:
                                                theme.palette.primary.main,
                                            color: darkMode
                                                ? '#121212'
                                                : '#ffffff',
                                            '&:hover': {
                                                backgroundColor:
                                                    theme.palette.primary.dark,
                                            },
                                        }}
                                        onClick={() =>
                                            (window.location.href =
                                                'mailto:veeramallisathwik@gmail.com')
                                        }
                                    >
                                        <EmailIcon fontSize="medium" />
                                    </IconButton>
                                </Box>

                                {/* <Typography
                                    variant="body1"
                                    textAlign="center"
                                    sx={{ mb: 4 }}
                                >
                                    I'm currently open to new opportunities in
                                    frontend development, particularly those
                                    involving React and GenAI integration. If
                                    you have a project or position that aligns
                                    with my skills, please reach out!
                                </Typography> */}

                                {/* <Box
                                    component="form"
                                    noValidate
                                    onSubmit={handleFormSubmit}
                                    sx={{ mt: 3 }}
                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Your Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleFormChange}
                                                variant="outlined"
                                                required
                                                InputProps={{
                                                    sx: {
                                                        borderRadius: 2,
                                                        backgroundColor:
                                                            'transparent',
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Your Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleFormChange}
                                                variant="outlined"
                                                required
                                                InputProps={{
                                                    sx: {
                                                        borderRadius: 2,
                                                        backgroundColor:
                                                            'transparent',
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleFormChange}
                                                variant="outlined"
                                                InputProps={{
                                                    sx: {
                                                        borderRadius: 2,
                                                        backgroundColor:
                                                            'transparent',
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Your Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleFormChange}
                                                variant="outlined"
                                                multiline
                                                rows={6}
                                                required
                                                InputProps={{
                                                    sx: {
                                                        borderRadius: 2,
                                                        backgroundColor:
                                                            'transparent',
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sx={{ textAlign: 'center', mt: 2 }}
                                        >
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                sx={{
                                                    py: 1.5,
                                                    px: 4,
                                                    borderRadius: 8,
                                                    minWidth: '200px',
                                                    boxShadow: darkMode
                                                        ? '0 0 15px rgba(187, 134, 252, 0.3)'
                                                        : 'none',
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box> */}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ py: 4, textAlign: 'center' }}>
                <Container>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} Veeramalli Sathwik. All
                        rights reserved.
                    </Typography>
                </Container>
            </Box>

            {/* Snackbar for notifications */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}

export default Portfolio;
