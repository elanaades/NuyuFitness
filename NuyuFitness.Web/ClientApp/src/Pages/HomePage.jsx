import React, { useEffect } from 'react';
import { Box, Typography, Button, Container, Card, CardContent, Paper, useTheme, alpha, Divider, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ClassStockPhoto from '../assets/ClassStockPhoto.jpg';
import inBodyImage from '../assets/inBodyImage.png';
import useMediaQuery from '@mui/material/useMediaQuery';

const HomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const primaryColor = theme.palette.primary.main;
    const fadedPrimaryColor = alpha(primaryColor, 0.5);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://d1yw3duy3i4qiv.cloudfront.net/js/sdk-v1.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            FRED.init({
                locationId: "a80e45ef-bf76-46c0-9c14-4cb8cceac7fc",
                perPage: 5,
                layout: "list",
                background: "ffffff",
                titleHexColor: "98bF64",
                starHexColor: "fcc415"
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <Box >
            {/* Hero/Banner Section */}
            <Box bgcolor="#f5f5f5" py={4}>
                <br />
                <br />
                <br />

                <Container maxWidth="xl">
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                textAlign: 'center',
                                fontSize: 'clamp(20px, 5vw, 32px)',
                            }}
                            gutterBottom
                        >
                            <Box component="span" fontSize="clamp(20px, 5vw, 40px)">
                                are you ready for
                            </Box>
                        </Typography>

                        <Typography
                            variant="h1"
                            color="primary"
                            sx={{
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                fontSize: 'clamp(60px, 15vw, 180px)',
                                textAlign: 'center',
                                marginBottom: '0.5rem'
                            }}
                            gutterBottom
                        >
                            a new you
                        </Typography>

                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: 'clamp(18px, 5vw, 64px)',
                                textAlign: 'center',
                                marginBottom: '1rem',
                            }}
                            gutterBottom
                        >
                            Happier. Healthier. Stronger.
                        </Typography>
                    </Box>

                    {!isMobile ? <>< br /><br /><br /></> : < br />}

                    <Box mt={4} sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: 'clamp(16px, 3vw, 24px)',
                            }}
                        >
                            Schedule a Free 90-Minute Consultation
                        </Typography>
                        <br />

                        <Box display="flex" justifyContent="center" mt={2}>
                            <Button
                                component={Link}
                                to="/appointments"
                                variant="contained"
                                color="primary"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: fadedPrimaryColor,
                                    },
                                }}
                            >
                                Schedule Now
                            </Button>
                        </Box>
                    </Box>
                </Container>

                <br />
                <br />
            </Box>


            {/* Cards Section */}
            <Box py={4}>
                <Container maxWidth="xl">
                    <Typography variant="h3" component="h3" color="primary" gutterBottom align="center" sx={{ marginTop: 3, fontWeight: 'bold' }}>
                        Services
                    </Typography>
                    <br />
                    <Box py={4} display="flex" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box display="flex" alignItems="flex-start" flexDirection={isMobile ? 'column' : 'row'} gap={2}>
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
                                        Personal Training
                                    </Typography>
                                    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                Individualized workouts designed to help you reach your specific health & fitness goals.
                                            </Typography>
                                        </li>
                                    </Box>
                                </Paper>

                                {isMobile ? (
                                    <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
                                ) : (
                                    <Divider orientation="vertical" flexItem />
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
                                        Small Group Training
                                    </Typography>
                                    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                45 minute sessions with various styles and formats.
                                                A fun way to get in your daily exercise! Don’t be shy, all classes can be modified and scaled for skill and ability.
                                            </Typography>
                                        </li>
                                    </Box>
                                </Paper>

                                {isMobile ? (
                                    <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
                                ) : (
                                    <Divider orientation="vertical" flexItem />
                                )}

                                {/* Card 3 */}
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
                                        Semi-Private Training
                                    </Typography>
                                    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                Personal Training with a twist; exercise with friends in a private 2-4 on 1 setting for some extra motivation.
                                            </Typography>
                                        </li>
                                    </Box>
                                </Paper>

                                {isMobile ? (
                                    <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
                                ) : (
                                    <Divider orientation="vertical" flexItem />
                                )}

                                {/* Card 4 */}
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
                                        Nutrition
                                    </Typography>
                                    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                        <li>
                                            <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                                Work with a Certified Health & Nutrition Coach and Weight Loss Specialist to reach your goals safely and permanently.
                                            </Typography>
                                        </li>
                                    </Box>
                                </Paper>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box >


            <Box display="flex" justifyContent="center" mt={2}>
                <Button
                    component={Link}
                    to="/services-pricing"
                    variant="contained"
                    color="primary"
                    sx={{
                        '&:hover': {
                            backgroundColor: fadedPrimaryColor,
                        },
                    }}
                >
                    View All Services & Pricing
                </Button>
            </Box>

            <br /><br />


            {/* Promo Section */}
            <Box bgcolor="#f5f5f5" py={4}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h3" color="primary" gutterBottom align="center" sx={{ marginTop: 3, fontWeight: 'bold' }}>
                        Promos
                    </Typography>
                    <br />

                    <Box
                        display="flex"
                        justifyContent="center"
                        flexWrap="wrap"
                        alignItems="flex-start"
                        gap="16px"
                        mb={4}
                    >
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
                                Refer a Friend
                            </Typography>
                            <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                <li>
                                    <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                        *Discount applied for each referral with an active Fit Club Membership
                                        (i.e. 2 referrals is $10 off, 3 referrals is $15 off, etc)
                                    </Typography>
                                </li>
                            </Box>
                        </Paper>

                        {isMobile ? (
                            <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
                        ) : (
                            <Divider orientation="vertical" flexItem />
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
                                New Clients
                            </Typography>
                            <Box component="ul" sx={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                                <li>
                                    <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                        2 Weeks of Unlimited Classes
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={{ fontSize: '14px' }}>
                                        1 Month of Unlimited Classes for Only $112
                                    </Typography>
                                </li>
                            </Box>
                            <Box display="flex" justifyContent="center" mt={2}>
                                <Button
                                    component={Link}
                                    to="/new-client-options"
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    sx={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                        },
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Box>

                        </Paper>
                    </Box>
                </Container>
            </Box>

            {/* Learn Your Body Section */}
            <br /><br />
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" alignItems="center" py={4}>
                    {isMobile ? (
                        <Box width="100%">
                            <Typography
                                variant="h3"
                                color="primary"
                                gutterBottom
                                sx={{
                                    fontSize: 'clamp(24px, 10vw, 36px)', // Adjust the font size as needed
                                    textAlign: 'left',
                                    fontWeight: 'bold'
                                }}
                            >
                                Learn Your Body
                            </Typography>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                Try Our InBody Composition Scale
                            </Typography>
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                width="100%"
                                pr={{ xs: 0, md: 4 }}
                            >
                                <img src={inBodyImage} alt="InBody Composition Scale" style={{ width: '30%', height: 'auto' }} /> {/* Adjust width as needed */}
                                <Typography variant="body1" gutterBottom>
                                    Total body water data can be divided into intracellular water and extracellular water, values important
                                    for understanding a user’s fluid distribution in medical, wellness, and fitness contexts.
                                </Typography>

                            </Box>
                            <Typography variant="body1" gutterBottom>
                                The InBody 570 body composition analyzer goes beyond traditional body composition analysis, measuring fat, muscle, and
                                total body water.
                            </Typography>
                        </Box>
                    ) : (
                        <>
                            <Box display="flex" alignItems="center" width="100%">
                                <Box width={{ xs: '50%', md: '30%' }} pr={{ xs: 0, md: 4 }}>
                                    <img src={inBodyImage} alt="InBody Composition Scale" style={{ width: '100%', height: 'auto' }} />
                                </Box>
                                <Box width="100%">
                                    <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
                                        Learn Your Body
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        Try Our InBody Composition Scale
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Total body water data can be divided into intracellular water and extracellular water, values important
                                        for understanding a user’s fluid distribution in medical, wellness, and fitness contexts.
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        The InBody 570 body composition analyzer goes beyond traditional body composition analysis, measuring fat, muscle, and
                                        total body water.
                                    </Typography>
                                </Box>
                            </Box>
                        </>
                    )}
                </Box>
                <Box display="flex" justifyContent="center" >
                    <Button
                        component={Link}
                        to="/appointments"
                        variant="contained"
                        color="primary"
                        sx={{
                            '&:hover': {
                                backgroundColor: fadedPrimaryColor,
                            },
                        }}
                    >
                        Schedule Now
                    </Button>
                </Box>
            </Container>

            <br /><br />

            {/* Widget Section */}

            <Box bgcolor="#f5f5f5" py={4} >
                <br />
                <Container maxWidth="xl">
                    <Box data-fred-widget-reviews></Box>
                </Container>
            </Box>

        </Box>
    );
};

export default HomePage;
