import React, { useState } from 'react';
import { Box, Typography, Container, Card, CardContent, Button, Divider, Paper} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom';

const NewClientOptionsPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <br /> <br />
            {/* Page Title */}
            <Container maxWidth="lg">
                <Box py={4}>
                    <Typography variant="h3" component="h1" color="primary" align="center" fontWeight="bold" gutterBottom>
                        New Client Options
                    </Typography>
                </Box>
            </Container>


            {/* Cards Section */}
            <Box py={4}>
                <Container maxWidth="lg">
                    <Typography variant="body1" align="center" gutterBottom>
                        New clients can only choose one introductory option:
                    </Typography>

                    <Box py={4} display="flex" justifyContent="center">
                        <Container maxWidth="lg">
                            <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} gap={2}>
                                {/* Card 1 */}
                                <Paper
                                    sx={{
                                        width: '100%',
                                        p: 2,
                                        textAlign: 'center',
                                        flex: 1,
                                        background: 'none',
                                        boxShadow: 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                    elevation={0}
                                >
                                    <Typography variant="h5" component="h2" sx={{ marginBottom: 1 }}>
                                        Two Weeks Free
                                    </Typography>
                                    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                90m Consult
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                Two Weeks of Fit Club (Unlimited Classes)
                                            </Typography>
                                        </li>
                                    </Box>
                                </Paper>

                                {isMobile ? (
                                    // Horizontal Divider for mobile
                                    <Divider sx={{ width: '100%', mt: 2, mb: 2 }} > OR </Divider>
                                ) : (
                                    // Vertical Divider for desktop
                                        <Divider orientation="vertical" flexItem >OR </Divider>
                                )}

                                {/* Card 2 */}
                                <Paper
                                    sx={{
                                        width: '100%',
                                        p: 2,
                                        textAlign: 'center',
                                        flex: 1,
                                        background: 'none',
                                        boxShadow: 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                    elevation={0}
                                >
                                    <Typography variant="h5" component="h2" sx={{ marginBottom: 1 }}>
                                        Fit Club Trial: $112
                                    </Typography>
                                    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                90m Consult
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                1 Month of Fit Club (Unlimited Classes)
                                            </Typography>
                                        </li>
                                    </Box>
                                </Paper>
                            </Box>
                        </Container>
                    </Box>

                    <Box textAlign="center" py={4}>
                        <Button
                            component={Link}
                            to="/appointments"
                            variant="contained"
                            color="primary"
                        >
                            Click Here to Get Started
                        </Button>
                    </Box>

                </Container>
            </Box >

            {/* Additional Text */}
            <Box bgcolor="#f5f5f5" py={4}>
                <Container maxWidth="md">
                    <Typography variant="h5" component="h2" sx={{ marginBottom: 1, textAlign: 'center'}}>90 Minute Consult</Typography>
                    <br/>
                    <Typography variant="body1" gutterBottom>
                        The first step to a nuYu!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        This is an informal office visit to determine your current level of health, pertinent history, and discuss what it is you're looking for and if we can help you find it.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Meeting agenda includes:
                    </Typography>
                    <ul>
                        <li>Meet and Greet with Coach Tom</li>
                        <li>Initial Discovery and Fact Finding Interview</li>
                        <li>Baseline Measurements and InBody 570 BCA</li>
                        <li>Program Design</li>
                    </ul>
                    <Typography variant="body1" gutterBottom>
                        We will work together to develop a thorough and fully actionable plan so you can turn your “I want’s” into “I did’s”.
                    </Typography>
                    <Typography variant="body1" fontStyle="italic" gutterBottom>
                        Dress comfortably.
                    </Typography>


                    <br/><br/>
                    <Typography variant="body1" fontWeight="bold" gutterBottom>
                        We are committed to helping as many people as possible live their best healthiest lives, and we sincerely hope that you join our community.
                    </Typography>
                    <br />
                    <Typography variant="body1" gutterBottom>
                        ~ Coach Tom & the nuYu Fitness Team
                    </Typography>
                </Container>
            </Box >
        </Box >
    );
};

export default NewClientOptionsPage;
