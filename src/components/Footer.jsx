import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ py: 4, textAlign: 'center' }}>
            <Container>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Veeramalli Sathwik. All rights
                    reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
