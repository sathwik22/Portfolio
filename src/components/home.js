import React, { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Particles from 'react-tsparticles';

const lines = [
    "Hi, I'm Veeramalli Sathwik.",
    'Frontend Developer.',
    'React Enthusiast.',
    'Exploring GenAI in Development.',
];

const fontVariants = ['h3', 'h4', 'h5', 'h6'];

const Home = () => {
    const [currentLine, setCurrentLine] = useState(0);
    const [typedLines, setTypedLines] = useState([]);

    useEffect(() => {
        let typingTimer;

        if (currentLine < lines.length) {
            const text = lines[currentLine];
            let charIndex = 0;
            let currentText = '';

            typingTimer = setInterval(() => {
                currentText += text[charIndex];
                const updatedLines = [...typedLines];
                updatedLines[currentLine] = currentText;
                setTypedLines(updatedLines);

                charIndex++;

                if (charIndex === text.length) {
                    clearInterval(typingTimer);
                    setTimeout(() => {
                        setCurrentLine((prev) => prev + 1);
                    }, 800);
                }
            }, 50);
        } else {
            // Reset all after a delay
            setTimeout(() => {
                setTypedLines([]);
                setCurrentLine(0);
            }, 2500);
        }

        return () => clearInterval(typingTimer);
    }, [currentLine]);

    return (
        <Box
            id="home"
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                px: 2,
                overflow: 'hidden',
                marginLeft: '5%',
            }}
        >
            <Particles
                id="tsparticles"
                options={{
                    fullScreen: { enable: true, zIndex: -1 },
                    particles: {
                        number: {
                            value: 80,
                            density: { enable: true, area: 800 },
                        },
                        color: { value: '#1976d2' },
                        shape: { type: 'circle' },
                        opacity: { value: 0.5 },
                        size: { value: 3 },
                        move: { enable: true, speed: 1 },
                        links: {
                            enable: true,
                            color: '#1976d2',
                            distance: 150,
                            opacity: 0.5,
                        },
                    },
                    background: {
                        color: '#f5f5f5',
                    },
                }}
            />

            <Box sx={{ zIndex: 1 }}>
                {typedLines.map((line, index) => (
                    <Typography
                        key={index}
                        variant={fontVariants[index]}
                        fontWeight={index === 0 ? 'bold' : 'normal'}
                        gutterBottom
                        sx={{
                            fontFamily: 'Roboto, sans-serif',
                        }}
                    >
                        {line}
                    </Typography>
                ))}

                {currentLine >= lines.length && (
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 4,
                            px: 4,
                            py: 1.5,
                            fontWeight: 600,
                            fontSize: '1rem',
                            transition: '0.3s ease',
                            '&:hover': {
                                backgroundColor: '#155fa0',
                            },
                        }}
                        href="#projects"
                    >
                        View My Work
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default Home;
