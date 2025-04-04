import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Contact from './components/contact';
import About from './components/about';
import Projects from './components/projects';
import Home from './components/home';
import Sidebar from './components/SideBar';
import { ActiveSectionProvider } from './components/activesection';

const App = () => {
    return (
        <Box sx={{ position: 'relative' }}>
            {/* <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 1,
                    opacity: 0.5,
                }}
            >
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

            <CssBaseline />
            <ActiveSectionProvider>
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: 3,
                        }}
                    >
                        <section id="home">
                            <Home />
                        </section>
                        <section id="about">
                            <About />
                        </section>
                        <section id="projects">
                            <Projects />
                        </section>
                        <section id="contact">
                            <Contact />
                        </section>
                    </Box>
                </Box>
            </ActiveSectionProvider>
        </Box>
    );
};

export default App;
