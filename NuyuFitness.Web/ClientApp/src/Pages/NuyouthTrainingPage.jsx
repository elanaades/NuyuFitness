import React from 'react';
import { Box, Container } from '@mui/material';
import nuYouthFlyer from '../assets/nuYouthFlyer.png';

const nuYouthTrainingPage = () => {
    return (
        <Box py={4} textAlign="center">
            <Container maxWidth="md">
                <img src={nuYouthFlyer} alt="nuYouthFlyer" style={{ width: '100%', height: 'auto' }} />
            </Container>
        </Box>
    );
};

export default nuYouthTrainingPage;

