import React from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PATCLogo from '../assets/PATCLogo.jpg';

const ImageContainer = styled('div')({
    textAlign: 'center',
    marginTop: '20px',
});

const PATCPage = () => {
    return (
        <Box>
            <br/><br/>
            <Container maxWidth="lg">
                {/* Title */}
                <Box py={4}>
                    <Typography
                        variant="h3"
                        component="h1"
                        color="primary"
                        align="center"
                        fontWeight="bold"
                        gutterBottom
                    >
                        Park Avenue Tennis Center
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        fontWeight="bold"
                        fontStyle="italic"
                        gutterBottom
                    >
                        nuYu Fitness is located on the 2nd Floor of the Park Avenue Tennis Center
                    </Typography>
                </Box>

                {/* Logo */}
                <ImageContainer>
                    <img src={PATCLogo} alt="PATC Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                </ImageContainer>

                {/* Content */}
                <Box textAlign="center" py={4}>
                    <Typography variant="body1">
                        All Ages, All Levels, All Welcome
                    </Typography>
                </Box>

                <Box textAlign="center">
                    <Paper sx={{ p: 2, background:'none', boxShadow: 'none'}}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                            Services Include:
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                            World Class Indoor Tennis Courts
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                            Tennis Lessons with a Pro
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                            Adult Programs
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                            Junior Programs
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                            Summer Camp
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Visit <a href="https://www.parkavenuetennis.com/" target="_blank" rel="noopener noreferrer">https://www.parkavenuetennis.com/</a> for more information.
                        </Typography>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default PATCPage;
