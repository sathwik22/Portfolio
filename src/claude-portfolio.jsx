import React, { useState, useEffect } from 'react';
import { CssBaseline, ThemeProvider, Snackbar, Alert } from '@mui/material';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { getTheme, getBackgroundStyle } from './utils/theme';
import { heroLines } from './utils/constants';

function Portfolio() {
    const [darkMode, setDarkMode] = useState(true);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [activeSection, setActiveSection] = useState('home');
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    // Create theme based on dark mode
    const theme = getTheme(darkMode);

    // Implement typing effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLineIndex(
                (prevIndex) => (prevIndex + 1) % heroLines.length
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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

    // Handle snackbar close
    const handleCloseSnackbar = () => {
        setSnackbar({
            ...snackbar,
            open: false,
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* Animated background */}
            <div style={getBackgroundStyle(darkMode)}></div>

            {/* Navigation Bar */}
            <NavigationBar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                theme={theme}
            />

            {/* Hero Section */}
            <HeroSection
                currentLine={heroLines[currentLineIndex]}
                darkMode={darkMode}
                scrollToSection={scrollToSection}
                theme={theme}
            />

            {/* About Section */}
            <AboutSection darkMode={darkMode} theme={theme} />

            {/* Skills Section */}
            <SkillsSection darkMode={darkMode} theme={theme} />

            {/* Projects Section */}
            <ProjectsSection darkMode={darkMode} theme={theme} />

            {/* Contact Section */}
            <ContactSection darkMode={darkMode} theme={theme} />

            {/* Footer */}
            <Footer />

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
