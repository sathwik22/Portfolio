import React from 'react';
import { Typography, Box, Button, Grid, Paper } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
    return (
        <Box
            id="contact"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f9f9f9',
                px: 2,
                py: 4,
                marginLeft: '10%',
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    maxWidth: 600,
                    width: '100%',
                    p: 4,
                    borderRadius: 4,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Get in Touch
                </Typography>

                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Button
                            startIcon={<Email />}
                            variant="contained"
                            color="primary"
                            size="large"
                            href="mailto:sathwik.veeramalli@in.bosch.com"
                            sx={{ textTransform: 'none', borderRadius: 3 }}
                        >
                            Email
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            startIcon={<LinkedIn />}
                            variant="outlined"
                            size="large"
                            color="primary"
                            href="https://www.linkedin.com/in/sathwik-veeramalli"
                            target="_blank"
                            sx={{
                                textTransform: 'none',
                                borderRadius: 3,
                                '&:hover': {
                                    backgroundColor: '#e6f2ff',
                                },
                            }}
                        >
                            LinkedIn
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            startIcon={<GitHub />}
                            variant="outlined"
                            size="large"
                            color="primary"
                            href="https://github.com/sathwik22"
                            target="_blank"
                            sx={{
                                textTransform: 'none',
                                borderRadius: 3,
                                '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                },
                            }}
                        >
                            GitHub
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default Contact;
