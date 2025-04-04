import React from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Button,
    List,
    ListItem,
    ListItemText,
    Box,
} from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListItemIcon from '@mui/material/ListItemIcon';

const Portfolio = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={4} textAlign="center" margin={'auto'}>
                    <Avatar
                        src={require('./profilephoto.jpg')}
                        sx={{ width: 120, height: 120, margin: 'auto' }}
                        alt="Profile Photo"
                    />
                    <Typography variant="h4" sx={{ mt: 2 }}>
                        Veeramalli Sathwik
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Frontend Developer
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box
                        sx={{
                            background:
                                'linear-gradient(135deg, #f5f5f5 30%, #e0e0e0 100%)',
                            p: 4,
                            borderRadius: 3,
                            boxShadow: 3,
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            gutterBottom
                            color="primary"
                        >
                            About Me
                        </Typography>
                        <List>
                            {[
                                'Joined Bosch in August 2023.',
                                'Worked at Rexroth as a Frontend Developer on the ONEX project for 1.4 years.',
                                'Joined the GenAI team in May 2024.',
                                'Became a Task Force Member of the GenAI initiative, actively leveraging GitHub Copilot in project development.',
                                'Delivered a live demo to the EAL team, showcasing the advantages of integrating GenAI in development workflows.',
                                'Since January 2025, working in the SRS team as a React Developer.',
                                'Conducted a second GenAI demo for BDO3 through the Technical Forum, highlighting its benefits in real-world projects.',
                                'Currently contributing to the SRS team by resolving Sonar issues using Copilot, enhancing unit test coverage, and exploring ways to address critical security vulnerabilities using GenAI.',
                            ].map((text, index) => {
                                const isLiveDemo = text.includes('live demo');
                                return (
                                    <ListItem key={index} sx={{ px: 2 }}>
                                        <ListItemIcon>
                                            <CheckCircleIcon color="success" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                isLiveDemo ? (
                                                    <Typography
                                                        variant="body1"
                                                        fontWeight={500}
                                                    >
                                                        Delivered a{' '}
                                                        <Typography
                                                            component="a"
                                                            href="https://sathwik22-github-io.vercel.app/intro.html"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            color="primary"
                                                            sx={{
                                                                textDecoration:
                                                                    'underline',
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            live demo
                                                        </Typography>{' '}
                                                        to the EAL team on GenAI
                                                        advantages.
                                                    </Typography>
                                                ) : (
                                                    <Typography
                                                        variant="body1"
                                                        fontWeight={500}
                                                    >
                                                        {text}
                                                    </Typography>
                                                )
                                            }
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 5 }}>
                Skills
            </Typography>
            <Grid container spacing={2}>
                {[
                    'React',
                    'JavaScript',
                    'TypeScript',
                    'CSS',
                    'Python',
                    'Machine Learning',
                    'SQL',
                ].map((skill) => (
                    <Grid item key={skill} xs={6} sm={4} md={3} lg={2}>
                        <Card
                            sx={{
                                textAlign: 'center',
                                py: 1,
                                px: 2,
                                borderRadius: 2,
                                boxShadow: 1,
                                backgroundColor: '#fafafa',
                            }}
                        >
                            <CardContent
                                sx={{ p: 0, '&:last-child': { pb: 0 } }}
                            >
                                <Typography variant="body1" fontWeight={600}>
                                    {skill}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Contact Section */}
            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                Contact
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Button
                        startIcon={<Email />}
                        variant="outlined"
                        onClick={() =>
                            (window.location.href =
                                'mailto:veeramallisathwik@gmail.com')
                        }
                    >
                        Email
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        startIcon={<LinkedIn />}
                        variant="outlined"
                        onClick={() =>
                            window.open(
                                'https://www.linkedin.com/in/veeramalli-sathwik',
                                '_blank'
                            )
                        }
                    >
                        LinkedIn
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        startIcon={<GitHub />}
                        variant="outlined"
                        onClick={() =>
                            window.open(
                                'https://github.com/sathwik22',
                                '_blank'
                            )
                        }
                    >
                        GitHub
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Portfolio;
