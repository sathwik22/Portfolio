import React, { useContext } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { ActiveSectionContext } from './activesection';
const sections = ['home', 'about', 'projects', 'contact'];

const Sidebar = () => {
    const { activeSection } = useContext(ActiveSectionContext);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '200px',
                py: 4,
                px: 2,
            }}
        >
            <List>
                {sections.map((section) => (
                    <ListItem
                        key={section}
                        button
                        onClick={() => handleScroll(section)}
                        sx={{
                            borderRadius: 2,
                            my: 1,
                            bgcolor:
                                activeSection === section
                                    ? 'primary.main'
                                    : 'transparent',
                            color:
                                activeSection === section
                                    ? 'white'
                                    : 'text.primary',
                            '&:hover': {
                                bgcolor:
                                    activeSection === section
                                        ? 'primary.dark'
                                        : '#ddd',
                            },
                        }}
                    >
                        <ListItemText
                            primary={
                                section.charAt(0).toUpperCase() +
                                section.slice(1)
                            }
                            sx={{ textAlign: 'center' }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
