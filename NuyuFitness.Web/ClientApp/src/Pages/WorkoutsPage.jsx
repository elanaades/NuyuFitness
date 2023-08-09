import React from 'react';
import { Box, Container, Card, CardContent, Typography } from '@mui/material';

const WorkoutsPage = () => {
    return (
        <Container maxWidth="md">
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Card>
                    <CardContent>
                        <Typography variant="h1" fontWeight="bold" color="primary" align="center" sx={{ fontSize: { xs: '36px', md: '48px', lg: '64px' } }}>
                            Coming Soon
                        </Typography>
                        <Typography variant="h6" align="center" fontStyle="italic" sx={{ fontSize: { xs: '14px', md: '18px', lg: '24px' } }}>
                            We're working on bringing you exciting new workouts. Stay tuned!
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default WorkoutsPage;

